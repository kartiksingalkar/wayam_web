import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import { Box, InputLabel, TextField } from "@mui/material";

export default function SearchContentM(props) {
  return (
    // <div
    //   sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    // >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt:'-1%',
          flexWrap: 'wrap',
        
          
  
         
        }}
      >
        <Box sx={{ mx: 4,width:"25%",justifyContent:'center',alignItems:'center', minWidth:'350px',mt:1  }}>
            <Box>
          <TextField
            id="outlined-basic"
            sx={{width:'100%',height:'10%'}}
            placeholder="मजकुराचे नाव *"
            label="मजकुराचे नाव "
            variant="outlined"
            size="small"
          />
          </Box>
        </Box>
        <Box sx={{ mx: 4,mt:1 , width:"25%",borderRadius:1,borderColor: '#999999', minWidth:'350px'}}>
          <TextField
            id="outlined-basic"
             placeholder="लेखकाचे नाव"
            size="small"
            label="लेखकाचे नाव"
            sx={{width:'100%',}}
            
          />
        </Box>
        <Box sx={{ width: "25%" ,  mx:4,mt:1 , minWidth:'350px'}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">मजकूर प्रकार </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              size="small"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    // </div>
  );
}
