import React from "react";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxButtonProps {
  primary?: boolean;
  backgroundColor?: any;
  size?: "medium";
  label?: string;
  onClick?: () => void;
}

export const CheckboxButton: any = ({
  primary = false,
  size = "medium",
  backgroundColor,
  ...props
}: CheckboxButtonProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div>
        <Checkbox
          {...label}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 50, color: "gray" } }}
        />
      </div>
    </>
  );
};
