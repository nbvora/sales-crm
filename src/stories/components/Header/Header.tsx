import React from "react";
import { AppBar } from "@mui/material";
import { UserInfo } from "../Dropdowns/UserInfoDropdown.stories";

const NavBar = (): any => {
  return (
    <>
      <AppBar
        sx={{
          background: "#ffffff",
          height: "70px",
          paddingLeft: "90%",
          justifyContent: "center",
        }}
      >
        <UserInfo />
      </AppBar>
    </>
  );
};

export default NavBar;
