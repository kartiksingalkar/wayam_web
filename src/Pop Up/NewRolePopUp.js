import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
// import { fontWeight } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/material";
import SubmitButton from "../Components/SubmitButton";


export default function (props) {
  // const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [right] = React.useState('');


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
      <Dialog fullWidth maxWidth="xs" open={props.open} sx={{backgroundColor:"#E1E5F8"}} onClose={handleClose}>
        <DialogContent sx={{backgroundColor:"#E1E5F8"}}>
          <Typography
            sx={{ color: "#4F62B0", fontWeight: "600", backgroundColor:"#E1E5F8" }}
          >
            {" "}
            + नवीन रोल{" "}
          </Typography>

          <Box fullWidth maxWidth='xs' sx={{display:"flex", flexDirection:'column', justifyContent:"space-between"}}>

          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="outlined-basic"
            placeholder="रोलचे नाव"
            type="email"
            fullWidth
            size="small"
            sx={{borderRadius:'5px', marginBottom:"20px",backgroundColor:"white"}}
          />
          {/* ..................dropdown................... */}
          
            <FormControl size="small" fullWidth sx={{marginBottom:"20px",}}>
            <InputLabel sx={{color: "#999999"}} id="module">मोड्यूल निवडा</InputLabel>
            <Select

              sx={{color: "#4F62B0",backgroundColor:"white"}}
              labelId="module"
              id="module"
              value={age}
              placeholder="मोड्यूल निवडा"
              onChange={handleChange}
            >
              <MenuItem value={10}>मोड्यूल 1</MenuItem>
              <MenuItem value={20}>मोड्यूल 2</MenuItem>
              <MenuItem value={30}>मोड्यूल 3</MenuItem>
            </Select>
         </FormControl>

         <FormControl size="small" fullWidth sx={{color: "#4F62B0",marginBottom:"20px"}}>
            <InputLabel sx={{color: "#999999"}} id="right">अधिकार</InputLabel>
            <Select

              sx={{color: "#4F62B0",backgroundColor:"white"}}
              labelId="right"
              id="right"
              value={right}
              placeholder="अधिकार "
              onChange={handleChange}
            >
              <MenuItem value={10}>अधिकार 1</MenuItem>
              <MenuItem value={20}>अधिकार 2</MenuItem>
              <MenuItem value={30}>अधिकार 3</MenuItem>
            </Select>
         </FormControl>
        </Box>

        </DialogContent>
        <DialogActions sx={{backgroundColor:"#E1E5F8"}}>
            <SubmitButton buttonTitle={"सेव करा "}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
