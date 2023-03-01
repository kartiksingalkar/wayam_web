import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
// import { fontWeight } from "@mui/system";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { Box } from "@mui/material";
import SubmitButton from "../Components/SubmitButton";


export default function NewContentPopUp(props) {
  // const [open, setOpen] = React.useState(false);
  // const [age, setAge] = React.useState('');
  // const [ setRight] = React.useState('');

  const [setFormdata] = useState({})
  const handleChange = (key,value) => {
    setFormdata((prevState) => {
        return {
            ...prevState,
            [key]:value,
        }
    })
    console.log(key); 
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
          >  + नवीन मजकूर प्रकार        
            
          </Typography>

          <Box fullWidth maxWidth='xs' sx={{display:"flex", flexDirection:'column', justifyContent:"space-between"}}>

          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="outlined-basic"
            placeholder="मजकूर प्रकारचे नाव"
            fullWidth
            size="small"
            sx={{borderRadius:'5px', marginBottom:"20px",backgroundColor:"white"}}
            onChange = {(e) => {
                handleChange("content",e.target.value);
            }}
          />

          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="outlined-basic"
            placeholder="मजकूर क्रमांक "
            fullWidth
            size="small"
            sx={{borderRadius:'5px', marginBottom:"20px",backgroundColor:"white"}}
            onChange = {(e) => {
                handleChange("contentNo",e.target.value);
            }}
          />

          <TextField
            variant="outlined"
            autoFocus
            multiline
            maxRows={7}
            onChange = {(e) => {
                handleChange("description",e.target.value);
            }}
            // margin="dense"
            // id="outlined-basic"
            placeholder="मजकूर डिस्क्रिपशन"
            fullWidth
            size="small"
            inputProps={{
                style: {
                  height: "90px"
                }
              }}
            sx={{borderRadius:'5px', marginBottom:"20px",backgroundColor:"white"}}
          />
         
        </Box>

        </DialogContent>
        <DialogActions sx={{backgroundColor:"#E1E5F8"}}>
            <SubmitButton buttonTitle={"सेव करा "}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
