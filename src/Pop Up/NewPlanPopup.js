import React from "react";
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

export default function NewPlanPopup(props) {
  // Pop Up
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // DropDown
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      {/* Pop up */}
      <Dialog open={open} onClose={handleClose}>
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
          ></TextField>
          <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="लाभ निवडा"
              size="small"
              sx={{width:'400px',backgroundColor:"white",marginBottom: "3%",color:'gray'}}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
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
          ></TextField>
          <TextField
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
          ></TextField>
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
          ></TextField>
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
            onClick={handleClose}
          >
            पक्के करा{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
