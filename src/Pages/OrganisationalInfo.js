import { Box, Typography } from "@mui/material";

import { React, useState } from "react";
import Footer from "../Components/Footer";
// import Header from "../Components/Header";
import "../CSS/Organisational_info.css";
import img1 from "../Images/management1.png";
import img2 from "../Images/organizationchart2.png";
import img3 from "../Images/organizationchart1.png";
import HeaderBar from "../Components/HeaderBar";
import { Link } from "react-router-dom";
import StaffList from "../Components/StaffList";
import AssignRolepopUp from "../Pop Up/AssignRolepopUp";

export default function OrganisationalInfo() {
  const [open, setOpen] = useState(false);

  const openStaffList = () => {
    setOpen(!open);
  };
  const [opn, setopn] = useState(false);

  const AssignRolepage = () => {
    setopn(!opn);
  };

  return (
    <div>
      {/* Header */}
      <HeaderBar />
      {/* Main Container */}
      <Box
        sx={{
          height: "70vh",
          // backgroundColor: 'transparent',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          m: 2,
        }}
      >
        {/* .................first side */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth:"250px",
            minHeight:"200px",
            width: "46%",
            minHeight:"250px",
            backgroundColor: "#E1E5F8",
            margin: "0px auto 0px auto",
            justifyContent: "center",
            alignItems: "center",
            marginBottom:'5px',
          }}
        >
        {/* <Link to="/PrimaryInformation"  style={{ textDecoration: "none", color: "#4F62B0" }}> */}

          <Box
            sx={{
              height: "35%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
        <Link to="/PrimaryInformation"  style={{ textDecoration: "none", color: "#4F62B0" }}>

            <Typography
             mt={4}
             sx={{ fontFamily: "poppins", fontWeight: 500, color: "#4F62B0",margin:"5% auto 0px auto" }}
            >
             Preliminary information
            </Typography>  
            </Link>          
          </Box>
          {/* </Link> */}
          
          <Link to="/PrimaryInformation"  style={{ textDecoration: "none", color: "#4F62B0" }}>
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <img src={img1} alt="SVG" width="95vh" height="95vh" />
          </Box>
        </Link>


        </Box>

        {/* .........................first side end */}

        {/* ............................2nd side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth:"250px",

            width: "49%",
            height: "100%",
            margin: "0px auto 0px auto",
            marginBottom:'5px',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            minWidth:"250px",

              height: "48%",
              backgroundColor: "#E1E5F8",
              margin: "0px 0px auto 0px",
            }}
          >
            <Box
              sx={{
                height: "15%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              onClick={openStaffList}
            >
              <Typography
                mt={2}
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  color: "#4F62B0",
                  margin:"5% auto 1px auto"
                }}
              >
                
Add staff
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <img
                src={img2}
                alt="SVG"
                width="90vh"
                height="90vh"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "48%",
              backgroundColor: "#E1E5F8",
            }}
          >
            <Box
              sx={{
                height: "15%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              onClick={AssignRolepage}
            >
              <Typography
                mt={2}
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  color: "#4F62B0",
                  margin:"5% auto 0px auto"
                }}
              >
               Role configuration
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <img
                src={img3}
                alt="SVG"
                width="90vh"
                height="90vh"
              />
            </Box>
          </Box>
        </Box>

        {/* .............................2nd side ends */}



      </Box>
      {/* Footer */}
      <Footer />
      {open && <StaffList open={open} setOpen={setOpen} />}
      {opn && <AssignRolepopUp open={opn} setOpen={setopn} />}
    </div>
  );
}
