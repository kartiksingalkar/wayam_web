import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from '@mui/material/InputLabel';
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../CSS/PrimaryInformation.css";
import { Box, FormControl } from "@mui/material";

export default function NewBenfitPopup(props) {
  // POP up Open close
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
  // DropDown
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(null);

  return (
    <div>
      
      <Button variant="outlined" onClick={handleClickOpen}>
        + नवीन लाभ
      </Button>
      {/* POP UP */}
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          <h3>+ नवीन लाभ </h3>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#E1E5F8", width: "400px" }}>
          {/* Inputs */}
          <TextField
            id="outlined-basic"
            label="लाभाचे नाव"
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
          ></TextField>
          {/* DropDown */}
          <FormControl>
          <InputLabel id="demo-simple-select-helper">येथे प्रकाशित करा</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="येथे प्रकाशित करा "
            size="small"
            sx={{
              width: "400px",
              backgroundColor: "white", 
              marginBottom: "3%",
            //   color: "gray",
            }}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="लाभ मूल्य "
            sx={{
              width: "400px",
              borderRadius: "5px",
              marginBottom: "3%",
              backgroundColor: "white",
            }}
            size="small"
            variant="outlined"
          ></TextField>
          <FormControl>
          <InputLabel id="demo-simple-select-helper">युनिट निवडा</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="युनिट निवडा"
            size="small"
            sx={{
              width: "400px",
              backgroundColor: "white",
              marginBottom: "3%",
            }}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>दिवस</MenuItem>
            <MenuItem value={20}>महिने</MenuItem>
            <MenuItem value={30}>काउन्ट</MenuItem>
          </Select>
          </FormControl>
          {/* Date Picker */}
          <Box  sx={{ width: "200px", backgroundColor: "white" ,marginBottom:'5%'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="प्रारंभ तारीख"
              size="small"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </Box>
          <Box  sx={{ width: "200px", backgroundColor: "white" ,marginBottom:'5%'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="शेवटची तारीख"
              sx={{ width: "400px", backgroundColor: "white" }}
              size="xs"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </Box>
        </DialogContent>
        {/* Action Button */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
          {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
          <Button
            sx={{
              marginLeft: "0px",
              width: "430px",
              backgroundColor: "#4F62B0",
              color: "white",
            }}
            onClick={handleClose}
          >
            पक्के करा{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
