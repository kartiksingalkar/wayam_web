import { React, useState } from "react";
import { Box, Typography } from "@mui/material";
// import Footer from "../Components/Footer";

import management1 from "../Images/management1.png";
import organizationchart1 from "../Images/organizationchart1.png";
import benefits1 from "../Images/benefits1.png";
import writer1 from "../Images/writer1.png";
import uidesign1 from "../Images/uidesign1.png";
import "../CSS/dashboard.css";
import { Link } from "react-router-dom";

import HeaderBar from "../Components/HeaderBar";
// import StaffList from "../Components/StaffList";
import SubscriberListPopUp from "../Pop Up/SuscriberListPopUp";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const openSubscriberList = () => {
    setOpen(!open);
  };

  return (
    // start of navbar
    <Box sx={{ height: "100vh" }}>
      <HeaderBar />

      {/* // end of navbar */}

      {/* // start of dashboard */}
      <Box
        sx={{
          height: "80vh",
          // backgroundColor: 'transparent',
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* upper grid */}
        <Box
          className="upperGrid"
          sx={{
            width:'100%',
            height: "65vh",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            mt: 2,
            // flex:1,
            // margin: "10px auto 10px auto",
          }}
        >
          <Box
            sx={{
              width: "46%",
              textAlign: "center",

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E1E5F8",

              minWidth: "250px",
              maxWidth: "50%",
              m: 1,
            }}
          >
            <Link
              to="/Organisationalinfo"
              style={{ textDecoration: "none", color:"#4F62B0" }}
            >
              <Box
                sx={{
                  height: "10vh",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography mt={3}>Institute Information</Typography>
              </Box>

              <Box
                className="box1"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <img src={management1} alt="SVG" width="80vh" height="80vh" />
              </Box>
            </Link>
          </Box>

          <Box
            sx={{
              width: "45%",
              // height:"50vh",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E1E5F8",
              // margin:"0px 10px 0px 10px",
              maxWidth: "50%",
              minWidth: "250px",
              m: 1,
            }}
            onClick={openSubscriberList}
          >
            {/* <Link to="/StaffList"> */}
            <Box
              sx={{
                height: "10vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color:"#4F62B0",
              }}
              onClick={openSubscriberList}
            >
              <Typography mt={3}>Member Management</Typography>
            </Box>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                src={organizationchart1}
                alt="SVG"
                width="80vh"
                height="80vh"
              />
            </Box>
            {/* </Link> */}
          </Box>
        </Box>

        {/* lowergrid */}
        <Box
          className="lowerGrid"
          sx={{
            width: "100%",
            height: "40vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",

            
          }}
        >
          <Box
            sx={{
              height: "37vh",
              width: "30%",
              backgroundColor: "#E1E5F8",
              margin: "0px 10px 0px 10px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "250px",
              m: 1,
            }}
          >
            <Link
              to="/BenefitMangement"
              style={{ textDecoration: "none", color:"#4F62B0" }}
            >
              <Box
                sx={{
                  height: "10vh",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography mt={3}>Plan / Benefit Management</Typography>
              </Box>

              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <img src={benefits1} alt="SVG" width="80vh" height="80vh" />
              </Box>
            </Link>
          </Box>

          <Box
            sx={{
              height: "37vh",
              width: "30%",
              backgroundColor: "#E1E5F8",
              margin: "0px 10px 0px 10px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "250px",
              m: 1,
            }}
          >
            <Link
              to="/Librarymanagement"
              style={{ textDecoration: "none", color:"#4F62B0" }}
            >
              <Box
                sx={{
                  height: "10vh",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography mt={3}>
Library Management</Typography>
              </Box>

              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <img src={writer1} alt="SVG" width="80vh" height="80vh" />
              </Box>
            </Link>
          </Box>

          <Box
            sx={{
              height: "37vh",
              width: "30%",
              backgroundColor: "#E1E5F8",
              margin: "0px 10px 0px 10px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "250px",
              m: 1,
            }}
          >
            <Link
              to="/Issuemanagement1"
              style={{ textDecoration: "none", color:"#4F62B0" }}
            >
              <Box
                sx={{
                  height: "10vh",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography mt={3}>Publication Management</Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <img src={uidesign1} alt="SVG" width="80vh" height="80vh" />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* // end of dashboard */}

      {/* // start of footer */}
      {/* <Footer /> */}
      {/* // end of footer */}

      {open && <SubscriberListPopUp open={open} setOpen={setOpen} />}
    </Box>
  );
}
