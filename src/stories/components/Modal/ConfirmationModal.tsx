import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Modal } from "../Modal/Modal";
interface ConfirmModalProps {
  primary?: boolean;
  backgroundColor?: any;
  size?: "medium";
  label?: string;
  label1?: string;
  labelYes?: string;
  labelNo?: string;
  labelChange?: string;
  labelName?: string;
}

export const ConfirmationModal: any = ({
  primary = false,
  size = "medium",
  backgroundColor,
  labelName,
  label,
  label1,
  labelYes,
  labelNo,
  labelChange,
  ...props
}: ConfirmModalProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen: any = () => {
    setOpen(true);
  };

  const handleClose: any = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          {labelName}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Modal label={label} labelYes={labelYes} labelNo={labelNo} />
        </Dialog>
      </div>
    </>
  );
};
