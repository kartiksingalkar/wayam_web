import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function DeletePopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        sx={{backgroundColor:"#E1E5F8"}}
        backgroundColor="#E1E5F8"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ color: "#4F62B0", fontSize: "20px" }}
        >
          {"तुम्हाला ते हटवायचे आहे का ?"}
        </DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              sx={{ color: "#999999", fontSize: "18px" ,fontFamily:"Poppins"}}
              label="पुष्टी करण्यासाठी येथे क्लिक करा "
            />
          </FormGroup>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              backgroundColor: "white",
              color: "#4F62B0",
              "&:hover": {
                backgroundColor: "#4F62B0",
                color: "white",
              },
            }}
          >
            रद्द करा{" "}
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus sx={{
              backgroundColor: "#4F62B0",
              "&:hover": {
                backgroundColor: "#4F62B0",
                color: "white",
              },
            }}
          >
            हटवा
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
