import React from "react";
import { TextField } from "@mui/material";

interface Searchprops {
  handleChange: () => void;
}

const Search = ({ handleChange }: Searchprops): any => {
  return (
    <TextField
      id="outlined-basic"
      inputProps={{
        style: {
          width: 300,
          height: 20,
          padding: 8,
          borderBlockColor: "Blue",
          display: "inline-block",
        },
      }}
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default Search;
