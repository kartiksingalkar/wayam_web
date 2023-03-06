import { React, useEffect, useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import logo from "../Images/wayamLogo.png";
import loginImage from "../Images/loginImage.png";
import styles from "../Components/global";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

// import Footer from "../components/Footer";
// import { fontFamily } from "@mui/system";

export default function Login() {
  const history = useHistory();
  //state to store the data
  const [data, setData] = useState({});
  //   const [errors, setErrors] = useState(false);

  //function to handle change in input fields
  const handleChange = (key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signin`,
        data
      );
      if(response.data.status){
        history.push('/Home')
        let token = `${response.data.token}`;
        let user_id = `${response.data.id}`;
        let mbl_no = `${response.data.mbl_no}`;
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("mbl_no", mbl_no);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //   function to handle submit/login events
  //   const handleSubmit = async () => {
  // try {
  //   //post request to the backend using axios
  //   const response = await axios(
  //     `${process.env.REACT_APP_API_URL}/api/signin`,
  //     {
  //       method: "post",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       data,
  //     }
  //   );
  //   // console.log(response.data);

  //   //if the response is true, navigate to dashboard and store the token in local storage
  //   if (response.data.status) {
  //     navigate("/dashboard");
  //     let token = `${response.data.token}`;
  //     localStorage.setItem("token", token);
  //   }
  // } catch (err) {
  //   setErrors(true);
  //   console.log(err);
  // }
  //   };

  // if error then rerenender the component
  //   useEffect(() => {}, [errors]);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    // Main Wrapper
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "92vh",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Poppins",
      }}
    >
      {/* Start Form Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flex: "1",
        }}
      >
        <Box
          sx={{ height: "50vh", width: "100%", margin: "80px auto 0px auto" }}
        >
          {/* Start Header Container */}
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/">
              <img src={logo} alt="SVG" width="400px" height="165.44px" />
            </Link>
          </Container>
          {/* End Header Container */}

          {/* Show if user enters invalid creadentials */}
          {/* {errors && (
            <Typography
              variant="overline"
              component="h1"
              align="center"
              sx={[
                styles.subscript,
                { marginTop: "24px", fontSize: "13px", color: "red" },
              ]}
            >
              Invalid Credentials!!
            </Typography>
          )} */}

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
              value={data.mbl_no}
              onChange={(e) => {
                handleChange("mbl_no", e.target.value);
              }}
              required
              size="small"
              label="वापरकर्ता नाव
              "
              variant="outlined"
              sx={styles.textField}
            />
            <TextField
              value={data.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
              required
              size="small"
              label="पासवर्ड "
              variant="outlined"
              sx={styles.textField}
            />
            <Link to="/ChangePassword" style={{ textDecoration: "none" }}>
              <Typography
                variant="overline"
                component="h2"
                align="right"
                sx={styles.subscript}
              >
                पासवर्ड विसरलात?
              </Typography>
            </Link>

            <Button
              //   onClick={handleSubmit}
              variant="contained"
              disableElevation
              onClick={handleSubmit}
              sx={[styles.btn, styles.basicButton]}
            >
              {/* <Link to="/Home" style={{ textDecoration: "none", width: '100%', color: 'white' }}> */}
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                येथे लॉगिन करा
              </Typography>
              {/* </Link> */}
            </Button>
          </Container>
          {/* End of Form */}
        </Box>
      </Box>
      {/* End of Form Container */}

      {/* Start of Image Container */}
      {matches && (
        <Box
          sx={{
            backgroundColor: "primary.dark",
            backgroundColor: "#E1E5F8;",
            height: "92vh",
            flex: "1",
            width: "100px",
          }}
        >
          <Box
            sx={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={loginImage}
              alt="SVG"
              width="50%"
              height="50%"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Box>
        </Box>
      )}

      {/* End of Image Container */}
      {/* <Box sx={{
        left: 0,
        bottom: 0,
        width: '100%',
        height:"8vh",
      }}>
       <Footer/>
       </Box>  */}
    </Box>
  );
}
