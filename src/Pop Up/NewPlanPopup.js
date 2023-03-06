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
} from "@mui/material";
import axios from "axios";

export default function NewPlanPopup(props) {
  const [benifitData, setPlanData] = useState(props.benifitData);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const [addedBenifits, setAddedBenifits] = useState({});

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
    props.setOpen(false);
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

  const handleSubmit = async () => {
    console.log("data : ", data);
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
      console.log(response.data.status)
      if (response.data.status) {
        props.setPlanData((oldData)=>{
          return [...props.planData, data]
        })
        props.setPlanOpen(false);
      }
      console.log("response : ", response);
    } catch (e) {}
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      {/* Pop up */}
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          <h3>+ नवीन योजना </h3>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          <DialogContentText>{/* + नवीन योजना  */}</DialogContentText>
          {/* Inputs */}
          <TextField
            id="outlined-basic"
            label="योजनेचे नाव"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
            onChange={(e) => {
              handleChange("plan_name", e.target.value);
            }}
          />
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
            label="कालावधी "
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
            onChange={(e) => {
              handleChange("plan_duration", e.target.value);
            }}
          />

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
            पक्के करा{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
