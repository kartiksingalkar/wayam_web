import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Box, InputAdornment, OutlinedInput, Typography } from "@mui/material";

import SubmitButton from "../Components/SubmitButton";
import axios from "axios";

export default function NewContentPopUp(props) {
  
  const [data, setData] = useState(props.data);
  // console.log("All plans",data);
  const handleChange = (key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    console.log(key , value);
  };

//   React.useEffect(() => {
//     if (props.update) {
//       setData((prevData) => {
//         return {
//           ...prevData,
//           name: props.type,
//         };
//       });
//     }
//   }, []);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
  };

  const [coverImgFile, setCoverImgFile] = useState();

  const handleCoverImgChange = (e) => {
    setCoverImgFile(e.target.files[0]);
  };

  const [id, setId] = useState();

  const uploadCategoryImgFile = async (plan_id) => {
    // console.log("Hello : " + content_id);

    const formData = new FormData();
    formData.append("benifit_img", coverImgFile);
    formData.append("plan_id", plan_id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadbenifitimage?plan_id=${plan_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleCancel = () => {
     props.setOpen(false);

  }

  const handleSubmit = async () => {
    
    // if (props.isForUpdate) {
    //   if(data.name.length === 0){
    //     alert("Please select a category name");
    //   }else{
      try {
        let response = await axios.patch(
          `${process.env.REACT_APP_API_URL}/updateplan?id=${props.data.plan_id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          uploadCategoryImgFile(props.data.plan_id);
          window.location.reload();
          props.setOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    //  }
    
  };

  const handleDelete = async () => {
console.log(props.data.plan_id);
try {
  let response = await axios.delete(
    `${process.env.REACT_APP_API_URL}/deleteplan?plan_id=${props.data.plan_id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data.status) {
    // uploadCategoryImgFile(props.data.plan_id);
    console.log("done")
    window.location.reload();
    props.setOpen(false);
  }
} catch (e) {
  console.log(e);
}
  }

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
        // onClose={handleClose}
      >
        <DialogContent sx={{ backgroundColor: "#E1E5F8" }}>
          <Typography
            sx={{
              color: "#4F62B0",
              fontWeight: "600",
              backgroundColor: "#E1E5F8",
            }}
          >
            + Update Plan
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
              placeholder="Plan Name"
              fullWidth
              size="small"
              value={data.plan_name}
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("plan_name", e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="outlined-basic"
              placeholder="Plan Duration"
              fullWidth
              size="small"
              value={data.plan_duration}
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("plan_duration", e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="outlined-basic"
              placeholder="Plan Start date"
              fullWidth
              size="small"
              value={data.plan_start_date}
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("plan_start_date", e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="outlined-basic"
              placeholder="Plan End Date"
              fullWidth
              size="small"
              value={data.plan_end_date}
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("plan_end_date", e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="outlined-basic"
              placeholder="Plan Rupees"
              fullWidth
              size="small"
              value={data.plan_payment}
              sx={{
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                handleChange("plan_payment", e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>

          <OutlinedInput
            id="outlined-basic"
            type="file"
            label="cover image"
            placeholder="Cover Image"
            size="small"
            sx={{ mt: 2, bgcolor: "white", width: "100%" }}
            endAdornment={
              <InputAdornment position="end">
                <DriveFolderUploadIcon />
              </InputAdornment>
            }
            onChange={(e) => {
              handleCoverImgChange(e);
            }}
            onClick={(e) => {
                e.stopPropagation();
              }}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#E1E5F8" }}>
          <Button onClick={handleSubmit}>
            <SubmitButton buttonTitle={"Update"} />
          </Button>
          <Button onClick={()=>handleDelete()}>
            <SubmitButton buttonTitle={"Delete Banner"} />
          </Button>
          <Button onClick={handleCancel}>
            <SubmitButton buttonTitle={"Cancel"} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
