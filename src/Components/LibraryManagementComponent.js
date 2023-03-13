import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import edit from "../Images/edit.png";
import frame from "../Images/frame.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LibraryManagementComponent(props) {
  const history = useHistory();
  const { name, type, authorName, content_id, setData2, index } = props;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/deletecontent?content_id=${content_id}`
      );
      if (response.data.status) {
        setData2((prev) => {
          const newData = [...prev];
          newData.splice(index, 1);
          return newData;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    history.push({
      pathname: "/ContentManagement",
      state: {
        content_id: props.content_id,
        update: true,
        category: props.data,
      },
    });
  };

  return (
    <Grid item xs={12}>
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
            width: "33%",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            onClick={handleEdit}
            src={edit}
            width="17.17px"
            height="17.17px"
            alt="SVG"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
          <img
            onClick={handleDelete}
            src={frame}
            width="17.17px"
            height="17.17px"
            alt="SVG"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
          <Typography>{name}</Typography>
        </Box>
        <Box sx={{ textAlign: "center", width: "33%" }}>
          <Typography>{type}</Typography>
        </Box>
        <Box sx={{ textAlign: "center", width: "33%" }}>
          <Typography>{authorName}</Typography>
        </Box>
      </Item>
    </Grid>
  );
}
