import React from "react";
import { TextField } from "@mui/material";

interface Searchprops {
  HandleChange: () => void;
}

const Search = ({ HandleChange }: Searchprops): any => {
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
      onChange={HandleChange}
    />
  );
};

export default Search;
