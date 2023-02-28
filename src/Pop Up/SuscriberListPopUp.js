// import * as React from "react";
// import { Box } from "@mui/material";

// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// // import DialogTitle from "@mui/material/DialogTitle";
// import Dialog from "@mui/material/Dialog";
// import PersonIcon from "@mui/icons-material/Person";
// // import AddIcon from "@mui/icons-material/Add";
// import Typography from "@mui/material/Typography";
// import { blue } from "@mui/material/colors";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import SearchBoxNew from "./SearchBox";
// import AddButton from "./AddButton";
// // import StaffListComponent from "./StaffListComponent";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// // import edit from "../assets/dashboard/edit.png";
// import frame from "../Images/frame.png";
// import SubscriberListPopUpComponent from "./SubscriberListPopUpComponent";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const emails = [];

// const subscribers = [
//   {
//     email: "rushibarsing@gmail.com",
//     mobileno: "7028921267",
//     city:"पुणे ",
//     pincode:"410 301 ",
//   },
//   {
//     email: "rushibarsing@gmail.com",
//     mobileno: "7028921267",
//     city:"पुणे ",
//     pincode:"410 301 ",
//   }, {
//     email: "rushibarsing@gmail.com",
//     mobileno: "7028921267",
//     city:"पुणे ",
//     pincode:"410 301 ",
//   }, {
//     email: "rushibarsing@gmail.com",
//     mobileno: "7028921267",
//     city:"पुणे ",
//     pincode:"410 301 ",
//   }, 
//   {
//     email: "rushibarsing@gmail.com",
//     mobileno: "7028921267",
//     city:"पुणे ",
//     pincode:"410 301 ",
//   },
// ];

// export interface SimpleDialogProps {
//   open: boolean;
//   selectedValue: string;
//   onClose: (value: string) => void;
// }

// function SimpleDialog(props: SimpleDialogProps) {
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value: string) => {
//     onClose(value);
//   };

//   return (
    // <Box>
    //   <Dialog
    //     fullWidth
    //     maxWidth="lg"
    //     sx={{ backgroundColor: "#E1E5F8" }}
    //     onClose={handleClose}
    //     open={open}
    //   >
    //     <Box margin={2}>
    //       <SearchBoxNew find={"सदस्य शोधा"} />
    //     </Box>

    //     <Box sx={{ flexGrow: 1, backgroundColor: "#E1E5F8" }}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <Item
    //             sx={{
    //               backgroundColor: "#4F62B0",
    //               margin: 1,
    //               display: "flex",
    //               color: "white",
    //               flexDirection: "row",
    //               justifyContent: "space-between",
    //             }}
    //           >
    //             <Box sx={{ width: "40%", textAlign: "center" }}>
    //               <Typography>ई - मेल आयडी</Typography>
    //             </Box>
    //             <Box sx={{ width: "20%", textAlign: "left" }}>
    //               <Typography>मोबाईल नंबर</Typography>
    //             </Box>
    //             <Box sx={{ width: "20%", textAlign: "left" }}>
    //               <Typography>शहर </Typography>
    //             </Box>
    //             <Box sx={{ width: "20%", textAlign: "left" }}>
    //               <Typography>पिन कोड  </Typography>
    //             </Box>
    //           </Item>
    //         </Grid>
    //       </Grid>
    //     </Box>

    //     {subscribers.map((item, index) => (
    //       <SubscriberListPopUpComponent
    //         email={item.email}
    //         mobileno={item.mobileno}
    //         city={item.city}
    //         pincode={item.pincode}

    //       />
    //     ))}

    //     <List sx={{ pt: 0, backgroundColor: "#E1E5F8" }}>
    //       {emails.map((email) => (
    //         <ListItem disableGutters>
    //           <ListItemButton
    //             onClick={() => handleListItemClick(email)}
    //             key={email}
    //           >
    //             <ListItemAvatar>
    //               <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
    //                 <PersonIcon />
    //               </Avatar>
    //             </ListItemAvatar>
    //             <ListItemText primary={email} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}

    //       <Box
    //         display="flex"
    //         margin={2}
    //         justifyContent="flex-end"
    //         sx={{ marginLeft: "86%" }}
    //       >
    //         <AddButton buttonTitle={"+ नवीन सदस्य "} />
    //       </Box>
    //     </List>
    //   </Dialog>
    // </Box>
//   );
// }

// export default function SubscriberListPopUp() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value: string) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }

import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
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
import { Box } from '@mui/material';
import SearchBoxNew from "../Components/SearchBox";
import Grid from "@mui/material/Grid";
import SubscriberListPopUpComponent from "../Components/SubscriberListPopUpComponent";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AddButton from "../Components/AddButton";
import NewSubscriberPopup from './NewSubscriberPopup';



const emails = [];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const emails = [];

const subscribers = [
  {
    email: "rushibarsing@gmail.com",
    mobileno: "7028921267",
    city:"पुणे ",
    pincode:"410 301 ",
  },
  {
    email: "rushibarsing@gmail.com",
    mobileno: "7028921267",
    city:"पुणे ",
    pincode:"410 301 ",
  }, {
    email: "rushibarsing@gmail.com",
    mobileno: "7028921267",
    city:"पुणे ",
    pincode:"410 301 ",
  }, {
    email: "rushibarsing@gmail.com",
    mobileno: "7028921267",
    city:"पुणे ",
    pincode:"410 301 ",
  }, 
  {
    email: "rushibarsing@gmail.com",
    mobileno: "7028921267",
    city:"पुणे ",
    pincode:"410 301 ",
  },
];
const [opennsp , setopennsp] = useState(false)
const openNewSubscriber =()=>{
  setopennsp(!opennsp)
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
          <SearchBoxNew find={"सदस्य शोधा"} />
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
                <Box sx={{ width: "40%", textAlign: "center" }}>
                  <Typography>ई - मेल आयडी</Typography>
                </Box>
                <Box sx={{ width: "20%", textAlign: "left" }}>
                  <Typography>मोबाईल नंबर</Typography>
                </Box>
                <Box sx={{ width: "20%", textAlign: "left" }}>
                  <Typography>शहर </Typography>
                </Box>
                <Box sx={{ width: "20%", textAlign: "left" }}>
                  <Typography>पिन कोड  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        {subscribers.map((item, index) => (
          <SubscriberListPopUpComponent
            email={item.email}
            mobileno={item.mobileno}
            city={item.city}
            pincode={item.pincode}

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
            sx={{ width:'90%' }}
            onClick={openNewSubscriber}
          >
            <AddButton buttonTitle={"+ नवीन सदस्य "} />
          </Box>
        </List>
      </Dialog>
      {
        opennsp && (
          <NewSubscriberPopup open={opennsp} setOpen={setopennsp}/>
        )
      }

    </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SubscriberListPopUp(props) {
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
