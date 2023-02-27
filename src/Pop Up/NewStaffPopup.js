import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from "@mui/material/Select";
import "../CSS/PrimaryInformation.css";
import img2 from "../Images/organizationchart2.png";
import { Box } from "@mui/system";

export default function NewStaffPopup() {
  // Pop up
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Drop down
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        {/* Button */}
      <Button variant="outlined" onClick={handleClickOpen}>
      + नवीन कर्मचारी
      </Button>
      {/* Popup Screen */}
      <Dialog maxWidth="xl" open={open} onClose={handleClose}>
        {/* Popup Title */}
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "1000px" }}>
          <h3>+ नवीन कर्मचारी </h3>
        </DialogTitle>
        {/* Popup Contain */}
        <DialogContent
          sx={{ backgroundColor: "#E1E5F8", width: "1000px", display: "flex" }}
        >
            {/* Left Input Box */}
          <Box sx={{ flexDirection: "row" }}>
            <TextField
              id="outlined-basic"
              label="नाव *"
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
              label="ई - मेल आयडी *"
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
              label="पिन कोड"
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
              label="पत्ता ओळ 1"
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
              label="प्रोफाइल फोटो"
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
              label="जुना पासवर्ड"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
            ></TextField>
          </Box>
              {/* Right Input Box */}
          <Box sx={{ flexDirection: "column" }}>
            <TextField
              id="outlined-basic"
              label="मोबाईल नंबर *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
            ></TextField>
            <TextField
              id="outlined-basic"
              label="आधार क्रमांक *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
            ></TextField>
            <TextField
              id="outlined-basic"
              label="शहर *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
            ></TextField>
            <TextField
              id="outlined-basic"
              label="पत्ता ओळ 2"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
            ></TextField>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">व्यवस्थापकाचे नाव</InputLabel>
             <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="व्यवस्थापकाचे नाव"
              size="small"
              sx={{width:'400px',backgroundColor:"white",marginBottom: "3%",color:'gray',marginLeft: "2%",}}
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
              label="नवीन पासवर्ड"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
            ></TextField>
          </Box>
            {/* Image Box */}
          <Box sx={{ flexDirection: "column" }}>
            <img src={img2} alt='png' />
          </Box>
        </DialogContent>
        {/* Action Button */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
          {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
          <Button
            sx={{
              marginRight: "18%",
              width: "420px",
              backgroundColor: "#4F62B0",
              color: "white",
            }}
            onClick={handleClose}
          >
            सेव करा
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
