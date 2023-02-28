import { React,  useState } from "react";
import { Box, Typography } from "@mui/material";
// import Navbar from "../Components/Navbar";
import Header from "../Components/HeaderBar";
import Footer1 from "../Components/Footer";
// import Footer1 from "../Components/Footer1";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Scroll from "@mui/material/Grid";
// import { textAlign } from "@mui/system";
// import edit from "../assets/dashboard/edit.png";
// import frame from "../assets/dashboard/frame.png";
// import search from "../assets/dashboard/search.png";
// import Dashboard from "./Dashboard";
// import "../styles/Issuemanagement1.css";
import IssueManagementComponent from "../Components/IssueManagementComponent";
import IssueManagementComponent1 from "../Components/IssueManagementComponent1";
import SearchBox from "../Components/SearchBox";

import AddButton from "../Components/AddButton";

const data = [
  { templateTitle: "टेम्प्लेट 1", type: "चौकस चौरस , गप्पाटप्पा" },
  { templateTitle: "टेम्प्लेट 2", type: "कल्पक, शब्दरंजन " },
  { templateTitle: "टेम्प्लेट 3", type: "शब्दरंजन, चौकस चौरस,गप्पाटप्पा " },
  { templateTitle: "टेम्प्लेट 4", type: "गोष्टी ,शब्दरंजन" },
  { templateTitle: "टेम्प्लेट 5", type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा " },
];

const arrayofObjects = [
  {
    number: "मे 2023",
    date: "24/02/2023 ",
    type: "चौकस चौरस , गप्पाटप्पा ",
    status: " ",
  },
  {
    number: "एप्रिल 2023",
    date: "27/04/2023",
    type: "कल्पक, शब्दरंजन ",
    status: "मान्यता प्रतीक्षा करत आहे  ",
  },
  {
    number: "मार्च 2023",
    date: "25/03/2023 ",
    type: "शब्दरंजन, चौकस चौरस,गप्पाटप्पा  ",
    status: "मान्यता प्रतीक्षा करत आहे  ",
  },
  {
    number: "फेब्रुवारी 2023",
    date: "20/02/2023 ",
    type: "गोष्टी, शब्दरंजन ",
    status: "अंक मंजूर झाला",
  },
  {
    number: "जानेवारी 2023",
    date: "22/01/2023 ",
    type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
    status: "अंक मंजूर झाला ",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Issuemanagement1() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Header />
      </Box>
      {/* end of navbar */}

      {/* start of main ptype */}
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          margin: "10px auto 10px auto",
        }}
      >
        <Box sx={{ color: "#4F62B0", marginTop: "5px", marginLeft: "20px" }}>
          <Typography>प्रकाशन व्यवस्थापन</Typography>
        </Box>
        <Box
          sx={{
            width: "97%",
            height: "80vh",
            backgroundColor: "#E1E5F8",
            display: "flex",
            flexDirection: "column",
            margin: "15px auto 10px auto",
          }}
        >
          <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label="टेम्प्लेट "
                    className="tab1"
                    value={0}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#4F62B0",
                      },
                    }}
                  />
                  <Tab
                    label="अंक "
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#4F62B0",
                      },
                    }}
                  />
                  {/* <Tab></Tab> */}
                </Tabs>

                {/* 1st tab */}
                {value === 0 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        <SearchBox find={"मजकूर शोधा"} />
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
                            <Typography>टेम्प्लेटचे नाव </Typography>
                          </Box>
                          <Box sx={{ width: "50%", textAlign: "left" }}>
                            <Typography>साहित्य प्रकार </Typography>
                          </Box>
                        </Item>
                      </Grid>

                      {data.map((item, index) => (
                        <IssueManagementComponent
                          templateTitle={item.templateTitle}
                          type={item.type}
                        />
                      ))}

                      {/* button */}
                      <Box
                        display="flex"
                        margin={2}
                        justifyContent="flex-end"
                        sx={{ width:'100%' }}
                      >
                        <AddButton buttonTitle={"+ नवीन मजकूर"} />
                      </Box>
                    </Grid>
                  </Box>
                )}

                {/* 2nd tab */}
                {value === 1 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        <SearchBox find={"अंक शोधा"} />
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
                          <Box sx={{ width: "25%", textAlign: "center" }}>
                            <Typography>तारीख</Typography>
                          </Box>
                          <Box sx={{ width: "25%", textAlign: "left" }}>
                            <Typography>साहित्य प्रकार </Typography>
                          </Box>
                          <Box sx={{ width: "25%", textAlign: "left" }}>
                            <Typography>स्टेटस</Typography>
                          </Box>
                        </Item>
                      </Grid>

                      {arrayofObjects.map((item, index) => (
                        <IssueManagementComponent1
                          number={item.number}
                          date={item.date}
                          type={item.type}
                          status={item.status}
                        />
                      ))}

                      {/* button */}
                      <Box
                        display="flex"
                        margin={2}
                        justifyContent="flex-end"
                        sx={{ width:'100%'}}
                      >
                        <AddButton buttonTitle={"+ नवीन अंक"} />
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
        <Footer1 />
      </Box>
      {/* // end of footer */}
    </Box>
  );
}
