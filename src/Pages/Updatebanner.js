import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Box, FormControlLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, Typography } from "@mui/material";

import SubmitButton from "../Components/SubmitButton";
import axios from "axios";

export default function NewContentPopUp(props) {
  console.log(props.data);

  const [data, setData] = useState(props.data);
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

  const uploadCategoryImgFile = async (id) => {
    // console.log("Hello : " + content_id);

    const formData = new FormData();
    formData.append("banner_img", coverImgFile);
    formData.append("id", id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadbannerimg?id=${id}`,
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
          `${process.env.REACT_APP_API_URL}/updatebanner?id=${props.data.id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          uploadCategoryImgFile(props.data.id);
          window.location.reload();
          props.setOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    //  }
    
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
            <Typography sx={{mx:2,mt:2}} >Banner Name</Typography>
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="outlined-basic"
              placeholder="Banner Name"
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
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <RadioGroup
                row
                // aria-labelledby="demo-row-radio-buttons-group-label"
                sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',my:2}}
                name="row-radio-buttons-group"
                value={data.showstatus}
                onChange={(e) => {
                  handleChange("showstatus", e.target.value);
                }}
                onClick={(e) => {
                    e.stopPropagation();
                  }}
              >
                {/* <Typography sx={Styles.gender}>Gender</Typography> */}
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="inactive"
                  control={<Radio />}
                  label="Draft"
                />
              </RadioGroup>

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
          <Button onClick={handleCancel}>
            <SubmitButton buttonTitle={"Cancel"} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
