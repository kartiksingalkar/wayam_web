import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import edit from "../Images/edit.png";
import frame from "../Images/frame.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function IssueManagementComponent1(props) {
  const history = useHistory();

  const { number, date, type, status, issue_id } = props;
  console.log(JSON.stringify(props));

  const handleEditContent = () => {
    history.push({
      pathname: "/PublisherNew",
      state: {
        issue_id: issue_id,
        templateName: props.templateName,
        templateData: props.templateData,
      },
    });
  };

  const [isForUpdate, setIsForUpdate] = useState(false);

  const handleDelete = async () => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/deleteissue?issue_id=${issue_id}`
      );
      if (response.data.status) {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = () => {
    setIsForUpdate(true);

    history.push({
      pathname: "/IssueManagement",
      state: {
        id: issue_id,
        templateName: props.templateName,
        templateData: props.templateData,
        isForUpdate: true,
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
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            width: "25%",
          }}
        >
          <img
            onClick={handleEditContent}
            src={edit}
            width="17.17px"
            height="17.17px"
            alt="SVG"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />

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
          <Typography>{number}</Typography>
        </Box>
        <Box
          sx={{ textAlign: "center", width: "25%", justifyContent: "center" }}
        >
          <Typography>{date}</Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "25%" }}>
          <Typography>
            {Object.values(props.templateName).join(", ")}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "25%" }}>
          <Typography>{status}</Typography>
        </Box>
      </Item>
    </Grid>
  );
}
