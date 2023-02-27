import { React, useEffect, useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import management1 from "../Images/management1.png";
import organizationchart1 from "../Images/organizationchart1.png";
import benefits1 from "../Images/benefits1.png";
import writer1 from "../Images/writer1.png";
import uidesign1 from "../Images/uidesign1.png";
import "../CSS/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    // start of navbar
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Header />
      </Box>
      {/* // end of navbar */}

      {/* // start of dashboard */}
      <Box
        sx={{
          width: "100%",
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
            width: "100%",
            height: "50vh",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            // flex:1,
            // margin: "10px auto 10px auto",
            m: 1,
          }}
        >
          <Box
            sx={{
              width: "45%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E1E5F8",
              margin: "0px 10px 0px 10px",
              minWidth: "250px",
              maxWidth: "50%",
              m: 1,
            }}
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
              <Typography mt={3}>संस्थेची माहिती </Typography>
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
              <Typography mt={3}>सदस्य व्यवस्थापन</Typography>
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
          </Box>
        </Box>

        {/* lowergrid */}
        <Box
          className="lowerGrid"
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "10px auto ",
            m: 1,
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
          ><Link to="/BenefitManagement">
            <Box
              sx={{
                height: "10vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography mt={3}>योजना / लाभ व्यवस्थापन </Typography>
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
          ><Link to="/Librarymanagement"> 
            <Box
              sx={{
                height: "10vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography mt={3}>लायब्ररी व्यवस्थापन</Typography>
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
          ><Link to="/ContentManagement">
            <Box
              sx={{
                height: "10vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography mt={3}>प्रकाशन व्यवस्थापन</Typography>
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
    </Box>
  );
}
