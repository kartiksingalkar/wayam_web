import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { TextField } from "@mui/material";
// import '../CSS/Organisational_info.css' 
import img2 from "../Images/Picture2.png";

//  Temp Data
const steps = [
  {
    label: <h3 className="h3tag">प्राथमिक माहिती</h3>,
    textFields: (
      <TextField
        id="outlined-basic"
        label="नाव"
        className="inputField2"
        size="small"
        variant="outlined"
      ></TextField>
    ),
    textFields1: (
      <TextField
        id="outlined-basic"
        label="लोगो अपलोड करा"
        className="inputField2"
        size="small"
        sx={{ marginTop: "20px" }}
        variant="outlined"
      ></TextField>
    ),
  },
  {
    label: <h3 className="h3tag">लीगल इन्फॉर्मशन</h3>,
    textFields: (
      <TextField
        id="outlined-basic"
        label="लीगल इन्फॉर्मशन"
        className="inputField2"
        size="small"
        variant="outlined"
      ></TextField>
    ),
    textFields1: (
      <TextField
        id="outlined-basic"
        label="लीगल इन्फॉर्मशन"
        className="inputField2"
        size="small"
        sx={{ marginTop: "20px" }}
        variant="outlined"
      ></TextField>
    ),
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
  return (
    <Box>
      {/* Header */}
      <Header />
      {/* Main Container */}
      <Box sx={{ display: "flex" }}>
        {/* Input Fields */}
        <Box
          sx={{
            Width: 500,
            backgroundColor: "#E1E5F8",
            margin: "5%",
            padding: "2%",
            borderRadius: "5px",
            position: "sticky",
          }}
        >
          <h3 className="h3tag">संस्थेची माहिती </h3>
          {/* Stepper */}
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.textFields}</Typography>
                  <Typography>{step.textFields1}</Typography>
                  <Box sx={{ mb: 2 }}>
                    {/* Submit Button */}
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1
                          ? "प्रस्तुत करा"
                          : "पुढे जा"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        मागे जा
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        {/* Right Image */}
        <Box sx={{ flexDirection: "column" }}>
          <img className="img2" src={img2} />
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
}
