import React, { useEffect, useState } from "react";
// import "../CSS/Issue_management.css";
import Footer from "../Components/Footer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import img1 from "../Images/Picture1.png";
import SubmitButton from "../Components/SubmitButton";
import HeaderBar from "../Components/HeaderBar";
import "../CSS/Issue_management.css";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function IssueManagement() {
  const location = useLocation();
  const [data, setData] = useState({});
  const [coverImgFile, setCoverImgFile] = useState();
  const [coverImgFile1, setCoverImgFile1] = useState();
  const [lastImgFile, setLastImgFile] = useState();
  const [lastImgFile1, setLastImgFile1] = useState();
  const [isForUpdate, setIsForUpdate] = useState(
    location.state?.isForUpdate ? true : false
  );

  // const { id, isForUpdate } = location.state;

  const issueCoverImg = (e) => {
    setCoverImgFile(e.target.files[0]);
  };

  const issueCoverImg1 = (e) => {
    setCoverImgFile1(e.target.files[0]);
  };

  const issueLastImg = (e) => {
    setLastImgFile(e.target.files[0]);
  };

  const issueLastImg1 = (e) => {
    setLastImgFile1(e.target.files[0]);
  };

  const [issue_id, setIssue_id] = useState();

  const handleTemplateChange = (value) => {
    handleChange("template_id", value);
  };

  useEffect(() => {
    // console.log("IsForUpdate : " + isForUpdate);
    if (isForUpdate) {
      async function getData() {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/getissueforupdate?issue_id=${location.state.id}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.data.status) {
            setData(response.data.data[0]);
            // setData((prevData) => {
            //   return {
            //     ...prevData,
            //     publication_date: data.publication_date.slice(0, 10),
            //   };
            // });
            console.log("categories", response.data.data[0]);
          }
        } catch (e) {
          console.log(e);
        }
      }

      getData();
    }
  }, []);

  const issueCoverImgUpload = async (issue_id) => {
    console.log("Hello : " + issue_id);

    const formData = new FormData();
    formData.append("issue_cover_image", coverImgFile);
    formData.append("issue_id", issue_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadissuecoverimg?issue_id=${issue_id}`,
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

  const issueCoverImg1Upload = async (issue_id) => {
    console.log("Hello : " + issue_id);

    const formData = new FormData();
    formData.append("issue_cover_image_1", coverImgFile1);
    formData.append("issue_id", issue_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadissuecoverimg1?issue_id=${issue_id}`,
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

  const issueLastImgUpload = async (issue_id) => {
    console.log("Hello : " + issue_id);

    const formData = new FormData();
    formData.append("issue_last_image", lastImgFile);
    formData.append("issue_id", issue_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadissuelastimg?issue_id=${issue_id}`,
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

  const issueLastImg1Upload = async (issue_id) => {
    console.log("Hello : " + issue_id);

    const formData = new FormData();
    formData.append("issue_last_image_1", lastImgFile1);
    formData.append("issue_id", issue_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadissuelastimg1?issue_id=${issue_id}`,
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

  const handleChange = (key, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  const [templateData, setTemplateData] = useState([]);

  const handleSubmit = async () => {
    if (isForUpdate) {
      try {
        let response = await axios.patch(
          `${process.env.REACT_APP_API_URL}/updateissue?issue_id=${location.state.id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          window.location.reload();
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(data);
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/createissue`,
          data
        );
        console.log(response.data);
        if (response.data.status) {
          setIssue_id(response.data.issue_id);
          console.log("Issue Id : " + issue_id);
          issueCoverImgUpload(response.data.issue_id);
          issueCoverImg1Upload(response.data.issue_id);
          issueLastImgUpload(response.data.issue_id);
          issueLastImg1Upload(response.data.issue_id);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    async function getTemplates() {
      try {
        let response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getalltemplates`
        );

        if (response.data.status) {
          setTemplateData(response.data.data);
          console.log(response.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getTemplates();
  }, []);

  return (
    <Box>
      {/* Header */}
      <HeaderBar />
      {/* Container */}

      <Box className="backBox">
        {/* Upper Text */}
        <Box sx={{ width: "70%" }}>
          <Box>
            <h3 className="prakashanTag">प्रकाशन व्यवस्थापन</h3>
            <h4>शीर्षलेख माहिती</h4>
          </Box>
          {/* Input Field */}
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box className="inputBox">
              <TextField
                id="outlined-basic"
                placeholder="Issue Name"
                // className="inputField1"
                size="small"
                variant="outlined"
                value={data.issue_name}
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                onChange={(e) => {
                  handleChange("issue_name", e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="Issue Number"
                size="small"
                variant="outlined"
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                value={data.issue_no}
                onChange={(e) => {
                  handleChange("issue_no", e.target.value);
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box className="inputBox">
              <OutlinedInput
                id="outlined-basic"
                type="file"
                placeholder="Home Cover Page"
                size="small"
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <DriveFolderUploadIcon />
                  </InputAdornment>
                }
                onChange={(e) => {
                  issueCoverImg(e);
                }}
              />

              <OutlinedInput
                id="outlined-basic"
                type="file"
                placeholder="Home Inside Cover Page"
                size="small"
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <DriveFolderUploadIcon />
                  </InputAdornment>
                }
                onChange={(e) => {
                  issueCoverImg1(e);
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box className="inputBox">
              <OutlinedInput
                id="outlined-basic"
                type="file"
                placeholder="मलपृष्ठ पेज"
                size="small"
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <DriveFolderUploadIcon />
                  </InputAdornment>
                }
                onChange={(e) => {
                  issueLastImg(e);
                }}
              />

              <OutlinedInput
                id="outlined-basic"
                type="file"
                placeholder="मलपृष्ठ आतील पेज"
                size="small"
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <DriveFolderUploadIcon />
                  </InputAdornment>
                }
                onChange={(e) => {
                  issueLastImg1(e);
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box className="inputBox">
              <TextField
                id="outlined-basic"
                placeholder="तारीख"
                size="small"
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
                variant="outlined"
                type="publication_date"
                value={data.publication_date}
                onChange={(e) => {
                  handleChange("publication_date", e.target.value);
                }}
              />
              <FormControl
                sx={{
                  width: "40%",
                  margin: "4px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "320px",
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  टेम्पलेट निवडा
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={data.template_id}
                  placeholder="व्यवस्थापकाचे नाव"
                  size="small"
                  sx={{
                    // width: "400px",
                    backgroundColor: "transparent",
                    marginBottom: "3%",
                    color: "gray",
                    marginLeft: "2%",
                  }}
                  onChange={(e) => {
                    handleTemplateChange(e.target.value);
                  }}
                >
                  {templateData.map((item) => {
                    return (
                      <MenuItem value={item.template_id}>
                        {item.template_name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <h4>कायदेशीर माहिती</h4>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box className="inputBox">
              <TextField
                id="outlined-basic"
                placeholder="कायदेशीर माहिती "
                className="inputField1"
                size="small"
                sx={{
                  // width: "400px",
                  backgroundColor: "transparent",
                  marginBottom: "3%",
                  color: "gray",
                  marginLeft: "2%",
                }}
                variant="outlined"
                value={data.legal_info}
                onChange={(e) => {
                  handleChange("legal_info", e.target.value);
                }}
              />
            </Box>
          </Box>

          <Box
            onClick={handleSubmit}
            sx={{ marginLeft: "1%", marginTop: "3%" }}
          >
            <SubmitButton buttonTitle="मंजुरीसाठी पाठवा" />
          </Box>
        </Box>
        <Box sx={{ width: "10%", marginTop: "5%" }}>
          <img src={img1} alt="hello" />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
