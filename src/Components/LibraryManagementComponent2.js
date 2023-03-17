import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import edit from "../Images/edit.png";
import frame from "../Images/frame.png";
import NewContentPopUp from "../Pop Up/NewContentPopUp";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LibraryManagementComponent2(props) {
  const { type, id, setData, index } = props;
  console.log(props)

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/deletecategory?id=${id}`
      );
      if (response.data.status) {
        setData((prev) => {
          const newData = [...prev];
          newData.splice(index, 1);
          return newData;
        });
        alert("do you want to delete ?");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [openncpop, setopenncpop] = useState(false);
  const [isForUpdate, setIsForUpdate] = useState(false);

  const handleEdit = async () => {
    setIsForUpdate(true);
    setopenncpop(!openncpop);
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
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={edit}
            width="17.17px"
            height="17.17px"
            alt="SVG"
            onClick={handleEdit}
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
          <Typography>{type}</Typography>
        </Box>
      </Item>
      {openncpop && (
        <NewContentPopUp
          isForUpdate={isForUpdate}
          type={type}
          id={id}
          open={openncpop}
          setOpen={setopenncpop}
        />
      )}
    </Grid>
  );
}
