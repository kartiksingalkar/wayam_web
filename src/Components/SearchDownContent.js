import { Box, Button, InputLabel } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";

export default function SearchDownContent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        mt: "-0.5%",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: "25%", mx: 4, minWidth: "350px", mt: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            येथे प्रकाशित करा{" "}
          </InputLabel>
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
      <Box sx={{ width: "25%", mt: 0.5, mx: 4, minWidth: "350px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            सुबस्क्रिपशन टाईप{" "}
          </InputLabel>
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
      <Box
        sx={{
          mx: 4,
          width: "25%",
          mt: 0.5,
          justifyContent: "center",
          alignItems: "center",
          minWidth: "350px",
        }}
      >
        <Box>
          <Button
            style={{ width: "100%", backgroundColor: "#4F62B0" }}
            variant="contained"
          >
            पक्के करा{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
