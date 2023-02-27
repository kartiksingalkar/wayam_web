import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function SearchBox(props) {
  const { find } = props;

  return (
    <Autocomplete
      sx={{
        borderRadius: "5px",
        border: "1px solid #999999",
        backgroundColor: "#ffffff",
        width: '50%',
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
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={find}
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "वार्षिक सभासदत्त्व" },
  { title: "6 महिन्याचे सभासदत्त्व" },
  { title: "5 महिन्याचे सभासदत्त्व" },
  { title: "4 महिन्याचे सभासदत्त्व" },
  { title: "3 महिन्याचे सभासदत्त्व " },
  { title: "1 महिन्याचे सभासदत्त्व " },
  { title: "9 महिन्याचे सभासदत्त्व " },
  { title: "7 महिन्याचे सभासदत्त्व " },
];
