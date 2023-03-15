import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Typography } from "@mui/material";

import SubmitButton from "../Components/SubmitButton";
import axios from "axios";

export default function NewContentPopUp(props) {
  
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

  

  React.useEffect(() => {
  
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
