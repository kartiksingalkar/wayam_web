import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import "../CSS/PrimaryInformation.css";
import img2 from "../Images/organizationchart2.png";
import { Box } from "@mui/system";
import axios from "axios";

export default function NewSubscriberPopup(props) {
  // Handle Change Event
  const [data, setData] = useState({});
  const handleChange = (key, value) => {
    setData((oldData) => {
      return {
        ...oldData,
        [key]: value,
      };
    });

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

  const onFileChange = (profile_photo_path, file) => {
    console.log(file);
  };

  const handleSubmit = async () => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signupuser`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status) {
        props.setData((oldData) => {
          return [...oldData, data];
        });
        props.setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Button */}
      <Button variant="outlined" onClick={handleClickOpen}>
        + New members
      </Button>
      {/* Popup Screen */}
      <Dialog maxWidth="xl" open={props.open} onClose={handleClose}>
        {/* Popup Title */}
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "1000px" }}>
          <h3>+ New members </h3>
        </DialogTitle>
        {/* Popup Contain */}
        <DialogContent
          sx={{ backgroundColor: "#E1E5F8", width: "1000px", display: "flex" }}
        >
          {/* Left Input Box */}
          <Box sx={{ flexDirection: "row" }}>
            <TextField
              label="Email Id *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.email}
            />

            <TextField
              id="outlined-basic"
              label="pincode"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("pincode", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.pincode}
            />
            <TextField
              id="outlined-basic"
              label="address line 1"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("address1", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.address1}
            />
            {/* Profile Upload */}
            <Button
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                // backgroundColor: "white",
              }}
              variant="contained"
              component="label"
            >
              Profile Photo
              <input
                type="file"
                hidden
                onChange={(e) => {
                  onFileChange("profile_photo_path", e.target.files[0]);
                }}
              />
            </Button>
          </Box>
          {/* Right Input Box */}
          <Box sx={{ flexDirection: "column" }}>
            <TextField
              id="outlined-basic"
              label="Phone Number *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("mbl_no", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.mbl_no}
            />
            <TextField
              id="outlined-basic"
              label="city *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("city", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.city}
            />
            <TextField
              id="outlined-basic"
              label="Address line 2"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("address2", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.address2}
            />

            <TextField
              id="outlined-basic"
              label="State"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("state", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.state}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
              size="small"
              variant="outlined"
              value={data.password}
            />
            <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
              {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
              <Button
                sx={{
                  marginRight: "18%",
                  width: "400px",
                  backgroundColor: "#4F62B0",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                Save
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
