import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: any;
  size?: "medium";
  label?: string;
  onClick?: () => void;
}

export const ActiveDeactive: any = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment: any = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <Tooltip title="Active" placement="top" arrow>
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{
              "&:hover": {
                backgroundColor: "#6c757d",
                borderColor: "#6c757d",
                boxShadow: "none",
                color: "white",
              },
            }}
          >
            Active
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Deactive" placement="top" arrow>
          <ToggleButton
            value="center"
            aria-label="centered"
            sx={{
              "&:hover": {
                backgroundColor: "#6c757d",
                borderColor: "#6c757d",
                boxShadow: "none",
                color: "white",
              },
            }}
          >
            Deactive
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </>
  );
};
