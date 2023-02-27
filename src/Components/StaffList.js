import * as React from "react";
import { Box } from "@mui/material";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
// import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBoxNew from "./SearchBox";
import AddButton from "./AddButton";
import StaffListComponent from "./StaffListComponent";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import edit from "../Images/edit.png";
// import frame from "../assets/dashboard/frame.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const emails = [];

const email = [
  {
    username: "हृषीकेश बारसिंग",
    email: "rushibarsing@gmail.com",
    mobileno: "7028921267",
  },
  {
    username: "ओंकार  शिरोटे ",
    email: "omkarshirote6@gmail.com",
    mobileno: "9067859043",
  },
  {
    username: "प्रसन्न जोशी ",
    email: "prasannajoshi@gmail.com",
    mobileno: "8785890765",
  },
  {
    username: "प्रतीक पाटील ",
    email: "pratikpatil@gmail.com",
    mobileno: "9087654333",
  },
  {
    username: "अंजली निकम ",
    email: "anjalinikam@gmai.com",
    mobileno: "7609543724",
  },
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        sx={{ backgroundColor: "#E1E5F8" }}
        onClose={handleClose}
        open={open}
      >
        <Box margin={2}>
          <SearchBoxNew find={"कर्मचारी शोधा"} />
        </Box>

        <Box sx={{ flexGrow: 1, backgroundColor: "#E1E5F8" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item
                margin={2}
                sx={{
                  backgroundColor: "#4F62B0",
                  margin: 1,
                  display: "flex",
                  color: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "30%", textAlign: "center" }}>
                  <Typography>कर्मचारी नाव</Typography>
                </Box>
                <Box sx={{ width: "30%", textAlign: "center" }}>
                  <Typography>ई - मेल आयडी </Typography>
                </Box>
                <Box sx={{ width: "30%", textAlign: "center" }}>
                  <Typography>मोबाईल नंबर</Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        {email.map((item, index) => (
          <StaffListComponent
            username={item.username}
            email={item.email}
            mobileno={item.mobileno}
          />
        ))}

        <List sx={{ pt: 0, backgroundColor: "#E1E5F8" }}>
          {emails.map((email) => (
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => handleListItemClick(email)}
                key={email}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}

          <Box
            display="flex"
            margin={2}
            justifyContent="flex-end"
            sx={{ marginLeft: "86%" }}
          >
            <AddButton buttonTitle={"+ नवीन कर्मचारी  "} />
          </Box>
        </List>
      </Dialog>
    </Box>
  );
}

export default function StaffList() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
