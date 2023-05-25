import { React, useEffect, useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

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

  const [openncpop, setopenncpop] = useState(false);
  const opennewcontentpop = () => {
    setopenncpop(!openncpop);
  };


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  }
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);

  const openNewPlanPopup = () => {
    setPlanOpen(!planOpen)
  }

  const openNewBenifitPopuo = () => {
    setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [planData, setPlanData] = useState([]);



  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallplans`
        );
        console.log("Plans : " + JSON.stringify(response.data.data));
        // setBenifitData(response.data.data);
        setPlanData(response.data.data)
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

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
        <Box sx={{ color: "#4F62B0", marginLeft: "20px", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
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
            display: "flex", flexWrap: "wrap",
            '@media (max-width:768px)':{height:"auto"}
          }}
        >
          <Box
            sx={{
              margin: "0.5%",
              flexGrow: 1,
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              marginBottom:'10px',

            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
              <Box sx={{ width: "20%", display: "flex", flexDirection: "column", marginLeft: 10, flexWrap: "wrap", minWidth: "320px", "@media (max-width:768px)": { margin: "0px", justifyContent: "center" } }}>
                <TextField id="outlined-basic" label="Name of the Plan" variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />
                
                <TextField id="outlined-basic" label="Plan Activation Date" variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />
                <TextField id="outlined-basic" label="Plan Expiray Date" variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />

              </Box>

              <Box sx={{ width: "20%", display: "flex", flexDirection: "column", flexWrap: "wrap", minWidth: "320px", "@media (max-width:768px)": { margin: "0px", justifyContent: "center" } }}>
                <TextField id="outlined-basic" label="Plan Charges" variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />
                <TextField id="outlined-basic" label="Taxes" variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />
                <TextField id="outlined-basic" label="Total Amount" variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />



              </Box>

              <Box sx={{ width: "20%", display: "flex", flexDirection: "column", flexWrap: "wrap", minWidth: "320px",marginBottom:"20px", "@media (max-width:768px)": { margin: "0px", justifyContent: "center" } }}>
                <TextField id="outlined-basic" label="Select Eligible Subscriber Group " variant="outlined" size="small" style={{ background: "#FFFFFF", width: 320, margin: 20, borderRadius: "5px" }} />
                <Box>
                  <Box style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>


                    <input type="file" onChange={handleFileChange} style={{ margin: 20 }} />
                    {selectedFile ? (
                      <div>
                        {/* <p>Selected File: {selectedFile.name}</p> */}
                        <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ width: 300, margin: 20 }} size="medium" />
                      </div>
                    ) : (
                      <p style={{ margin: 20 }}>No file chosen</p>
                    )}

                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ width: "98%", margin: "10px", marginY: "30px", '@media (max-width:768px)': { width: '320px' } }}
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
