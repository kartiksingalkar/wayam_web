import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../CSS/PrimaryInformation.css";
import { Box, FormControl } from "@mui/material";
import moment from "moment";
import axios from "axios";

export default function NewBenfitPopup(props) {
  

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
  // DropDown
  const [age, setAge] = React.useState("");

  const [benifitCategory, setBenifitCategory] = React.useState();
  const [unit, setUnit] = React.useState();

  const handleBenifitCategoryChange = (event) => {
    handleFieldChange("benifit_category", event.target.value);
  };

  const handleUnitChange = (event) => {
    // setUnit(event.target.value);
    handleFieldChange("unit", event.target.value);
  };

  const handleStatusChange = (event) => {
    handleFieldChange("status", event.target.value);
  };

  const [value, setValue] = React.useState(null);

  const [data, setData] = React.useState({});
  const handleFieldChange = (key, value) => {
    setData((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/createbenifit`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status) {
        props.setOpen(false);
        props.setData((oldData)=>{
          return [...oldData, data]
        })
      }
    } catch (e) {
      console.log(e);
    }
    // console.log(data);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        + New benefits
      </Button>
      {/* POP UP */}
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          <h3>+ New benefits </h3>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          {/* Inputs */}
          <TextField
            id="outlined-basic"
            label="Benifit Name"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
            value={data.benifit_name}
            onChange={(e) => handleFieldChange("benifit_name", e.target.value)}
          />
          {/* DropDown */}
          <FormControl>
            <InputLabel id="demo-simple-select-helper">Type</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={data.benifit_category}
              label="Publish Here "
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%",
                
              }}
              onChange={handleBenifitCategoryChange}
            >
              <MenuItem value="content">content</MenuItem>
              <MenuItem value="duration">duration</MenuItem>
            </Select>
          </FormControl>

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
                
              }}
              onChange={handleStatusChange}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Benefit value"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
            value={data.value}
            onChange={(e) => handleFieldChange("value", e.target.value)}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-helper">Choose Unit</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={data.unit}
              label="Choose Unit"
              size="small"
              sx={{
                width: "400px",
                backgroundColor: "white",
                marginBottom: "3%",
              }}
              onChange={handleUnitChange}
            >
             
              <MenuItem value="days">Days</MenuItem>
              <MenuItem value="months">Months</MenuItem>
             
            </Select>
          </FormControl>
          {/* Date Picker */}
          <Box
            sx={{
              width: "200px",
              backgroundColor: "white",
              marginBottom: "5%",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Starting Date"
                size="small"
                value={data.benifit_creation_date}
                onChange={(newValue) => {
                  handleFieldChange(
                    "benifit_creation_date",
                    moment(newValue).format("DD/MM/YYYY")
                  );
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box
            sx={{
              width: "200px",
              backgroundColor: "white",
              marginBottom: "5%",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ending Date"
                format="MM/dd/yyyy"
                sx={{ width: "400px", backgroundColor: "white" }}
                size="xs"
                value={data.benifit_exp_date}
                onChange={(newValue) => {
                  handleFieldChange(
                    "benifit_exp_date",
                    moment(newValue).format("DD/MM/YYYY")
                  );
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        {/* Action Button */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
     
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
