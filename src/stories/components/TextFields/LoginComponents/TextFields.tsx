import React from "react";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

interface TextFieldProps {
  placeholder: string;
  type: string;
  handleChange: () => void;
}
const TextFields = ({
  placeholder,
  type,
  handleChange,
}: TextFieldProps): any => {
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
            {type === "password" ? <LockIcon /> : <PersonIcon />}
          </InputAdornment>
        }
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
      />
    </>
  );
};

export default TextFields;
