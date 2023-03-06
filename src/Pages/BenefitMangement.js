<<<<<<< HEAD
import { React, useState } from "react";
=======
import { React, useEffect, useState } from "react";
>>>>>>> d17dec5 (Release 1)
import { Box, Typography } from "@mui/material";

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
import NewBenfitPopup from "../Pop Up/NewBenfitPopup";
import axios from "axios";
import NewPlanPopup from "../Pop Up/NewPlanPopup";

const plans = [
  {
    plan: "वार्षिक सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
  },
  {
<<<<<<< HEAD
    plan: "6 महिन्याचे सभासदत्त्व ",
=======
    plan: "6 महिन्याचे सभासदत्त्व सभासदत्त्व ",
>>>>>>> d17dec5 (Release 1)
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3, लाभ क्रमांक 4",
  },
  {
    plan: "3 महिन्याचे सभासदत्त्व वार्षिक सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
  },
  {
    plan: "1 महिन्याचे सभासदत्त्व वार्षिक सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3, लाभ क्रमांक 4",
  },
  {
    plan: "गेस्ट सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
  },
<<<<<<< HEAD
  {
    plan: "1 महिन्याचे सभासदत्त्व वार्षिक सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3, लाभ क्रमांक 4",
  },
  {
    plan: "गेस्ट सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
  },{
    plan: "1 महिन्याचे सभासदत्त्व वार्षिक सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3, लाभ क्रमांक 4",
  },
  {
    plan: "गेस्ट सभासदत्त्व ",
    benefit: "लाभ क्रमांक 1, लाभ क्रमांक 2, लाभ क्रमांक 3",
  },
=======
>>>>>>> d17dec5 (Release 1)
];

const benefits = [
  { benefit: "लाभ क्रमांक 1" },
  { benefit: "लाभ क्रमांक 2" },
  { benefit: "लाभ क्रमांक 3" },
  { benefit: "लाभ क्रमांक 4" },
  { benefit: "लाभ क्रमांक 5" },
<<<<<<< HEAD
  { benefit: "लाभ क्रमांक 6" },
  { benefit: "लाभ क्रमांक 7" },
  { benefit: "लाभ क्रमांक 8" },
=======
>>>>>>> d17dec5 (Release 1)
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BenefitManagement() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
=======
  const [planOpen, setPlanOpen] = useState(false);

  const openNewPlanPopup = ()=>{
    setPlanOpen(!planOpen)
  }
>>>>>>> d17dec5 (Release 1)

  const openNewBenifitPopuo = () => {
    setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [benifitData, setBenifitData] = useState([]);
  const [planData, setPlanData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/getallbenifits`
  //       );
  //       console.log(response.data.data);
  //       setBenifitData(response.data.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   getData();
  // }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallplans`
        );
        // console.log("Plans : " + JSON.stringify(response.data.data));
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
        <Box sx={{ color: "#4F62B0", marginLeft: "20px" }}>
          <Typography>योजना किंवा लाभ व्यवस्थापन</Typography>
        </Box>
        <Box
          sx={{
            width: "97%",
            height: "90vh",
            backgroundColor: "#E1E5F8",
            display: "flex",
            flexDirection: "column",
            margin: "15px auto 10px auto",
          }}
        >
          <Box
            sx={{
              margin: "0.5%",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  margin="10px 10px auto auto"
                  backgroundColor="white"
<<<<<<< HEAD
                  sx={{
                    margin: "0px auto auto 10px",
                    backgroundColor: "#ffffff",
                  }}
=======
                  sx={{ margin: "0px auto auto ", backgroundColor: "#ffffff" }}
>>>>>>> d17dec5 (Release 1)
                >
                  <Tab
                    label="योजना"
                    className="tabtext"
                    value={0}

                    // sx={{
                    //   backgroundColor: "#4F62B0",
                    //   color: "#ffffff",

                    //   "&:hover": {
                    //     backgroundColor: "#4F62B0",
                    //     color:'#ffffff',
                    //   },

                    // }}
                  />
<<<<<<< HEAD
                  <Tab label="लाभ" className="tabtext" value={1} />
=======
                  {/* <Tab label="लाभ" className="tabtext" value={1} /> */}
>>>>>>> d17dec5 (Release 1)
                </Tabs>

                {/* 1st tab */}
                {value === 0 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        {/* <SearchBox find={"योजना शोधा"} /> */}
                        <SearchBox find={"योजना शोधा"} />
                      </Grid>
                      <Grid item xs={12}>
                        <Item
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#4F62B0",
                            color: "white",
                          }}
                        >
                          <Box sx={{ width: "50%", textAlign: "left" }}>
                            <Typography>योजनेचे नाव </Typography>
                          </Box>
                          <Box sx={{ width: "50%", textAlign: "left" }}>
                            <Typography>कालावधी (महिन्यांमधे)</Typography>
                          </Box>
                        </Item>
                      </Grid>

<<<<<<< HEAD
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "flex-end",
                          margin: "16px auto  5px 16px",
                          height: "38vh",
                          overflow: "scroll ",
                          overflowX: "hidden",
                          scrollbarWidth: "thin",
                          "&::-webkit-scrollbar": {
                            width: "0.4em",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "#E1E5F8",
                          },
                          "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#888",
                          },
                          "&::-webkit-scrollbar-thumb:hover": {
                            background: "#555",
                          },
                        }}
                      >
                        <Grid container spacing={1}>
                          {plans.map((item, index) => (
                            <BenefitManagementComponent1
                              plan={item.plan}
                              benefit={item.benefit}
                            />
                          ))}
                        </Grid>
                      </Box>
=======
                      {planData.map((item, index) => (
                        <BenefitManagementComponent1
                          plan={item.plan_name}
                          // benefit={item}
                          duration={item.plan_duration}
                        />
                      ))}
>>>>>>> d17dec5 (Release 1)

                      {/* button */}
                      <Box
                        display="flex"
                        margin={2}
                        justifyContent="flex-end"
                        sx={{ width: "100%" }}
<<<<<<< HEAD
                        onClick={openNewBenifitPopuo}
=======
                        onClick={openNewPlanPopup}
>>>>>>> d17dec5 (Release 1)
                      >
                        <AddButton buttonTitle={"+ नवीन योजना"} />
                      </Box>
                    </Grid>
                  </Box>
                )}

                {/* 2nd tab */}
                {value === 1 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        <SearchBox find={"लाभ शोधा"} />
                      </Grid>
                      <Grid item xs={12}>
                        <Item
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#4F62B0",
                            color: "white",
                          }}
                        >
                          <Box sx={{ width: "25%", textAlign: "left" }}>
                            <Typography>अंकाचे नाव </Typography>
                          </Box>
                        </Item>
                      </Grid>
                      
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "flex-end",
                          margin: "16px auto  5px 16px",
                          height:"38vh",
                          overflow:"scroll ",
                          overflowX:"hidden",
                          scrollbarWidth:"thin",
                          "&::-webkit-scrollbar": {
                            width: "0.4em",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "#E1E5F8",
                          },
                          "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#888",
                          },
                          "&::-webkit-scrollbar-thumb:hover": {
                            background: "#555",
                          },

<<<<<<< HEAD

                        }}
                      >
                        <Grid container spacing={1}>

                      {benefits.map((item, index) => (
                        <BenefitManagementComponent2 benefit={item.benefit} />
=======
                      {planData.map((item, index) => (
                        <BenefitManagementComponent2
                          benefit={item.plan_name}
                        />
>>>>>>> d17dec5 (Release 1)
                      ))}
                      </Grid>
                      </Box>

                      {/* button */}
                      <Box
                        display="flex"
                        justifyContent="flex-end"
<<<<<<< HEAD
                        sx={{ width: "99.5%" }}
=======
                        sx={{ width: "100%" }}
>>>>>>> d17dec5 (Release 1)
                        onClick={openNewBenifitPopuo}
                      >
                        <AddButton buttonTitle={"+ नवीन लाभ"} />
                      </Box>
                    </Grid>
                  </Box>
                )}
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
<<<<<<< HEAD
      {open && <NewBenfitPopup open={open} setOpen={setOpen} />}
=======
      {/* {open && (
        <NewBenfitPopup
          setData={setBenifitData}
          open={open}
          setOpen={setOpen}
        />
      )} */}

      {planOpen && (
        <NewPlanPopup
        planData={planData}
        setPlanData={setPlanData}
        open={planOpen}
        setPlanOpen={setPlanOpen}
        />
      )}
>>>>>>> d17dec5 (Release 1)
    </Box>
  );
}
