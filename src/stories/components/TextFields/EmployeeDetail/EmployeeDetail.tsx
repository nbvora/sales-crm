import React from "react";
import { Box, TextField, Typography } from "@mui/material";
interface TextFieldprops {
  title?: string;
  HandleChange?: () => void;
}
const EmployeeDetail = ({ title, HandleChange }: TextFieldprops): any => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "562px" }}>
        <Typography>
          {title} <Box sx={{ color: "red", display: "inline-block" }}>*</Box>
        </Typography>
        <TextField id="fullWidth" onChange={HandleChange} />
      </Box>
    </>
  );
};

export default EmployeeDetail;
