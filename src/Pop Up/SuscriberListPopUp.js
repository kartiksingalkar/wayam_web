import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SearchBoxNew from "../Components/SearchBox";
import Grid from "@mui/material/Grid";
import SubscriberListPopUpComponent from "../Components/SubscriberListPopUpComponent";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AddButton from "../Components/AddButton";
import NewSubscriberPopup from "./NewSubscriberPopup";
import axios from "axios";

const emails = [];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [opennsp, setopennsp] = useState(false);
  const openNewSubscriber = () => {
    setopennsp(!opennsp);
  };

  const [data, setData] = useState([]);

  // Downlod csv
  const onClickDownload = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/download`,
        {
          responseType: 'blob',
        }
      );
  
      if (response.status === 200) {
        // Create a link element, set the download attribute, and trigger a click to download the file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'users.csv'); // Replace 'users.csv' with the desired file name
        document.body.appendChild(link);
        link.click();
  
        // Clean up the URL object
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
  
        alert('File Downloaded');
      } else {
        throw new Error('Failed to download file');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallusers`
        );
        setData(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <Box>
        <Dialog
          fullWidth
          maxWidth="lg"
          sx={{ backgroundColor: "#E1E5F8" }}
          onClose={handleClose}
          open={open}
        >
          <Box margin={2}>
            <SearchBoxNew find={"Find Members"} />
          </Box>
          <Box
              display="flex"
              margin={2}
              justifyContent="flex-start"
              sx={{ width: "28%" }}
              onClick={onClickDownload}
            >
              <AddButton buttonTitle={"Download All Users"} />
            </Box>
          <Box sx={{ flexGrow: 1, backgroundColor: "#E1E5F8" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item
                  sx={{
                    backgroundColor: "#4F62B0",
                    margin: 1,
                    display: "flex",
                    color: "white",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ width: "40%", textAlign: "center" }}>
                    <Typography>E-mail Id</Typography>
                  </Box>
                  <Box sx={{ width: "20%", textAlign: "left" }}>
                    <Typography>Phone Number</Typography>
                  </Box>
                  <Box sx={{ width: "20%", textAlign: "left" }}>
                    <Typography>City </Typography>
                  </Box>
                  <Box sx={{ width: "20%", textAlign: "left" }}>
                    <Typography>Pin Code</Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              backgroundColor: "#E1E5F8",
              height: "60vh",
              overflow: "auto",
            }}
          >
            {data.map((item, index) => (
              <SubscriberListPopUpComponent
                email={item.email}
                user_id={item.user_id}
                mobileno={item.mbl_no}
                city={item.city}
                pincode={item.pincode}
                setData={setData}
                data={data}
                index={index}
              />
            ))}
          </Box>

          <List sx={{ pt: 0, backgroundColor: "#E1E5F8" }}>
            <Box
              display="flex"
              margin={2}
              justifyContent="flex-end"
              sx={{ width: "90%" }}
              onClick={openNewSubscriber}
            >
              <AddButton buttonTitle={"+ New Member "} />
            </Box>
          </List>
        </Dialog>
        {opennsp && (
          <NewSubscriberPopup
            setData={setData}
            open={opennsp}
            setOpen={setopennsp}
          />
        )}
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SubscriberListPopUp(props) {
  // const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = (value) => {
    props.setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={props.open}
        onClose={handleClose}
      />
    </div>
  );
}
