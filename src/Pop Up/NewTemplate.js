import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Box, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import React, { useState } from "react";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import addBtn from '../Images/add.png'

function NewTemplate(props) {
  // POP up Open close
  console.log(props)
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  console.log(val, "data-");
  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  // const [value, setValue] = React.useState(null);
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        + नवीन लाभ
      </Button>
      {/* POP UP */}
      <Dialog fullWidth maxWidth="md" open={props.open} onClose={handleClose}>
        <DialogContent
          //   maxWidth="xl"
          sx={{
            backgroundColor: "#E1E5F8",
            width: "94%",
            display:"flex",
            flexDirection: "row",
          }}
        >
          {/* Inputs */}
          <Box sx={{ flexDirection: "row" }}>
            <TextField
              id="outlined-basic"
              label="टेम्पलेटचे नाव * "
              sx={{
                width: "380px",
                borderRadius: "5px",
                marginBottom: "3%",
                backgroundColor: "white",
              }}
              size="small"
              //   onChange={e=>handleChange(e,i)}
              variant="outlined"
            ></TextField>
            {/* Add Button */}
            <img sx={{marginLeft:'2%'}} src={addBtn} alt="hello" onClick={() => handleAdd()}/>
            {/* <Button onClick={() => handleAdd()}>Add</Button> */}
            {val.map((data, i) => {
              return (
                <div>
                  <Box sx={{width:'100%',display:"flex"}}>
                  <Box sx={{display:'flex', flexDirection: "row" }}>
                    <FormControl>
                      <InputLabel id="demo-simple-select-helper">
                        साहित्य प्रकार
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="साहित्य प्रकार  "
                        size="small"
                        sx={{
                          width: "380px",
                          backgroundColor: "white",
                          marginBottom: "3%",
                        }}
                        onChange={handleChange1}
                      >
                        <MenuItem value="">
                          {/* <em>None</em> */}
                        </MenuItem>
                        <MenuItem value={10}>चौकस चौरस</MenuItem>
                        <MenuItem value={20}>गप्पाटप्पा</MenuItem>
                        <MenuItem value={30}>शब्दरंजन</MenuItem>
                        <MenuItem value={40}>कल्पक</MenuItem>
                        <MenuItem value={50}>गोष्टी</MenuItem>
                        <MenuItem value={60}>इंग्लिश</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{display:"flex", flexDirection:'column' }}>
                    <TextField
                      id="outlined-basic"
                      label="संख्या लिहा "
                      sx={{
                        width: "380px",
                        borderRadius: "5px",
                        marginLeft:'5%',
                        marginBottom: "3%",
                        backgroundColor: "white",
                      }}
                      size="small"
                      onChange={(e) => handleChange(e, i)}
                      variant="outlined"
                    ></TextField>
                  </Box>
                  <Button onClick={() => handleDelete(i)}>x</Button>
                  </Box>
                </div>
              );
            })}
          </Box>
        </DialogContent>
        {/* Action Button */}
        <DialogActions sx={{ backgroundColor: "#E1E5F8", margin: 0 }}>
          {/* <Button onClick={handleClose}>रद्ध करा</Button> */}
          <Button
            sx={{
              marginLeft: "0px",
              margin:'0%',
              width: "390px",
              backgroundColor: "#4F62B0",
              color: "white",
            }}
            onClick={handleClose}
          >
            पक्के करा{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default NewTemplate;
