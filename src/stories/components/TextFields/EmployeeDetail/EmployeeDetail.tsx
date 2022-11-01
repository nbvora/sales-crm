import React from "react";
import { Box, TextField, Typography } from "@mui/material";
interface TextFieldProps {
  title?: string;
  handleChange?: () => void;
}
const EmployeeDetail = ({ title, handleChange }: TextFieldProps): any => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "562px" }}>
        <Typography>
          {title} <Box sx={{ color: "red", display: "inline-block" }}>*</Box>
        </Typography>
        <TextField id="fullWidth" onChange={handleChange} />
      </Box>
    </>
  );
};

export default EmployeeDetail;
