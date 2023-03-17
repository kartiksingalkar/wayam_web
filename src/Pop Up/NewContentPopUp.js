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

  const [coverImgFile, setCoverImgFile] = useState();

  const handleCoverImgChange = (e) => {
    setCoverImgFile(e.target.files[0]);
  };

  const [id, setId] = useState();

  const uploadCategoryImgFile = async (id) => {
    // console.log("Hello : " + content_id);

    const formData = new FormData();
    formData.append("category_img", coverImgFile);
    formData.append("id", props.id);
    // formData.append("content_type", "audio");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadcategoryimg?id=${id}`,
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
          uploadCategoryImgFile(props.id);
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
          // console.log("My ID : " +);
          // setId(response.data.data[0].id)

          uploadCategoryImgFile(response.data.data[0].id);
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

          <OutlinedInput
            id="outlined-basic"
            type="file"
            label="cover image"
            placeholder="Cover Image"
            size="small"
            sx={{ mt: 2, bgcolor: "white", width: "80%" }}
            endAdornment={
              <InputAdornment position="end">
                <DriveFolderUploadIcon />
              </InputAdornment>
            }
            onChange={(e) => {
              handleCoverImgChange(e);
            }}
          />
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
