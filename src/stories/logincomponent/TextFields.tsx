import React from "react";
import { OutlinedInput, InputAdornment, makeStyles } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

interface TextFieldprops {
  placeholder: string;
  type: string;
  HandleChange: () => void;
}

const useStyles = makeStyles({
  root: {
    border: 0,
    borderColor: "primary.main",
  },
});
const TextFields = ({
  placeholder,
  type,
  HandleChange,
}: TextFieldprops): any => {
  const classes = useStyles();
  return (
    <>
      <OutlinedInput
        id="input-with-icon-textfield"
        className={classes.root}
        inputProps={{
          focused: true,
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
            {type === "text" ? <PersonIcon /> : <LockIcon />}
          </InputAdornment>
        }
        placeholder={placeholder}
        type={type}
        onChange={HandleChange}
      />
    </>
  );
};

export default TextFields;
