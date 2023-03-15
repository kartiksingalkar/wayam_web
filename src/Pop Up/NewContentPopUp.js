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
import axios from "axios";

export default function NewContentPopUp(props) {
  // const [open, setOpen] = React.useState(false);
  // const [age, setAge] = React.useState('');
  // const [ setRight] = React.useState('');

  console.log(props.isForUpdate);

  const [data, setData] = useState({});
  const handleChange = (key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    console.log(key);
  };

  // const handleRight = () => {
  //   setRight();
  // };

  React.useEffect(() => {
    // console.log(props.name)
    if (props.isForUpdate) {
      setData((prevData) => {
        return {
          ...prevData,
          name: props.type,
        };
      });
    }
  }, []);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = async () => {
    if (props.isForUpdate) {
      try {
        let response = await axios.patch(
          `${process.env.REACT_APP_API_URL}/updatecategory?id=${props.id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          window.location.reload();
          props.setOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/addcategory`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          props.setData((prevData) => {
            return [...prevData, data];
          });
          props.setOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
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
            + New Content type
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
              placeholder="Content Type Name"
              fullWidth
              size="small"
              value={data.name}
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            />

            {/* <TextField
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
          /> */}

            {/* <TextField
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
          /> */}
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#E1E5F8" }}>
          <Button onClick={handleSubmit}>
            <SubmitButton buttonTitle={"submit"} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
