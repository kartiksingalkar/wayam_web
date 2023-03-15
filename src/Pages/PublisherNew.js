import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderBar from "../Components/HeaderBar";
import coverMagzine from "../Images/coverMagzine.png";
import { Link } from "react-router-dom";
// import AspectRatio from "@mui/joy/AspectRatio";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function PublisherNew(props) {
  const location = useLocation();

  console.log("location", location.state);

  const { issue_id, templateName, templateData } = location.state;

  const [categoryCount, setCategoryCount] = useState([]);
  const [issueCount, setIssueCount] = useState([]);
  const [name, setName] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCategoryCount(Object.keys(templateData));
    setIssueCount(Object.values(templateData));
    setName(Object.values(templateName));
  }, [location]);

  const [issueContent, setIssueContent] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/getissuecontent?issue_id=${issue_id}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.data.status) {
            setIssueContent(response.data.data);
            console.log("categories", response.data.data);
          }
        } catch (e) {}
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Box>
      <HeaderBar />
      <Box sx={{ display: "flex", flexDirection: "coloumn", flexWrap: "wrap" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              minWidth: 500,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                mt: 7,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ marginLeft: 5, objectFit: "cover" }}>
                <img src={coverMagzine} alt="" width={400} />
              </Box>

              {/* anukramanika */}

              <Box
                sx={{
                  marginLeft: 5,
                  border: 1,
                  width: 300,
                  bgcolor: "#E1E5F8",
                }}
              >
                {/* <img src={coverMagzine} alt="" /> */}

                <Box sx={{ m: 3 }}>
                  <h3>Index</h3>
                  <ol>
                  

                    {categoryCount.map((item1, index) => {
                      return (
                        <>
                          <li style={{ fontStyle: "inherit" }}>
                            {name[index]} (Maximum capacity :{templateData[item1]})
                          </li>
                          {issueContent.map((item, index) => {
                            return (
                              <p>
                                {parseInt(item.content_category) ===
                                parseInt(item1) ? (
                                  item.content_name
                                ) : (
                                  <></>
                                )}
                              </p>
                            );
                          })}
                        </>
                      );
                    })}

                    {/* <li style={{ fontStyle: "inherit" }}>गप्पाटप्पा</li>
                    <p>गोष्टी परिपूर्ण भेट</p>
                    <p>स्वीकार </p>
                    <li style={{ fontStyle: "inherit" }}>चौकस चौरस</li>
                    <p>गोष्टी परिपूर्ण भेट</p>
                    <p>स्वीकार </p>

                    <li>शब्दरंजन</li>
                    <p></p> */}

                    {/* <Link style={{ textDecoration: "none", color: "red" }}>
                      अपलोड केले नाही
                    </Link> */}
                    <p></p>
                    <Link
                      to={"/Librarymanagement"}
                      style={{ textDecoration: "none" }}
                    >
                      Click here for upload
                    </Link>
                  </ol>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* //// */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  mt: 7,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ marginLeft: 5, objectFit: "cover" }}>
                  <img src={coverMagzine} alt="" width={400} />
                </Box>
                <Box sx={{ marginLeft: 5 }}>
                  <img src={coverMagzine} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* // */}
        <Box sx={{ width: "35%", m: 2 }}>
          <Box sx={{ width: "90%" }}>
            <TextField
              id="outlined-multiline-static"
              label="Write Comment Here"
              sx={{ width: "100%", marginTop: "13%" }}
              multiline
              rows={6}
            />
            {/* Buton */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: "50%",
                  borderColor: "#4F62B0",
                  color: "#4F62B0",
                  margin: "2%",
                }}
              >
              Review
              </Button>
              <Button
                variant="contained"
                sx={{ width: "70%", backgroundColor: "#4F62B0" }}
              >
                Publish
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
