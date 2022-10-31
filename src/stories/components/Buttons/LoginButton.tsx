import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: any;
  size?: "medium";
  label?: string;
  hover?: any;
  onClick?: () => void;
}

export const LoginButton: any = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  hover,
  ...props
}: ButtonProps) => {
  return (
    <>
      <div className="loginButton">
        <Button
          variant="outlined"
          size="large"
          sx={{
            "&:hover": {
              backgroundColor: "#0069d9",
              borderColor: "#0062cc",
              boxShadow: "none",
              color: "white",
            },
          }}
          {...props}
        >
          {label}
        </Button>
      </div>
    </>
  );
};
