import { React } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { textAlign } from "@mui/system";
import LibraryManagementComponent from "../Components/LibraryManagementComponent";

import AddButton from "../Components/AddButton";
import SearchBox from "../Components/SearchBox";

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
];

export default function Librarymanagement() {
  return (
    <Box sx={{ height: "100vh" }}>
      {/* start of navbar */}
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Navbar /> */}
        <Header />
      </Box>
      {/* end of navbar */}

      {/* start of main page */}
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
        <Box sx={{ color: "#4F62B0", marginTop: "20px", marginLeft: "20px" }}>
          <Typography>लायब्ररी व्यवस्थापन</Typography>
        </Box>
        <Box
          sx={{
            width: "97%",
            height: "80vh",
            backgroundColor: "#E1E5F8",
            display: "flex",
            flexDirection: "column",
            margin: "40px auto 10px auto",
          }}
        >
          <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
            <Grid container spacing={2} justify="center">
              
              {/* search box */}
              <Grid item xs={6}>
                <SearchBox find={"मजकूर शोधा"}/>
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
              {data.map((item, index) => (
                <LibraryManagementComponent
                  name={item.name}
                  type={item.type}
                  authorName={item.authorName}
                />
              ))}

              {/* button */}
              <Box
                
                display="flex"
                margin={2}
                justifyContent="flex-end"
                sx={{marginLeft: "86%"}}
              >
                <AddButton buttonTitle={"+ नवीन मजकूर "} />
              </Box>
            </Grid>
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
      {/* // end of footer */}
    </Box>
  );
}
