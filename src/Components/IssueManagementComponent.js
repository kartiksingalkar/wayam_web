import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import edit from "../Images/edit.png";
import frame from "../Images/frame.png";
import NewTemplate from "../Pop Up/NewTemplate";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function IssueManagementComponent(props) {
  const { templateTitle, type, template_id } = props;
  const [isForUpdate, setIsForUpdate] = useState(false);
  const [open, setopen] = useState(false);

  const handleDelete = () => {
    console.log("hello delete");
  };

  const handleEdit = () => {
    setopen(!open);
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
            width: "50%",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <Button onClick={handleEdit}>
            {" "}
            <img
              src={edit}
              width="17.17px"
              height="17.17px"
              alt="SVG"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            />
          </Button> */}
          {/* <Button onClick={handleDelete}>
            {" "}
            <img
              src={frame}
              width="17.17px"
              height="17.17px"
              alt="SVG"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            />
          </Button> */}
          <Typography>{templateTitle}</Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "50%" }}>
          <Typography>{type}</Typography>
        </Box>
      </Item>
      {open && <NewTemplate open={open} setOpen={setopen} template_id={template_id} isForUpdate={true} />}
    </Grid>
  );
}
