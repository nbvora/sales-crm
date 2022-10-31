import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";

const ToastMessage = (): any => {
  return (
    <>
      <Alert
        icon={<GppMaybeIcon />}
        variant="filled"
        severity="error"
        sx={{
          color: "white",
          width: "300px",
          height: "100px",
          background: "#dc3545",
          alignItems: "center",
          boxShadow: 6,
        }}
      >
        <AlertTitle>Error</AlertTitle>
        You have entered wrong <br></br> credentials
      </Alert>
    </>
  );
};

export default ToastMessage;
