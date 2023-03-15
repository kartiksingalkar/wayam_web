import React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";


import { TextField } from "@mui/material";

import HeaderBar from "../Components/HeaderBar";
import styles from "../Components/global";
import axios from "axios";

//  Temp Data
const steps = [
  {
    key: "name",
    label: <h3 className="h3tag">प्राथमिक माहिती</h3>,
  },
  {
    label: <h3 className="h3tag">लीगल इन्फॉर्मशन</h3>,
  },
];

export default function PrimaryInformation() {
  // Steps Counter
  const [activeStep, setActiveStep] = React.useState(0);
  // Next Stwp
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  // Previous Step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // Reset
  const handleReset = () => {
    setActiveStep(0);
  };

  const [data, setData] = React.useState({});

  const handleChange = (key, value) => {
    setData((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/updateorgname`,
        data
      );
      if(response.data.status){
        console.log("Name changed successfully")
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <HeaderBar />
      <Box sx={{ display: "flex", alignItems: "center", height: "90vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#E1E5F8",
            width: "400px",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            margin: "auto",
          }}
        >
          <TextField
            label="नाव"
            className="inputField2"
            size="small"
            sx={{ marginTop: "20px" }}
            variant="outlined"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Upload Your Logo"
            className="inputField2"
            size="small"
            sx={{ marginTop: "20px" }}
            variant="outlined"
          />

          <Button
            variant="contained"
            disableElevation
            onClick={handleSubmit}
            sx={[styles.btn, styles.basicButton, { marginTop: "40px" }]}
          >
           Publish 
          </Button>
        </Box>
      </Box>
    </>
  );
}
