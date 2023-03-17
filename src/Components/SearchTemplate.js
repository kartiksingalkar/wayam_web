import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";

export default function SearchTemplate(props) {
  const { find, data2, setData } = props;

  const [value, setValue] = React.useState('');
  


  
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/searchtemplate?search=${value}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data.data);
        console.log(response.data.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [value]);

  return (
    <Autocomplete
      sx={{
        borderRadius: "5px",
        border: "1px solid #999999",
        backgroundColor: "#ffffff",
        width: "50%",
        height: 40,
        "& .MuiOutlinedInput-root": {
          borderRadius: "",
          padding: "5px",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: "none",
          padding: "2p",
        },
      }}
      id="find"
      freeSolo
      options={data2.map((option) => option.template_name)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onSelect={(e) => {setValue(e.target.value);  }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}