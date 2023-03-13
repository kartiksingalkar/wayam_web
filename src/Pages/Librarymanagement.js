import { React, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Navbar from "../components/Navbar";
import Header from "../Components/HeaderBar";
import Footer from "../Components/Footer";
// import Footer1 from "../components/Footer1";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { textAlign } from "@mui/system";
// import edit from "../assets/dashboard/edit.png";
// import frame from "../assets/dashboard/frame.png";
// import search from "../Images/search.png";
import LibraryManagementComponent from "../Components/LibraryManagementComponent";
import LibraryManagementComponent2 from "../Components/LibraryManagementComponent2";

import AddButton from "../Components/AddButton";
// import SearchBox from "../components/SearchBox";
import SearchBoxNew from "../Components/SearchBox";
import { Link, useHistory } from "react-router-dom";
import NewContentPopUp from "../Pop Up/NewContentPopUp";
import axios from "axios";
// import "../styles/font.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  { name: "गप्पाटप्पा ", type: "टेक्स्ट", authorName: "प्रवीण दवणे" },
  { name: "गोष्टी परिपूर्ण भेट", type: "ऑडिओ", authorName: "गणेश मतकरी" },
  { name: "स्वीकार", type: "टेक्स्ट", authorName: "उज्ज्वला दळवी" },
  { name: "कविता काजव्यांचा कंदील", type: "ऑडिओ", authorName: "प्रवीण दवणे" },
  { name: " कल्पक", type: "ऑडिओ", authorName: "उज्ज्वला दळवी" },
  { name: "गप्पाटप्पा ", type: "टेक्स्ट", authorName: "प्रवीण दवणे" },
  { name: "गोष्टी परिपूर्ण भेट", type: "ऑडिओ", authorName: "गणेश मतकरी" },
  { name: "स्वीकार", type: "टेक्स्ट", authorName: "उज्ज्वला दळवी" },
  { name: "कविता काजव्यांचा कंदील", type: "ऑडिओ", authorName: "प्रवीण दवणे" },
  { name: " कल्पक", type: "ऑडिओ", authorName: "उज्ज्वला दळवी" },
];

const types = [
  { type: "कथा " },
  { type: "कविता" },
  { type: "साहित्य" },
  { type: "कथा " },
  { type: "कविता" },
  { type: "साहित्य" },
];

export default function Librarymanagement() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openncpop, setopenncpop] = useState(false);
  const opennewcontentpop = () => {
    setopenncpop(!openncpop);
  };

  const [data, setData] = useState([]);

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
          setData(response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  const [data2, setData2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallcontent`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          setData2(response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  const goToContentManagement = () => {
    history.push({ pathname: "/ContentManagement", state: { category: data } });
  };

  return (
    <Box sx={{ height: "100vh" }}>
      {/* start of navbar */}
      <Header />
      {/* end of navbar */}

      {/* start of main page */}
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
          <Typography>लायब्ररी व्यवस्थापन</Typography>
        </Box>
        <Box
          sx={{
            width: "97%",
            height: "90vh",
            backgroundColor: "#E1E5F8",
            display: "flex",
            flexDirection: "column",
            margin: "10px auto 10px auto",
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
                  <Tab
                    label="मजकूर "
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
                  <Tab
                    label="मजकूर प्रकार "
                    className="tabtext"
                    value={1}
                    // sx={{
                    //   backgroundColor: "#4F62B0",
                    //   color: "ffffff",
                    //   "&:hover": {
                    //     backgroundColor: "#4F62B0",
                    //     color:'#ffffff',
                    //   },

                    // }}
                  />
                  {/* <Tab></Tab> */}
                </Tabs>

                {/* 1st tab */}
                {value === 0 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        {/* <SearchBox find={"योजना शोधा"} /> */}
                        <SearchBoxNew find={"मजकूर शोधा"} />
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
                          <Box sx={{ width: "30%", textAlign: "left" }}>
                            <Typography>नाव</Typography>
                          </Box>
                          <Box sx={{ width: "30%", textAlign: "center" }}>
                            <Typography>मजकूर प्रकार </Typography>
                          </Box>
                          <Box sx={{ width: "30%", textAlign: "center" }}>
                            <Typography>लेखकाचे नाव </Typography>
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
                          {data2.map((item, index) => (
                            <LibraryManagementComponent
                              name={item.content_name}
                              type={item.name}
                              authorName={item.writer}
                              content_id={item.content_id}
                              setData2={setData2}
                              index={index}
                              data={data}
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
                        onClick={goToContentManagement}
                      >
                        {/* <Link
                          to="/ContentManagement"
                          style={{ textDecoration: "none" }}
                        > */}
                        <AddButton buttonTitle={"+ नवीन योजना"} />
                        {/* </Link> */}
                      </Box>
                    </Grid>
                  </Box>
                )}

                {/* 2nd tab */}
                {value === 1 && (
                  <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={8}>
                        <SearchBoxNew find={"मजकूर प्रकार शोधा"} />
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
                          <Box sx={{ width: "100%", textAlign: "left" }}>
                            <Typography>मजकूर प्रकारचे नाव </Typography>
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
                        <Grid container spacing={0}>
                          {data.map((item, index) => (
                            <LibraryManagementComponent2
                              type={item.name}
                              id={item.id}
                              setData={setData}
                              index={index}
                            />
                          ))}
                        </Grid>
                      </Box>

                      {/* button */}
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        sx={{ width: "99.5%" }}
                        onClick={opennewcontentpop}
                      >
                        <AddButton buttonTitle={"+ नवीन प्रकार "} />
                      </Box>
                    </Grid>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* end of main page  */}

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
      {openncpop && (
        <NewContentPopUp
          data={data}
          setData={setData}
          open={openncpop}
          setOpen={setopenncpop}
        />
      )}

      {/* // end of footer */}
    </Box>
  );
}
