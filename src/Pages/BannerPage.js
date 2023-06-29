import { React, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
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
import Allbaners from "./Allbaners";

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

  

  const [openncpop, setopenncpop] = useState(false);
  const opennewcontentpop = async () => {
    // console.log("submitting data", data);
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
    console.log(e.target.files[0])
    setCoverImgFile(e.target.files[0]);
  };
  const uploadCoverImgFile = async (content_id) => {
    console.log("Hello : " + content_id);

    const data = new FormData();
    data.append("banner_img", coverImgFile);
    data.append("content_id", content_id);
    console.log(content_id);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadbannerimg?id=${content_id}`,
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
        alert("banner  Created Successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // till here

  const handleChange = (key, value) => {
    console.log(key , value)
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    // console.log(data);
  };
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getBanner`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("all baners fetched", response.data.data);
        if (response.data.status) {
          setBanner(response.data.data);
        }
        // console.log(response.data.data);
      } catch (e) {}
    }
    fetchData();
  }, []);

const handleBanner= async ()=>{
    console.log(data)
    try {
        console.log(data, "api comming");
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/addbanner`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("filesuploading", response.data.data[0].id);
        if (response.status) {
          console.log("your response is", response.data.data[0].id);
          let content_id = response.data.data[0].id;
          uploadCoverImgFile(content_id);
        }
        // if(res)
        if (response.status === 200) {
          console.log("sdfsdf", response.data);
        }
      } catch (err) {
        console.log(err);
      }
}
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
          <Typography>Add Banner</Typography>
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
                  flexDirection: "row",
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
                  value={data.name}
                  onChange={(e) => {
                    handleChange("name", e.target.value);
                  }}
                  placeholder="Name of the Banner"
                  variant="outlined"
                  size="small"
                  style={{
                    background: "#FFFFFF",
                    width: 320,
                    margin: 20,
                    borderRadius: "5px",
                  }}
                />
     
            
                
                 
                <OutlinedInput
                  id="outlined-basic"
                  type="file"
                  label="cover image"
                  placeholder="Cover Image"
                  size="small"
                  sx={{ mt: 2, bgcolor: "white", width: "90%" ,ml:2}}
                  endAdornment={
                    <InputAdornment position="end">
                      <DriveFolderUploadIcon />
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    handleCoverImgChange(e);
                  }}
                />
               <RadioGroup
                row
                // aria-labelledby="demo-row-radio-buttons-group-label"
                sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',my:2}}
                name="row-radio-buttons-group"
                value={data.showstatus}
                onChange={(e) => {
                  handleChange("showstatus", e.target.value);
                }}
              >
                {/* <Typography sx={Styles.gender}>Gender</Typography> */}
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="inactive"
                  control={<Radio />}
                  label="Draft"
                />
              </RadioGroup>
               
                <Box
                  display="flex"
                //   justifyContent="flex-end"
                  sx={{
                    width: "100%",
                    margin: "10px",
                    marginY: "30px",
                    height:'35px',
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: '#4F62B0',
                    borderRadius: "5px",
                    // display: "flex",
                    alignItems: "center",
                    // "@media (max-width:768px)": { width: "320px" },
                  }}
                  onClick={handleBanner}
                >
                    <Typography sx={{color:'#FFFFFF'}} >Submit</Typography>
                  {/* <AddButton buttonTitle={"  Submit  "} /> */}
                </Box>
              </Box>
             

            </Box>
            <Box sx={{width:'100%' , border:1 , height:200,display:'flex' , flexDirection:'row' , overflowX:'scroll'}} >
 {banner.map((item)=>( 
  <Box
  sx={{
    mx: 1,
    display: "flex",
    flexDirection: "row",
    // border: 1,
    my: 1,
    height: 150,
  }}
>
  <Allbaners plan={item} />
  {/* <Typography sx={{color:'black'}} >{item.plan_name}</Typography> */}
</Box>
 ))} 

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
