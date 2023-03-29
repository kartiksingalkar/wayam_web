import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import SubmitButton from "../Components/SubmitButton";

export default function (props) {
  const [age, setAge] = React.useState("");
  const [right] = React.useState("");

  const handleChange = () => {
    setAge();
  };

  // const handleRight = () => {
  //   setRight();
  // };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={props.open}
        sx={{ backgroundColor: "#E1E5F8" }}
        onClose={handleClose}
      >
        <DialogContent sx={{ backgroundColor: "#E1E5F8" }}>
          <Typography
            sx={{
              color: "#4F62B0",
              fontWeight: "600",
              backgroundColor: "#E1E5F8",
            }}
          >
            + New Role
          </Typography>

          <Box
            fullWidth
            maxWidth="xs"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="outlined-basic"
              placeholder="Role Name"
              type="email"
              fullWidth
              size="small"
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
            />
            {/* ..................dropdown................... */}

            <FormControl size="small" fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel sx={{ color: "#999999" }} id="module">
                मोड्यूल निवडा
              </InputLabel>
              <Select
                sx={{ color: "#4F62B0", backgroundColor: "white" }}
                labelId="module"
                id="module"
                value={age}
                placeholder="Choose Module"
                onChange={handleChange}
              >
                <MenuItem value={10}>Module 1</MenuItem>
                <MenuItem value={20}>Module 2</MenuItem>
                <MenuItem value={30}>Module 3</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              size="small"
              fullWidth
              sx={{ color: "#4F62B0", marginBottom: "20px" }}
            >
              <InputLabel sx={{ color: "#999999" }} id="right">
                Authority
              </InputLabel>
              <Select
                sx={{ color: "#4F62B0", backgroundColor: "white" }}
                labelId="right"
                id="right"
                value={right}
                placeholder="Authority "
                onChange={handleChange}
              >
                <MenuItem value={10}>Authority 1</MenuItem>
                <MenuItem value={20}>Authority 2</MenuItem>
                <MenuItem value={30}>Authority 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#E1E5F8" }}>
          <SubmitButton buttonTitle={"Save"} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
