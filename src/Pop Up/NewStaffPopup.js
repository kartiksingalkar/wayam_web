import React, {  useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import "../CSS/PrimaryInformation.css";
import img2 from "../Images/organizationchart2.png";
import { Box } from "@mui/system";
import axios from "axios";

export default function NewStaffPopup(props) {
  // Pop up
  console.log("Hello");
  // const [open, setOpen] = React.useState(true);
  console.log(props);

  const handleClose = () => {
    props.setOpen(false);
  };
  // Drop down
  const handleAgeChange = (event) => {
    handleFieldChange("managerName", event.target.value);
  };

  const [data, setData] = useState({});

  const handleFieldChange = (key, value) => {
    setData((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(data);
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/addstaffmember`,
        data
      );

      console.log(response);
      if (response.data.status) {
        props.setData((oldData) => {
          return [...oldData, data];
        });
      }
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const onFileChange = (profile_photo_path, file) => {
    console.log(file);
  };

  return (
    <div>
      {/* Popup Screen */}
      <Dialog maxWidth="xl" open={props.open} onClose={handleClose}>
        {/* Popup Title */}
        <DialogTitle sx={{ backgroundColor: "#E1E5F8", width: "1000px" }}>
          <h3>+ New Employee </h3>
        </DialogTitle>
        {/* Popup Contain */}
        <DialogContent
          sx={{ backgroundColor: "#E1E5F8", width: "1000px", display: "flex" }}
        >
          {/* Left Input Box */}
          <Box sx={{ flexDirection: "row" }}>
            <TextField
              label="name"
              required
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Email *"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="pin code"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.pincode}
              onChange={(e) => handleFieldChange("pincode", e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Address line 1"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.address1}
              onChange={(e) => handleFieldChange("address1", e.target.value)}
            />
          

            <TextField
              id="outlined-basic"
              label="Phone number*"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.mobileNumber}
              onChange={(e) =>
                handleFieldChange("mobileNumber", e.target.value)
              }
            />

            <Button
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
             
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
              label="Aadhar Number*"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.aadharNumber}
              onChange={(e) =>
                handleFieldChange("aadharNumber", e.target.value)
              }
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
              size="small"
              variant="outlined"
              value={data.city}
              onChange={(e) => handleFieldChange("city", e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="address line 2"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.address2}
              onChange={(e) => handleFieldChange("address2", e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
              Name of manager
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={data.managerName}
                label="Name of manager"
                size="small"
                sx={{
                  width: "400px",
                  backgroundColor: "white",
                  marginBottom: "3%",
                  color: "gray",
                  marginLeft: "2%",
                }}
                onChange={handleAgeChange}
              >
                
                <MenuItem value={1}>Sameer Karandikar</MenuItem>
                <MenuItem value={2}>Shilpa Inamdar</MenuItem>
              </Select>
            </FormControl>
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
              size="small"
              variant="outlined"
              value={data.newPassword}
              onChange={(e) => handleFieldChange("password", e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label=" Password"
              sx={{
                width: "400px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              variant="outlined"
              value={data.oldPassword}
              onChange={(e) => handleFieldChange("oldPassword", e.target.value)}
            />
          </Box>
          {/* Image Box */}
          <Box sx={{ flexDirection: "column" }}>
            <img src={img2} alt="png" />
          </Box>
        </DialogContent>
        {/* Action Button */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
       
          <Button
            sx={{
              marginRight: "18%",
              width: "420px",
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
