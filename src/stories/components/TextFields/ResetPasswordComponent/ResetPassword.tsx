import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
interface TextFieldprops {
  placeholder: string;
  type: string;
  HandleChange: () => void;
}
const ResetPassword = ({
  placeholder,
  type,
  HandleChange,
}: TextFieldprops): any => {
  return (
    <>
      <OutlinedInput
        id="input-with-icon-textfield"
        inputProps={{
          style: {
            width: 300,
            height: 20,
            padding: 8,
            borderBlockColor: "Blue",
            display: "inline-block",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <EmailIcon />
          </InputAdornment>
        }
        placeholder={placeholder}
        type={type}
        onChange={HandleChange}
      />
    </>
  );
};

export default ResetPassword;
