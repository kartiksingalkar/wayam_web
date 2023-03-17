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
  Text,
  Typography,
} from "@mui/material";
import styles from "../Components/global";

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

  const [isForUpdate, setIsForUpdate] = useState(false);

  const [issues, setIssues] = useState([]);
  const [issueContent, setIssueContent] = useState([]);
  const [contentId, setContentId] = useState();

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

  useEffect(() => {
    handleChange("subscription", subData);
  }, [subData, data]);

  useEffect(() => {
    // if (location.state.update) {
    //   setData(location.state.data2);
    // }
    setIsForUpdate(location.state.update);
    if (isForUpdate) {
      setContentId(location.state.content_id);
    }
  }, [contentId, isForUpdate]);

  useEffect(() => {
    if (isForUpdate) {
      try {
        async function getData() {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/getupdatecontent?content_id=${contentId}`
          );
          console.log(
            "Content Data : " + JSON.stringify(response.data.data[0])
          );
          setData(response.data.data[0]);
          for (
            let i = 0;
            i <= response.data.data[0].plan_to_push[i].length;
            i++
          ) {
            console.log(
              "Data of Sub : " + response.data.data[0].plan_to_push[i]
            );
            handleSubscriptionCheckbox(
              response.data.data[0].plan_to_push[i],
              true
            );
          }
        }
        getData();
      } catch (e) {
        console.log(e);
      }
    }
  }, [contentId, isForUpdate]);

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

  const [issue_id, setIssueId] = useState();

  const handleIssueChange = (value) => {
    // handleChange("issue_id", value);
    setData((prevState) => {
      return {
        ...prevState,
        issue_id: value,
      };
    });
    // setIssueId(value);
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

    if (isForUpdate) {
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_API_URL}/updateContent?content_id=${contentId}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Hello Response : " + JSON.stringify(response));
        if (response.data.status) {
          let content_id = contentId;
          uploadAudioFile(content_id);
          uploadCoverImgFile(content_id);
          alert("Data Uploaded");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
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
          <LinkContent link_title1={"Library Management"} />
        </Link>
      </Box>
      {/* <Box sx={{ mx: "8%", mt: "-1%" }}>
        <AddMajkur />
      </Box> */}

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
              placeholder="Content Name"
              label="Content Name"
              variant="outlined"
              size="small"
              value={data.content_name}
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
              placeholder="Writer Name"
              size="small"
              label="Writer Name"
              sx={{ width: "100%" }}
              key="writer"
              value={data.writer}
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
                Content Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                value={data.content_category}
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
            <h3>Written Content</h3>
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
              placeholder="File Name"
              size="small"
              value={data.file_name}
              sx={{ bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("file_name", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="
              Number of pages"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              value={data.pages}
              onChange={(e) => {
                handleChange("pages", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Size"
              value={data.file_size}
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("txt_file_size", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Number of lines "
              size="small"
              value={data.no_of_line}
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("no_of_line", e.target.value);
              }}
            />
            <OutlinedInput
              type="file"
              id="outlined-basic"
              placeholder="Upload File"
              label="upload text file"
              size="small"
              sx={{ mt: 2, mb: 1, bgcolor: "white", width: "80%" }}
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
          <Typography
            variant="overline"
            component="h2"
            align="left"
            sx={[styles.subscript, { ml: 5 }]}
          >
            Upload '.Txt' file only
          </Typography>
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
            <h3>Storytelling</h3>
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
              placeholder="File Name"
              size="small"
              sx={{ bgcolor: "white", width: "80%" }}
              value={data.aud_file_name}
              onChange={(e) => {
                handleChange("aud_file_name", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              type="file"
              label="cover image"
              placeholder="Cover Image"
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
            <Typography
              variant="overline"
              component="h2"
              align="left"
              sx={[styles.subscript, { ml: 5 }]}
            >
              Upload Cover Image
            </Typography>
            <OutlinedInput
              id="outlined-basic"
              placeholder="Duration"
              size="small"
              sx={{ mt: 0.5, bgcolor: "white", width: "80%" }}
              value={data.aud_duration}
              onChange={(e) => {
                handleChange("aud_duration", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Audio speaker "
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              value={data.aud_speaker}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              type="file"
              placeholder="Upload File"
              size="small"
              onChange={(e) => {
                handleAudioChange(e);
              }}
              sx={{ mt: 2, mb: 1, bgcolor: "white", width: "80%" }}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
            />
          </Box>
          <Typography
            variant="overline"
            component="h2"
            align="left"
            sx={[styles.subscript, { ml: 5 }]}
          >
            Upload Audio File
          </Typography>
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
            <h3>Videos </h3>
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
              placeholder="File Name"
              size="small"
              sx={{ bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Number of pages"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("no_of_line", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Size"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Number Of Lines"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" }}
              onChange={(e) => {
                handleChange("", e.target.value);
              }}
            />
            <OutlinedInput
              id="outlined-basic"
              placeholder="Upload File"
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
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Publish Here</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Choose Plan"
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
                    { type: "Issue", id: 1, value: checked_1 },
                    { type: "Only In App", id: 2, value: checked_2 },
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
              Subscription Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Choose Plan"
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
            sx={{ width: "25%", backgroundColor: "#4F62B0", height: "50%" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
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
              // value={data.issue_name}
              label="Issue Name"
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
