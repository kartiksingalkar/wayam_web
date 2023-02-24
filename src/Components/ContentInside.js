import React from "react";


import { Box, OutlinedInput } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export default function ContentInside(props) {
  return (
    
      <Box  sx={{
        display: "flex",
        flexDirection: "column",
       
        width: '25%' ,
        bgcolor: '#E1E5F8',
        minWidth:'350px',
        mx:4,
        mt:1
      }}>
        <Box sx={{ color: '#4F62B0',mx:'6%'}}>
        <h3 >{props.title_head} </h3>
        </Box>
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:'center',
            alignItems:'center',
           width:'100%'
            
          }}
        >
          <OutlinedInput
            id="outlined-basic"
            placeholder={props.pla1}
            size="small"
            sx={{ bgcolor: 'white',width:'80%'}}
          />
          <OutlinedInput
            id="outlined-basic"
            placeholder={props.pla2}
            size="small"
            sx={{ mt:2, bgcolor: 'white', width:'80%'}}
          />
          <OutlinedInput
            id="outlined-basic"
            placeholder={props.pla3}
            size="small"
            sx={{ mt:2, bgcolor: 'white',width:'80%' }}
          />
          <OutlinedInput
            id="outlined-basic"
            placeholder={props.pla4}
            size="small"
            sx={{ mt:2, bgcolor: 'white',  width:'80%'}}
          />
          <OutlinedInput
            id="outlined-basic"
            placeholder={props.pla5}
            size="small"
            sx={{ mt:2,mb:2, bgcolor: 'white',width:'80%' }}
            endAdornment={
              <InputAdornment position="end">
                <DriveFolderUploadIcon />
              </InputAdornment>
            }
          />
        </Box>
      </Box>
   
  );
}
