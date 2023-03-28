
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import SearchBox from "../Components/SearchBox";
import AddButton from "../Components/AddButton";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import subscriber from "../Images/subscriber.png";

import AssignRolepopUpComponent from "../Components/AssignRolepopUpComponent";




import * as React from 'react';
import {  useState} from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Grid from "@mui/material/Grid";

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import SearchBox from '../Components/SearchBox';
import { Box } from '@mui/system';
import NewRolePopUp from '../Pop Up/NewRolePopUp'

const emails = [];

function SimpleDialog(props) {
  const {  selectedValue, open } = props;

  const handleClose = () => {
    props.onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    props.onClose(value);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
const roles = [
  {
    role: "अपलोड करा",
    employees: "",
  },
  {
    role: "लायब्ररी व्यवस्थापन ",
    employees: "",
  },
  {
    role: "योजना / लाभ व्यवस्थापन",
    employees: "",
  },
  {
    role: "प्रकाशन व्यवस्थापन",
    employees: "",
  },
  {
    role: "योजना / लाभ व्यवस्थापन",
    employees: "",
  },
  {
    role: "प्रकाशन व्यवस्थापन",
    employees: "",
  },
  {
    role: "योजना / लाभ व्यवस्थापन",
    employees: "",
  },
  {
    role: "प्रकाशन व्यवस्थापन",
    employees: "",
  },
];
const [opne, setopne] = useState(false)

  const NewRolePopup = () =>{
      setopne(!opne)
  }

  return (
    <Dialog onClose={handleClose} open={props.open}>
      
          <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        sx={{ backgroundColor: "#E1E5F8" }}
        onClose={handleClose}
        open={open}
      >
        <Box margin={2}>
          <SearchBox find={"Find Role"} />
        </Box>

        <Box sx={{ flexGrow: 1, backgroundColor: "#E1E5F8" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item
                sx={{
                  backgroundColor: "#4F62B0",
                  margin: 1,
                  display: "flex",
                  color: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "50%", textAlign: "left" }}>
                  <Typography>Role Name</Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Typography>Employee</Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item
                sx={{
                  backgroundColor: "#ffffff",
                  margin: 1,
                  display: "flex",
                  color: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ color: "#4F62B0", width: "50%", textAlign: "left" }}>
                  <Typography sx={{ marginLeft: "10px" }}>
                    + Choose Role
                  </Typography>
                </Box>
                <Box
                  sx={{ width: "50%", alignItems: "left", textAlign: "left" }}
                >
                  <img
                    src={subscriber}
                    width="17.17px"
                    height="17.17px"
                    alt="SVG"
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      justifyContent: "center",
                    }}
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            height: "35vh",
            backgroundColor: "#E1E5F8",
            overflow: "scroll",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "#E1E5F8",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          {roles.map((item, index) => (
            <AssignRolepopUpComponent
              role={item.role}
              employees={item.employees}
            />
          ))}
        </Box>

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
            sx={{ width:'90%' }}
            onClick={NewRolePopup}
          >
            <AddButton buttonTitle={"+ Add Role  "} />
          </Box>
        </List>
      </Dialog>
    </Box>

    {
        opne && (
          <NewRolePopUp open={opne} setOpen={setopne}/>
        )
      }
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  // const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = (value) => {
    props.setOpen(false);
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
        open={props.open}
        onClose={handleClose}
      />
    </div>
  );
}
