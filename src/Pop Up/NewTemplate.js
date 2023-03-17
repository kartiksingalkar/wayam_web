import { Button, TextField, Typography } from "@mui/material";

import { Box } from "@mui/material";
// import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import axios from "axios";

function NewTemplate(props) {
  console.log(props);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const [data, setData] = useState({});
  const [count, setCount] = useState([]);

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
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  const nameChange = (key, value) => {
    handleChange(key, value);
  };

  const [countData, setCountData] = useState({});

  const [type, setType] = useState({});

  const [tempCount, setTempCount] = useState([]);

  useEffect(() => {
    if (props.isForUpdate) {
      async function getCount() {
        try {
          let response = await axios.get(
            `${process.env.REACT_APP_API_URL}/gettemplateforupdate?template_id=${props.template_id}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setCount(response.data.data[0].template_data);
          console.log(count);
          setTempCount(Object.values(response.data.data[0].template_data));
          // console.log("Hello : " + JSON.stringify(response.data.data[0].template_data))
        } catch (e) {
          console.log(e);
        }
      }
      getCount();
    }
  }, []);

  const handleCountChange = (key, value, name) => {
    let typeobj = {};

    setType((old) => {
      typeobj = { ...old, [key]: name };
      return typeobj;
    });

    let countobj = { ...countData, [key]: value };

    // setCountData((oldData) => {
    //   countobj = { ...oldData, [key]: value };
    //   return countobj;
    // });

    // setCountData((oldData) => {
    //   return { ...oldData, [key]: value };
    // });
    console.log(countData);

    // setTimeout(() => {
    handleChange("template_data", countobj);
    handleChange("types", typeobj);

    setCountData((oldData)=>{
      return {...oldData, [key]: value}
    })
    
    // }, 200);
  };

  const handleChange = (key, value) => {
    setData((oldData) => {
      return { ...oldData, [key]: value };
    });
  };

  const handleSubmit = async () => {
    if (props.isForUpdate) {
      console.log(data);
      try {
        let response = await axios.patch(
          `${process.env.REACT_APP_API_URL}/updatetemplate?template_id=${props.template_id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.status) {
          console.log(response.data);
          props.setOpen(false);
          window.location.reload();
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(data);
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/addtemplate`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.status) {
          console.log(response.data);
          props.setOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // const [value, setValue] = React.useState(null);
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        + New Benifit
      </Button>
      {/* POP UP */}
      <Dialog fullWidth maxWidth="md" open={props.open} onClose={handleClose}>
        <DialogContent
          //   maxWidth="xl"
          sx={{
            backgroundColor: "#E1E5F8",
            width: "94%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Inputs */}
          <Box sx={{ flexDirection: "row" }}>
            <TextField
              id="outlined-basic"
              placeholder="Template Name * "
              // value={templates[0].template_name}
              sx={{
                width: "380px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              onChange={(e) => handleChange("template_name", e.target.value)}
              variant="outlined"
            />

            {categories.map((item, index) => {
              return (
                <div>
                  <Box sx={{ width: "100%", display: "flex" }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Box
                        sx={{
                          width: "150px",
                          height: "30px",
                          display: "flex",
                          backgroundColor: "white",
                          border: 1,
                          borderColor: "grey",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ width: "130px" }}>
                          {item.name} ; -
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <TextField
                        id="outlined-basic"
                        placeholder="Write Number "
                        value={tempCount[index]}
                        sx={{
                          width: "380px",
                          borderRadius: "5px",
                          marginLeft: "5%",
                          marginBottom: "3%",
                          backgroundColor: "white",
                        }}
                        size="small"
                        onChange={(e) =>
                          handleCountChange(item.id, e.target.value, item.name)
                        }
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </div>
              );
            })}
          </Box>
        </DialogContent>
        {/* Action Button */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
          {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
          <Button
            sx={{
              marginLeft: "0px",
              margin: "0%",
              width: "390px",
              backgroundColor: "#4F62B0",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default NewTemplate;
