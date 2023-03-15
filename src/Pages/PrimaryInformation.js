import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { TextField } from "@mui/material";
// import '../CSS/Organisational_info.css'
import img2 from "../Images/Picture2.png";
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

  // return (
  //   <Box>
  //     {/* Header */}
  //     <HeaderBar />
  //     {/* Main Container */}
  //     <Box sx={{ display: "flex" }}>
  //       {/* Input Fields */}
  //       <Box
  //         sx={{
  //           Width: 500,
  //           backgroundColor: "#E1E5F8",
  //           margin: "5%",
  //           padding: "2%",
  //           borderRadius: "5px",
  //           position: "sticky",
  //         }}
  //       >
  //         <h3 className="h3tag">संस्थेची माहिती </h3>
  //         {/* Stepper */}
  //         <Stepper activeStep={activeStep} orientation="vertical">
  //           {steps.map((step, index) => (
  //             <Step key={step.label}>
  //               <StepLabel
  //                 optional={
  //                   index === 2 ? (
  //                     <Typography variant="caption">Last step</Typography>
  //                   ) : null
  //                 }
  //               >
  //                 {step.label}
  //               </StepLabel>
  //               <StepContent sx={{width: '50%'}}>
  //                 <TextField
  //                   label="नाव"
  //                   className="inputField2"
  //                   size="small"
  //                   variant="outlined"
  //                 />

  //                 <TextField
  //                   id="outlined-basic"
  //                   label="लोगो अपलोड करा"
  //                   className="inputField2"
  //                   size="small"
  //                   sx={{ marginTop: "20px" }}
  //                   variant="outlined"
  //                 />
  //                 <Box sx={{ mb: 2 }}>
  //                   {/* Submit Button */}
  //                   <div>
  //                     <Button
  //                       variant="contained"
  //                       onClick={handleNext}
  //                       sx={{ mt: 1, mr: 1 }}
  //                     >
  //                       {index === steps.length - 1
  //                         ? "प्रस्तुत करा"
  //                         : "पुढे जा"}
  //                     </Button>
  //                     <Button
  //                       disabled={index === 0}
  //                       onClick={handleBack}
  //                       sx={{ mt: 1, mr: 1 }}
  //                     >
  //                       मागे जा
  //                     </Button>
  //                   </div>
  //                 </Box>
  //               </StepContent>
  //             </Step>
  //           ))}
  //         </Stepper>
  //         {activeStep === steps.length && (
  //           <Paper square elevation={0} sx={{ p: 3 }}>
  //             <Typography>
  //               All steps completed - you&apos;re finished
  //             </Typography>
  //             <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
  //               Reset
  //             </Button>
  //           </Paper>
  //         )}
  //       </Box>
  //       {/* Right Image */}
  //       <Box sx={{ flexDirection: "column" }}>
  //         <img className="img2" alt="hello" src={img2} />
  //       </Box>
  //     </Box>
  //     {/* Footer */}
  //     <Footer />
  //   </Box>
  // );
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
