import { Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Box, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import addBtn from "../Images/add.png";
import axios from "axios";

function NewTemplate(props) {
  // POP up Open close
  console.log(props);
  // const [open, setOpen] = React.useState(false);

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

  const [name, setName] = useState("");

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
    let obj = { ...countData, [key]: value };

    setType((old) => {
      return { ...old, [key]: name };
    });

    setCountData(obj);

    // setCountData((oldData) => {
    //   return { ...oldData, [key]: value };
    // });
    handleChange("template_data", countData);
    handleChange("types", type);
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
          window.location.reload()
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
              label="Template Name * "
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
            {/* Add Button */}
            {/* <img sx={{ marginLeft: "2%" }} src={addBtn} alt="hello" /> */}
            {/* <Button onClick={() => handleAdd()}>Add</Button> */}
            {categories.map((item, index) => {
              return (
                <div>
                  <Box sx={{ width: "100%", display: "flex" }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      {/* <FormControl>
                        <InputLabel id="demo-simple-select-helper">
                          साहित्य प्रकार
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="साहित्य प्रकार  "
                          size="small"
                          sx={{
                            width: "380px",
                            backgroundColor: "white",
                            marginBottom: "3%",
                          }}
                        >
                          <MenuItem value={10}>चौकस चौरस</MenuItem>
                          <MenuItem value={20}>गप्पाटप्पा</MenuItem>
                          <MenuItem value={30}>शब्दरंजन</MenuItem>
                          <MenuItem value={40}>कल्पक</MenuItem>
                          <MenuItem value={50}>गोष्टी</MenuItem>
                          <MenuItem value={60}>इंग्लिश</MenuItem>
                        </Select>
                      </FormControl> */}
                      <Box sx={{width:'150px' , height:'30px', display:'flex',backgroundColor:'white' , border:1, borderColor:'grey' , justifyContent:'center' , alignItems:'center'}}>
                      <Typography sx={{width:'130px'}}>{item.name} ; -
                        </Typography>
                      </Box>
                      
                      {/* <Typography
                        id="outlined-basic"
                        value=
                        sx={{
                          width: "380px",
                          borderRadius: "5px",
                          marginBottom: "3%",
                          backgroundColor: "white",
                        }}
                        size="small"
                        //   onChange={e=>handleChange(e,i)}
                        variant="outlined"
                      /> */}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <TextField
                        id="outlined-basic"
                        label="Write Number "
                        // value={tempCount[index]}
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
