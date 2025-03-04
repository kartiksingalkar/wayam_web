import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../CSS/PrimaryInformation.css";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";

export default function NewPlanPopup(props) {
  const [benifitData, setPlanData] = useState(props.benifitData);

  console.log(props);
  // };

  const [addedBenifits, setAddedBenifits] = useState({});
  const [plan_name, setplan_name] = useState();
  const[error , setError] = useState();
  const [errorDuration , setErrorDuration] = useState();

  const handleCheckBox = (key, value) => {
    setAddedBenifits((prevData) => {
      return {
        ...prevData,
        [key]: !value,
      };
    });

    console.log("addedBenifits : ", addedBenifits);
  };

  useEffect(() => {
    console.log("benifitData", props.benifitData);
  }, [benifitData]);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setPlanOpen(false);
  };
  // DropDown

  const [data, setData] = useState({});

  const handleStatusChange = (event) => {
    handleChange("status", event.target.value);
  };

  const handleChange = (key, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    if (props.isForUpdate) {
      console.log(props.plan);
      setData((prevData) => {
        return {
          ...prevData,
          plan_name: props.plan,
          plan_duration: props.duration,
          status: props.status,
        };
      });
    }
  }, []);

  const handleSubmit = async () => {
    var re = /^[0-9]*$/;
    if (props.isForUpdate) {
      if (data.plan_name.length === 0  ) {
        // alert("please fill the value");
        setError(true)
      }
      else if(data.plan_duration.length === 0){
        // alert("please fill the value");
        setErrorDuration(true)
      }

      else{

     

      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_API_URL}/updateplan?plan_id=${props.plan_id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Hello Response : " + JSON.stringify(response));
        if (response.data.status) {
          console.log("Updated");
          window.location.reload();
        }
      } catch (e) {
        console.log(e);
      }}
    } else {
      console.log("data : ", data);
      if (data.plan_name.length === 0 || data.plan_duration.length === 0 ) {
        alert("please fill the value");
        setError(true)
      }else if( re.test(!data.plan_duration)){
        // alert("please fill the value");
        setErrorDuration(true)
      }
       else {
        try {
          let response = await axios.post(
            `${process.env.REACT_APP_API_URL}/createplan`,
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data.status);
          if (response.data.status) {
            // // props.setPlanData((oldData)=>{
            // //   return [...props.planData, data]
            // })
            props.setPlanOpen(false);
            window.location.reload();
          }
          console.log("response : ", response);
        } catch (e) {}
      }
    }
  };

  return (
    <div>
      {/* Pop up */}
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          <h3>+ New Plan</h3>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          <DialogContentText>{/* + नवीन योजना  */}</DialogContentText>
          {/* Inputs */}
          <TextField
            id="outlined-basic"
            label="Plan Name"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            value={data.plan_name}
            variant="outlined"
            onChange={(e) => {
              handleChange("plan_name", e.target.value);
            }}
          />
          {error &&<p style={{color:'red'}} >please fill the value</p>}
          {/* <FormControl>
            <InputLabel id="demo-simple-select-label">लाभ निवडा</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="लाभ निवडा"
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%", 
                color: "gray",
              }}
            >
              <FormControl component="fieldset" sx={{ width: "90%" }}>
                <FormGroup aria-label="position" column>
                  {benifitData.map((item) => {
                    return (
                      <FormControlLabel
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        control={
                          <Checkbox
                            onChange={(e) => {
                              handleCheckBox(item.benifit_id, e.target.checked);
                            }}
                          />
                        }
                        label={item.benifit_name}
                        labelPlacement="start"
                      />
                    );
                  })}
                </FormGroup>
              </FormControl>
              
            </Select>
          </FormControl> */}
          <TextField
            id="outlined-basic"
            label="Duration (please enter in Days only)"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            value={data.plan_duration}
            size="small"
            variant="outlined"
            onChange={(e) => {
              handleChange("plan_duration", e.target.value);
            }}
          />
          <Box sx={{mt:-1}}><Typography>please enter days in numbers only</Typography></Box>
          {errorDuration && <p style={{color:'red'}} >please enter days</p>}

          <FormControl>
            <InputLabel id="demo-simple-select-helper">Status</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={data.status}
              label="Status"
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%",
                //   color: "gray",
              }}
              onChange={handleStatusChange}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>

          {/* <TextField
            id="outlined-basic"
            label="प्रारंभ तारीख"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="शेवटची तारीख"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
          /> */}
        </DialogContent>
        {/* Action Buttons */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
          {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
          <Button
            sx={{
              marginLeft: "0px",
              width: "430px",
              backgroundColor: "#4F62B0",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
