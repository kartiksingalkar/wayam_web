import { React, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import Footer from "../Components/Footer";
import HeaderBar from "../Components/HeaderBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import SearchBox from "../Components/SearchBox";
import AddButton from "../Components/AddButton";
import BenefitManagementComponent1 from "../Components/BenefitManagementComponent1";
import BenefitManagementComponent2 from "../Components/BenefitManagementComponent2";

import "../CSS/benefitmanagement.css";

import axios from "axios";
import NewPlanPopup from "../Pop Up/NewPlanPopup";
import SearchBenifit from "../Components/SearchBenifit";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

// const plans = [
//   {
//     plan: "वार्षिक सभासदत्त्व ",
//     benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
//   },
//   {
//     plan: "6 महिन्याचे सभासदत्त्व सभासदत्त्व ",
//     benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3, लाभ क्रमांक 4",
//   },
//   {
//     plan: "3 महिन्याचे सभासदत्त्व वार्षिक सभासदत्त्व ",
//     benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
//   },
//   {
//     plan: "1 महिन्याचे सभासदत्त्व वार्षिक सभासदत्त्व ",
//     benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3, लाभ क्रमांक 4",
//   },
//   {
//     plan: "गेस्ट सभासदत्त्व ",
//     benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
//   },
// ];

// const benefits = [
//   { benefit: "लाभ क्रमांक 1" },
//   { benefit: "लाभ क्रमांक 2" },
//   { benefit: "लाभ क्रमांक 3" },
//   { benefit: "लाभ क्रमांक 4" },
//   { benefit: "लाभ क्रमांक 5" },
// ];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function BenefitManagement() {
  const [selectedDate, setSelectedDate] = useState("");

  const [selected, setSelected] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDate = (event) => {
    setSelected(event.target.value);
  };

  const [openncpop, setopenncpop] = useState(false);
  const opennewcontentpop = async () => {
    console.log("submitting data", data);
    try {
      console.log(data, "api comming");
      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/createplan`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("filesuploading", response.data);
      if (response.status) {
        console.log("your response is", response.data.id);
        let content_id = response.data.id;
        uploadCoverImgFile(content_id);
      }
      // if(res)
      if (response.status === 200) {
        console.log("sdfsdf", response.data);
      }
    } catch (err) {
      console.log(err);
    }
    // setopenncpop(!openncpop);
  };

  // uploadbenifitimage
  const [selectedFile, setSelectedFile] = useState(null);

  const [coverImg, setCoverImg] = useState();
  const handleFileChange = (event) => {
    setCoverImg(event.target.files[0]);

    const file = event.target.files[0];

    console.log("sfsdfsdfsdF", data.img_path);

    if (file) {
      setSelectedFile(file);
      console.log(file);
    } else {
      setSelectedFile(null);
    }
  };
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);

  const [data, setData] = useState({});
  const uploadImage = async () => {
    const data = new FormData();
    data.append("cover_image", coverImg);
    console.log(data.cover_image);
  };
  // code is here
  const [coverImgFile, setCoverImgFile] = useState();

  const handleCoverImgChange = (e) => {
    setCoverImgFile(e.target.files[0]);
  };
  const uploadCoverImgFile = async (content_id) => {
    console.log("Hello : " + content_id);

    const data = new FormData();
    data.append("benifit_img", coverImgFile);
    data.append("content_id", content_id);
    console.log(content_id);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadbenifitimage?plan_id=${content_id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("asdasd", response.data);
      if (response.data) {
        console.log("navigating to dashboard");
        alert("Plan Created Successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // till here

  const handleChange = (key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    console.log(data);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      {/* start of navbar */}
      <Box
        sx={{
          width: "100%",
          // height: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Navbar /> */}
        <HeaderBar />
      </Box>
      {/* end of navbar */}

      {/* start of main ptype */}
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          margin: "10px auto 10px auto",
        }}
      >
        <Box
          sx={{
            color: "#4F62B0",
            marginLeft: "20px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Typography>Plan management</Typography>
        </Box>
        <Box
          sx={{
            width: "97%",
            height: "100%",
            backgroundColor: "#E1E5F8",
            display: "flex",
            flexDirection: "column",
            margin: "15px auto 10px auto",
            display: "flex",
            flexWrap: "wrap",
            "@media (max-width:768px)": { height: "auto" },
          }}
        >
          <Box
            sx={{
              margin: "0.5%",
              flexGrow: 1,
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                  flexWrap: "wrap",
                  minWidth: "320px",
                  "@media (max-width:768px)": {
                    margin: "0px",
                    justifyContent: "center",
                  },
                }}
              >
                <TextField
                  value={data.plan_name}
                  onChange={(e) => {
                    handleChange("plan_name", e.target.value);
                  }}
                  placeholder="Name of the Plan"
                  variant="outlined"
                  size="small"
                  style={{
                    background: "#FFFFFF",
                    width: 320,
                    margin: 20,
                    borderRadius: "5px",
                  }}
                />

                <Box>
                  <TextField
                    value={data.plan_start_date}
                    onChange={(e) => {
                      handleChange("plan_start_date", e.target.value);
                    }}
                    placeholder="Plan Activation Date"
                    variant="outlined"
                    size="small"
                    style={{
                      background: "#FFFFFF",
                      width: 320,
                      margin: 20,
                      borderRadius: "5px",
                    }}
                  />
                  <Typography sx={{ color: "blue", fontSize: 10, ml: 5 }}>
                    Format(yyyy-mm-dd)only
                  </Typography>
                </Box>

                <Box>
                  <TextField
                    value={data.plan_end_date}
                    onChange={(e) => {
                      handleChange("plan_end_date", e.target.value);
                    }}
                    placeholder="Plan Activation Date"
                    variant="outlined"
                    size="small"
                    style={{
                      background: "#FFFFFF",
                      width: 320,
                      margin: 20,
                      borderRadius: "5px",
                    }}
                  />
                  <Typography sx={{ color: "blue", fontSize: 10, ml: 5 }}>
                    Format(yyyy-mm-dd)
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  minWidth: "320px",
                  "@media (max-width:768px)": {
                    margin: "0px",
                    justifyContent: "center",
                  },
                }}
              >
                <TextField
                  value={data.plan_payment}
                  onChange={(e) => {
                    handleChange("plan_payment", e.target.value);
                  }}
                  placeholder="plan charges"
                  variant="outlined"
                  size="small"
                  style={{
                    background: "#FFFFFF",
                    width: 320,
                    margin: 20,
                    borderRadius: "5px",
                  }}
                />

                <TextField
                  value={data.plan_duration}
                  onChange={(e) => {
                    handleChange("plan_duration", e.target.value);
                  }}
                  placeholder="Duration"
                  variant="outlined"
                  size="small"
                  style={{
                    background: "#FFFFFF",
                    width: 320,
                    margin: 20,
                    borderRadius: "5px",
                  }}
                />
                <TextField
                  // value={data.plan_name}
                  // onChange={(e) => {
                  //   handleChange("plan_name", e.target.value);
                  // }}
                  placeholder="Total Amount"
                  variant="outlined"
                  size="small"
                  style={{
                    background: "#FFFFFF",
                    width: 320,
                    margin: 20,
                    borderRadius: "5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  minWidth: "320px",
                  marginBottom: "20px",
                  "@media (max-width:768px)": {
                    margin: "0px",
                    justifyContent: "center",
                  },
                }}
              >
                <TextField
                  // value={data.plan_name}
                  //  onChange={(e) => {
                  //    handleChange("plan_name", e.target.value);
                  //  }}
                  placeholder="Select Eligible Subscriber Group "
                  variant="outlined"
                  size="small"
                  style={{
                    background: "#FFFFFF",
                    width: 320,
                    margin: 20,
                    borderRadius: "5px",
                  }}
                />
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                    }}
                  >
                    <input
                      type="file"
                      onChange={handleFileChange}
                      style={{ margin: 20 }}
                    />
                    {selectedFile ? (
                      <div>
                        {/* <p>Selected File: {selectedFile.name}</p> */}
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                          style={{ width: 300, margin: 20 }}
                          size="medium"
                        />
                      </div>
                    ) : (
                      <p style={{ margin: 20 }}>No file chosen</p>
                    )}
                  </Box>
                </Box>
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
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{
                    width: "98%",
                    margin: "10px",
                    marginY: "30px",
                    "@media (max-width:768px)": { width: "320px" },
                  }}
                  onClick={opennewcontentpop}
                >
                  <AddButton buttonTitle={"Submit"} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* end of main ptype  */}

      {/* start of footer */}
      <Box
        sx={{
          left: 0,
          bottom: 0,
          width: "100%",
          height: "10vh",
        }}
      >
        <Footer />
      </Box>
      {/* // end of footer */}

      {/* {planOpen && (
        <NewPlanPopup
          planData={planData}
          setPlanData={setPlanData}
          open={planOpen}
          setPlanOpen={setPlanOpen}
        />
      )} */}
    </Box>
  );
}
