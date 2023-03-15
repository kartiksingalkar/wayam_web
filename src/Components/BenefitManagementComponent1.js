import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import edit from "../Images/edit.png";
import frame from "../Images/frame.png";
import axios from "axios";
import NewPlanPopup from "../Pop Up/NewPlanPopup";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BenefitManagementComponent1(props) {
  const { plan, plan_id, duration, setPlanData, index, status } = props;
  const [planOpen, setPlanOpen] = useState(false);
  const [isForUpdate, setIsForUpdate] = useState(false);

  const hanldeDelete = async () => {
    console.log("Delete");
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/deleteplan?plan_id=${plan_id}`
      );

      if (response.data.status) {
        setPlanData((prev) => {
          const newPlanData = [...prev];
          newPlanData.splice(index, 1);
          return newPlanData;
        });
        alert("Do you want to delete ?");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    setIsForUpdate(true);
    setPlanOpen(!planOpen);
    // setIsForUpdate(!isForUpdate);
  };

  // const openNewPlanPopup = () => {
  //   setPlanOpen(!planOpen);
  //   setIsForUpdate(!isForUpdate);
  // };

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
          <img
            src={edit}
            width="17.17px"
            height="17.17px"
            alt="SVG"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
            onClick={handleEdit}
          />
          <img
            onClick={hanldeDelete}
            src={frame}
            width="17.17px"
            height="17.17px"
            alt="SVG"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
          <Typography>{plan}</Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "50%" }}>
          <Typography>{duration}</Typography>
        </Box>
      </Item>
      {planOpen && (
        <NewPlanPopup
          plan={plan}
          duration={duration}
          status={status}
          plan_id={plan_id}
          isForUpdate={isForUpdate}
          open={planOpen}
          setPlanOpen={setPlanOpen}
        />
      )}
    </Grid>
  );
}
