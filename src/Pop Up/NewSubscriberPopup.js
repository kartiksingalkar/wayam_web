import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import "../CSS/PrimaryInformation.css";
import img2 from "../Images/organizationchart2.png";
import { Box } from "@mui/system";

export default function NewSubscriberPopup(props) {
  // Handle Change Event
  const [formData, setFormData] = useState({});
  const handleChange = (key, value) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    // console.log(value);
    console.log(key);
  };
  // Pop up
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      {/* Button */}
      <Button variant="outlined" onClick={handleClickOpen}>
        + नवीन सदस्य
      </Button>
      {/* Popup Screen */}
      <Dialog maxWidth="xl" open={props.open} onClose={handleClose}>
        {/* Popup Title */}
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "1000px" }}>
          <h3>+ नवीन सदस्य </h3>
        </DialogTitle>
        {/* Popup Contain */}
        <DialogContent
          sx={{ backgroundColor: "#E1E5F8", width: "1000px", display: "flex" }}
        >
          {/* Left Input Box */}
          <Box sx={{ flexDirection: "row" }}>
            <TextField
              id="outlined-basic"
              label="ई - मेल आयडी *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("Email", e.target.value);
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
              onChange={(e) => {
                handleChange("Pincode", e.target.value);
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
              onChange={(e) => {
                handleChange("Address1", e.target.value);
              }}
              size="small"
              variant="outlined"
            ></TextField>
            {/* Profile Upload */}
            <Box
              sx={{
                width: "380px",
                backgroundColor: "white",
                height: "18px",
                justifyContent: "center",
                border:'0.2px solid #999999',
                borderRadius: "5px",
                color: "gray",
                padding: "10px",
              }}
            >
              {/* Label */}
              <label
                sx={{ width: "80px", backgroundColor: "white" }}
                for="upload-photo"
              >
                प्रोफाइल फोटो
              </label>
              {/* File Uploader */}
              <input
                type="file"
                style={{ display: "none" }}
                name="photo"
                id="upload-photo"
              />
            </Box>
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
              onChange={(e) => {
                handleChange("MobileNo", e.target.value);
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
              onChange={(e) => {
                handleChange("City", e.target.value);
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
              onChange={(e) => {
                handleChange("Address2", e.target.value);
              }}
              size="small"
              variant="outlined"
            ></TextField>
            <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
              {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
              <Button
                sx={{
                  marginRight: "18%",
                  width: "400px",
                  backgroundColor: "#4F62B0",
                  color: "white",
                }}
                onClick={handleClose}
              >
                सेव करा
              </Button>
            </DialogActions>
          </Box>
          {/* Image Box */}
          <Box sx={{ flexDirection: "column" }}>
            <img src={img2} alt="png" />
          </Box>
        </DialogContent>
        {/* Action Button */}
      </Dialog>
    </div>
  );
}
