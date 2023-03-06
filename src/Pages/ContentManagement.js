import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
// import ContentInside from "../Components/ContentInside";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
// import SearchContentM from "../Components/SearchContentM";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import LinkContent from "../Components/LinkContent";
import AddMajkur from "../Components/AddMajkur";
import SadarMajkur from "../Components/SadarMajkur";
import HeaderBar from "../Components/HeaderBar";
import SearchDownContent from "../Components/SearchDownContent";
import { Link } from "react-router-dom";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ContentManagement(props) {
  const [data, setData] = useState({});
  const [checked_1, setChecked_1] = useState(false);
  const [checked_2, setChecked_2] = useState(false);

  const location = useLocation();

  const [category, setCategory] = useState(location.state.category);
  const [planData, setPlanData] = useState([]);
  const [subData, setSubData] = useState({});

  const [issues, setIssues] = useState([]);
  const [issueContent, setIssueContent] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallissues`
        );
        // console.log("Plans : " + JSON.stringify(response.data.data));
        // setBenifitData(response.data.data);
        setIssues(response.data.data);
        // console.log("Issues : " + JSON.stringify(issues));
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {}, [category, issues]);

  const handleCheckBox = (key, value) => {
    if (key === 1) {
      setChecked_1(value);
      console.log("checked : ", checked_1);
    }
    if (key === 2) {
      setChecked_2(value);
      console.log("checked : ", checked_2);
    }
  };

  const [u, setU] = useState(0);

  const handleIssueChange = (value) => {
    handleChange("issue_id", value);
  };

  const handleSubscriptionCheckbox = (key, value) => {
    setSubData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    setU(!u);
    handleChange("subscription", subData);
    // console.log("Sub Data : ", subData);
  };

  useEffect(() => {}, [u]);

  const handleChange = (key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const [audioFile, setAudioFile] = useState();
  const [coverImgFile, setCoverImgFile] = useState();

  const handleAudioChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleCoverImgChange = (e) => {
    setCoverImgFile(e.target.files[0]);
  };

  const uploadCoverImgFile = async (content_id) => {
    console.log("Hello : " + content_id);

    const formData = new FormData();
    formData.append("cover_image", coverImgFile);
    formData.append("content_id", content_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadcoverimage?content_id=${content_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadAudioFile = async (content_id) => {
    console.log("Hello : " + content_id);

    const formData = new FormData();
    formData.append("audio_file", audioFile);
    formData.append("content_id", content_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadaudio?content_id=${content_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async () => {
    console.log(data);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/createContent`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status) {
        let content_id = response.data.id;
        uploadAudioFile(content_id);
        uploadCoverImgFile(content_id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallplans`
        );
        // console.log("Plans : " + JSON.stringify(response.data.data));
        // setBenifitData(response.data.data);
        setPlanData(response.data.data);
        console.log("Plans : " + JSON.stringify(planData));
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  const [txtFileData, setTxtFileData] = useState("");

  const onTxtChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const txt = e.target.result;
      setData((prevState) => {
        return {
          ...prevState,
          content_text: txt,
        };
      });
      console.log(txt);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <HeaderBar />

      <Box sx={{ mx: "8%" }}>
        <Link
          to="/Librarymanagement"
          style={{ textDecoration: "none", color: "black" }}
        >
          <LinkContent
            link_title1={"लायब्ररी व्यवस्थापन"}
            link_title2={" /लायब्ररी व्यवस्थापन"}
          />
        </Link>
      </Box>
      <Box sx={{ mx: "8%", mt: "-1%" }}>
        <AddMajkur />
      </Box>

      <Box sx={{ justifyContent: "center" }}>
        {/* <SearchContentM /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: "-1%",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              mx: 4,
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "350px",
              mt: 1,
            }}
          >
            <TextField
              id="outlined-basic"
              sx={{ width: "100%", height: "10%" }}
              placeholder="मजकुराचे नाव"
              label="मजकुराचे नाव"
              variant="outlined"
              size="small"
              onChange={(e) => {
                handleChange("content_name", e.target.value);
              }}
            />
          </Box>
          <Box
            sx={{
              mx: 4,
              mt: 1,
              width: "25%",
              borderRadius: 1,
              borderColor: "#999999",
              minWidth: "350px",
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="लेखकाचे नाव"
              size="small"
              label="लेखकाचे नाव"
              sx={{ width: "100%" }}
              key="writer"
              onChange={(e) => {
                handleChange("writer", e.target.value);
              }}
            />
          </Box>

          <Box
            sx={{
              mx: 4,
              mt: 1,
              width: "25%",
              borderRadius: 1,
              borderColor: "#999999",
              minWidth: "350px",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                मजकूर प्रकार
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                onChange={(e) => {
                  handleChange("content_category", e.target.value);
                }}
              >
                {category.map((item, index) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}

                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </Box>

          {/* <Box sx={{ width: "25%", mx: 4, mt: 1, minWidth: "350px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                मजकूर प्रकार{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
        </Box>

        {/* <SearchContentM /> */}
      </Box>
      {/* main serachbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            width: "25%",
            bgcolor: "#E1E5F8",
            minWidth: "350px ",
            mx: 4,
            mt: 1,
          }}
        >
          <Box sx={{ color: "#4F62B0", mx: "6%" }}>
            <h3>लिखित साहित्य </h3>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <OutlinedInput
              id="outlined-basic"
              placeholder="फाएलाचे नाव"
              size="small"
              sx={{ bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("file_name", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="पृष्ठांची संख्या"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("pages", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="साईज"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("txt_file_size", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="ओळींची संख्या "
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("no_of_line", e.target.value);
              }}
            />
            <OutlinedInput
              type="file"
              id="outlined-basic"
              placeholder="अपलोड फाइल"
              size="small"
              sx={{ mt: 2, mb: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                onTxtChange(e);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
            />
          </Box>
        </Box>

        {/* कथाकथन  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            width: "25%",
            bgcolor: "#E1E5F8",
            minWidth: "350px",
            mx: 4,
            mt: 1,
          }}
        >
          <Box sx={{ color: "#4F62B0", mx: "6%" }}>
            <h3>कथाकथन </h3>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <OutlinedInput
              id="outlined-basic"
              placeholder="फाएलाचे नाव"
              size="small"
              sx={{ bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("aut_file_name", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              type="file"
              placeholder="कव्हर इमेज"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
              onChange={(e) => {
                handleCoverImgChange(e);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="कालावधी"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("aud_duration", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="ऑडिओ वक्ता "
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              type="file"
              placeholder="अपलोड फाइल"
              size="small"
              onChange={(e) => {
                handleAudioChange(e);
              }}
              sx={{ mt: 2, mb: 2, bgcolor: "white", width: "80%" }}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
            />
          </Box>
        </Box>

        {/* दृकश्राव्य  */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            width: "25%",
            bgcolor: "#E1E5F8",
            minWidth: "350px",
            mx: 4,
            mt: 1,
          }}
        >
          <Box sx={{ color: "#4F62B0", mx: "6%" }}>
            <h3>दृकश्राव्य </h3>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <OutlinedInput
              id="outlined-basic"
              placeholder="फाएलाचे नाव"
              size="small"
              sx={{ bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="पृष्ठांची संख्या"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("no_of_line", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="साईज"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="ओळींची संख्या"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="अपलोड फाइल"
              size="small"
              sx={{ mt: 2, mb: 2, bgcolor: "white", width: "80%" }}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mx: "8%" }}>
        <SadarMajkur />
      </Box>
      <Box sx={{ width: "88%", margin: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              येथे प्रकाशित करा{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="लाभ निवडा"
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%",
                color: "gray",
              }}
            >
              <FormControl component="fieldset" sx={{ width: "90%" }}>
                <FormGroup aria-label="position" column>
                  {[
                    { type: "अंक", id: 1, value: checked_1 },
                    { type: "ओन्ली इन अँप", id: 2, value: checked_2 },
                  ].map((item) => {
                    return (
                      <FormControlLabel
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        control={
                          <Checkbox
                            checked={item.value}
                            onChange={(e) => {
                              handleCheckBox(item.id, e.target.checked);
                            }}
                          />
                        }
                        label={item.type}
                        labelPlacement="start"
                      />
                    );
                  })}
                </FormGroup>
              </FormControl>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="demo-simple-select-label">
              सुबस्क्रिपशन टाईप{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="लाभ निवडा"
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%",
                color: "gray",
              }}
            >
              <FormControl
                component="fieldset"
                sx={{ width: "90%", height: "50vh" }}
              >
                <FormGroup aria-label="position" column>
                  {planData.map((item) => {
                    return (
                      <FormControlLabel
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        control={
                          <Checkbox
                            checked={subData[item.plan_id]}
                            onChange={(e) => {
                              handleSubscriptionCheckbox(
                                item.plan_id,
                                e.target.checked
                              );
                            }}
                          />
                        }
                        label={item.plan_name}
                        labelPlacement="start"
                      />
                    );
                  })}
                </FormGroup>
              </FormControl>
            </Select>
          </FormControl>

          <Button
            sx={{ width: "180px", backgroundColor: "#4F62B0" }}
            variant="contained"
            onClick={handleSubmit}
          >
            पक्के करा{" "}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Footer />
      </Box>

      {checked_1 && (
        <Box sx={{ width: "88%", height: "100vh", margin: "auto" }}>
          <FormControl sx={{ marginLeft: "25px" }}>
            <InputLabel id="demo-simple-select-label">अंक नाव</InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={data.template_id}
              label="अंक नाव"
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%",
                color: "gray",
                marginLeft: "2%",
              }}
              onChange={(e) => {
                handleIssueChange(e.target.value);
              }}
            >
              {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
              {issues.map((item) => {
                return (
                  <MenuItem value={item.issue_id}>{item.issue_name}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      )}
    </div>
  );
}
