import React from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import edit from "../Images/edit.png";
import subscriber from "../Images/subscriber.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SubscriberListPopUpComponent(props) {
  const { email, mobileno, city, pincode, data, setData, index, user_id } =
    props;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/deleteuser?user_id=${user_id}&email=${email}`
      );
      if (response.data.status) {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#E1E5F8" }}>
      <Grid item xs={12} sx={{ margin: 1, backgroundColor: "#E1E5F8" }}>
        <Item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            color: "#4F62B0",
          }}
        >
          <Box
            sx={{
              width: "40%",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              minWidth: "10%",
            }}
          >
            <img
              src={edit}
              width="17.17px"
              height="17.17px"
              alt="SVG"
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                justifyContent: "center",
              }}
            />
            <img
              src={subscriber}
              width="17.17px"
              height="17.17px"
              alt="SVG"
              onClick={handleDelete}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                justifyContent: "center",
              }}
            />
            <Box
              width="17.17px"
              height="17.17px"
              alt="SVG"
              sx={{
                paddingLeft: "10px",
                paddingRight: "10px",
                justifyContent: "center",
              }}
            >
              <AccountCircleIcon />
            </Box>
            <Typography>{email}</Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography>{mobileno}</Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography>{city}</Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography>{pincode}</Typography>
          </Box>
        </Item>
      </Grid>
    </Box>
  );
}
