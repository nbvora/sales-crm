import React from "react";
import { AppBar } from "@mui/material";
import { Userinfo } from "../Dropdowns/UserInfoDropdown.stories";

const NavBarr = (): any => {
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
        <Userinfo />
      </AppBar>
    </>
  );
};

export default NavBarr;
