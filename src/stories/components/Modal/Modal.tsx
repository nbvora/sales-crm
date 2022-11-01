import React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DashboardButton } from "../Buttons/DashboardButton";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface ModalProps {
  backgroundColor?: any;
  label?: string;
  label1: string;
  labelYes?: string;
  labelNo?: string;
  labelChange?: string;
}

export const Modal: any = ({
  backgroundColor,
  label,
  label1,
  labelYes,
  labelNo,
  labelChange,
  ...props
}: ModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = React.useState(false);

  const handleClose: any = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="Modal">
        <div
          className="icon"
          style={{
            marginLeft: 90,
            marginTop: 15,
            height: 60,
            width: 60,
          }}
        >
          <ErrorOutlineIcon
            sx={{
              color: "#facea8",
              width: 60,
              height: 60,
              position: "relative",
              right: 6,
              top: 0,
              justifyContent: "center",
            }}
          />
        </div>
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {label}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <DashboardButton label={labelYes} />
          </Button>
          <Button onClick={handleClose} autoFocus>
            <DashboardButton label={labelNo} />
          </Button>
        </DialogActions>
      </div>
    </>
  );
};
