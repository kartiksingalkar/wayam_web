import React from "react";
// import "../CSS/Issue_management.css";
import Footer from "../Components/Footer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import img1 from "../Images/Picture1.png";
import SubmitButton from "../Components/SubmitButton";
import HeaderBar from '../Components/HeaderBar'
import '../CSS/Issue_management.css'

export default function IssueManagement() {
  return (
    <Box>
      {/* Header */}
      <HeaderBar />
      {/* Container */}
      {/* <Box className="box"> */}
      {/* Back Blue box */}
      <Box className="backBox">
        {/* Upper Text */}
        <Box sx={{ width: "70%" }}>
          <Box>
            <h3 className="prakashanTag">प्रकाशन व्यवस्थापन</h3>
            <h4>शीर्षलेख माहिती</h4>
          </Box>
          {/* Input Field */}
          <Box className='inputBox'>
            <TextField
              id="outlined-basic"
              label="अंकाचे नाव"
              className="inputField1"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="अंकाचा क्रमांक "
              className="inputField1"
              size="small"
              variant="outlined"
              sx={{ marginLeft: "25px" }}
            />
          </Box>
          <Box className='inputBox'>
            <TextField
              id="outlined-basic"
              label="मुखपृष्ठ समोरील कव्हर पेज "
              className="inputField1"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="मुखपृष्ठ मागील कव्हर पेज "
              className="inputField1"
              size="small"
              variant="outlined"
              sx={{ marginLeft: "25px" }}
            />
          </Box>
          <Box className='inputBox'>
            <TextField
              id="outlined-basic"
              label="मलपुष्ट  समोरील कव्हर पेज "
              className="inputField1"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="मलपुष्ट  मागील कव्हर पेज "
              className="inputField1"
              size="small"
              variant="outlined"
              sx={{ marginLeft: "25px" }}
            />
          </Box>
          <Box className='inputBox'>
            <TextField
              id="outlined-basic"
              label="तारीख"
              className="inputField1"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="टेम्पलेट निवडा"
              className="inputField1"
              size="small"
              variant="outlined"
              sx={{ marginLeft: "25px" }}
            />
          </Box>
          <h4>कायदेशीर माहिती</h4>
          <Box className='inputBox'>
            <TextField
              id="outlined-basic"
              label="कायदेशीर माहिती "
              className="inputField1"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="कायदेशीर माहिती "
              className="inputField1"
              size="small"
              variant="outlined"
              sx={{ marginLeft: "25px" }}
            />
          </Box>
          <Box className='inputBox'>
            <TextField
              id="outlined-basic"
              label="कायदेशीर माहिती"
              className="inputField1"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="कायदेशीर माहिती"
              className="inputField1"
              size="small"
              variant="outlined"
              sx={{ marginLeft: "25px" }}
            />
          </Box>
          <Box sx={{marginLeft:"7%",marginTop:'3%'}}>
            <SubmitButton buttonTitle='मंजुरीसाठी पाठवा'/>
          </Box>
        </Box>
        <Box sx={{ width: "10%", marginTop: "5%" }}>
          <img src={img1} alt="hello" />
        </Box>
        
      </Box>
      {/* </Box> */}
      {/* Footer */}
      <Footer />
    </Box>
  );
}
