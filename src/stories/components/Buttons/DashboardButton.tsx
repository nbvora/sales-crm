import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: any;
  size?: "medium";
  label?: string;
  onClick?: () => void;
}

export const DashboardButton: any = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Button variant="contained" sx={{ backgroundColor }}>
        {label}
      </Button>
    </>
  );
};
