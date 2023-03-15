import { React, useEffect, useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import logo from "../Images/wayamLogo.png";
import loginImage from "../Images/loginImage.png";
import styles from "../Components/global";
import Footer from "../Components/Footer";

export default function ConfirmPassword() {
    const [data, setData] = useState({});


    const handleChange = (key, value) => {
        setData((prevState) => {
            return {
            ...prevState,
            [key]: value,
            };
        });
        };

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 800px)").matches
      );
  return (
     // Main Wrapper
     <Box
     sx={{
       display: "flex",
       flexDirection: "row",
       height: "92vh",
       flexWrap: "wrap",
       justifyContent: "center",
       textAlign:"center",
       fontFamily:"Poppins",
     }}
   >

     {/* Start Form Container */}
     <Box
       sx={{
         display: "flex",
         alignItems: "center",
         textAlign:"center",
         flex: "1",
         justifyContent:"center",
       }}
     >
       <Box
         sx={{ height: "50vh", width: "100%", margin: "80px auto 0px auto"}}
       >
         {/* Start Header Container */}
         <Container
           sx={{
             display: "flex",
             alignItems: "center",
             flexDirection: "column",
           }}
         >
           <img src={logo} alt="SVG" width='400px' height='165.44px' />
           
           
         </Container>
         {/* End Header Container */}

         

         {/* Start of Form */}
         <Container
           sx={{
             display: "flex",
             marginTop: "10px",
             height: "60%",
             flexDirection: "column",
           }}
         >
           <TextField
             value={data.username}
             onChange={(e) => {
               handleChange("username", e.target.value);
             }}
             required
             size="small"
             label="Enter New Password "
             variant="outlined"
             sx={styles.textField}
           />

           <TextField
             value={data.username}
             onChange={(e) => {
               handleChange("username", e.target.value);
             }}
             required
             size="small"
             label=" Confirm New Password"
             variant="outlined"
             sx={styles.textField}
           />
           
           <Button
           //   onClick={handleSubmit}
             variant="contained"
             disableElevation
             sx={[styles.btn, styles.basicButton]}
           >
               <Typography sx={
                   {
                   fontFamily:'Poppins',
                   fontWeight:'600',
                   fontSize:'16px',
                   lineHeight:'24px',
                   textAlign:'center',

                   }
               } >
             Update Password
             </Typography>
           </Button>

           
         </Container>
         {/* End of Form */}
       </Box>
     </Box>
     {/* End of Form Container */}

     {/* Start of Image Container */}
     {matches && (
       <Box  sx={{ 
           backgroundColor: 'primary.dark',
           backgroundColor: '#E1E5F8;',
           height: "92vh", flex: "1", width: "100px" }}>
         <Box 

              sx={
               {
                   marginTop:10,
                   justifyContent:"center",
                   alignItems:"center",
                   textAlign:"center",
               }
              }>
         <img
           src={loginImage}
           alt="SVG"
           width="500px"
           height="518.91px"
           sx={{ 
               justifyContent:"center",
               alignItems:"center", }}
         />
         </Box>
       </Box>
     )}
     {/* End of Image Container */}
     <Box sx={{
       left: 0,
       bottom: 0,
       width: '100%',
       height:"8vh",
     }}>
      <Footer/>
      </Box> 
   </Box>
  )
}
