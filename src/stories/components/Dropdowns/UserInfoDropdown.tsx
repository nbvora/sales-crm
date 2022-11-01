import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import VpnKeySharpIcon from "@mui/icons-material/VpnKeySharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import PortraitSharpIcon from "@mui/icons-material/PortraitSharp";

const UserInfoDropdown = (): any => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ width: "51.83px", height: "52px" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleOutlinedIcon sx={{ width: "100%", height: "100%" }} />
        {open ? (
          <KeyboardArrowUpOutlinedIcon />
        ) : (
          <KeyboardArrowDownOutlinedIcon />
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <PortraitSharpIcon sx={{ marginRight: "20px" }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <VpnKeySharpIcon sx={{ marginRight: "20px" }} />
          Change Password
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutSharpIcon sx={{ marginRight: "20px" }} />
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserInfoDropdown;
