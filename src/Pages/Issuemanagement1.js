import { React, useEffect, useState } from "react";
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
import NewTemplate from "../Pop Up/NewTemplate";

import AddButton from "../Components/AddButton";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchTemplate from "../Components/SearchTemplate";
import SearchIssue from "../Components/SearchIssue";

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
  {
    number: "जानेवारी 2023",
    date: "22/01/2023 ",
    type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
    status: "अंक मंजूर झाला ",
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
  const [open, setopen] = useState(false);

  const NewTemplatee = () => {
    setopen(!open);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [categories, setCategories] = useState([]);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getalltemplates`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          setTemplates(response.data.data);
          console.log("templates", response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallcategories`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          setCategories(response.data.data);
          console.log("categories", response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  const [issues, setIssues] = useState([]);
  const [templateName, setTemplateName] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallissues`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          setIssues(response.data.data);
          setTemplateName(response.data.template_data);
          console.log("categories", response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
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
        <Header />
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
          margin: "5px auto 5px auto",
        }}
      >
        <Box sx={{ color: "#4F62B0", marginTop: "5px", marginLeft: "20px" }}>
          <Typography>Publication Management</Typography>
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
            <Box
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  margin="10px 10px auto auto"
                  backgroundColor="white"
                  sx={{
                    margin: "0px auto auto 10px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Tab label="Template " className="tab1" value={0} />
                  <Tab label="Issue " />
                  {/* <Tab></Tab> */}
                </Tabs>

                {/* 1st tab */}
                {value === 0 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        <SearchTemplate find={"Find Content"} data2={templateName} setData={setTemplateName} />
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
                            <Typography>Template Name </Typography>
                          </Box>
                          <Box sx={{ width: "50%", textAlign: "left" }}>
                            <Typography>Material type</Typography>
                          </Box>
                        </Item>
                      </Grid>

                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "flex-end",
                          margin: "16px auto  5px 16px",
                          height: "35vh",
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
                          {templates.map((item, index) => (
                            <IssueManagementComponent
                              template_id={item.template_id}
                              templateTitle={item.template_name}
                              type={Object.values(item.types).join(", ")}
                            />
                          ))}
                        </Grid>
                      </Box>

                      {/* button */}
                      <Box
                        display="flex"
                        // margin={2}
                        justifyContent="flex-end"
                        sx={{ width: "100%" }}
                        onClick={NewTemplatee}
                      >
                        <AddButton buttonTitle={"+ Add Content"} />
                      </Box>
                    </Grid>
                  </Box>
                )}

                {/* 2nd tab */}
                {value === 1 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        <SearchIssue find={"Find Issues"} data2={issues} setData={setIssues} />
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
                            <Typography>Issue Name </Typography>
                          </Box>
                          <Box sx={{ width: "25%", textAlign: "center" }}>
                            <Typography>Date</Typography>
                          </Box>
                          <Box sx={{ width: "25%", textAlign: "left" }}>
                            <Typography>Content Type </Typography>
                          </Box>
                          <Box sx={{ width: "25%", textAlign: "left" }}>
                            <Typography>Status</Typography>
                          </Box>
                        </Item>
                      </Grid>

                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "flex-end",
                          margin: "16px auto  5px 16px",
                          height: "35vh",
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
                          {issues.map((item, index) => (
                            <IssueManagementComponent1
                              number={item.issue_name}
                              date={item.date}
                              type={item.type}
                              status={item.status}
                              issue_id={item.issue_id}
                              templateName={templateName[0].types}
                              templateData={templateName[0].template_data}
                            />
                          ))}
                        </Grid>
                      </Box>

                      {/* button */}

                      <Box
                        display="flex"
                        // margin={2}
                        justifyContent="flex-end"
                        sx={{ width: "99.5%" }}
                      >
                        <Link
                          to="/IssueManagement"
                          style={{ textDecoration: "none" }}
                        >
                          <AddButton buttonTitle={"+ New Issue"} />
                        </Link>
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
      {open && <NewTemplate open={open} setOpen={setopen} />}
      {/* // end of footer */}
    </Box>
  );
}
