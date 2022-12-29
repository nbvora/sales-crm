import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(0);
  const [agree, setAgree] = useState(true);

  const handleClickOpen = (i) => {
    setOpen(true);
    setStatus(i);
  };

  const handleClose = () => {
    setOpen(false);
    setAgree((prev) => prev);
  };
  const handleAccept = () => {
    setOpen(false);
    setAgree((prev) => !prev);
  };

  return (
    <div>
      <Dialog open={open} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>
          <ErrorOutlineIcon style={{ width: '80px', height: '80px', display: 'block' }} />
          {'Are You Sure?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure want to change status ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAccept}>Agree</Button>
        </DialogActions>
      </Dialog>

      <Tabs
        value={agree ? 0 : 1}
        onChange={(event, newValue) => {
          handleClickOpen(newValue);
        }}
      >
        <Tab label="Active" />
        <Tab label="Banned" />
      </Tabs>
    </div>
  );
}
