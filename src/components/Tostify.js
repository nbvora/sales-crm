import * as React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from '../redux/store';

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

Tostify.propTypes = {
  status: PropTypes.any,
};

export default function Tostify({ status }) {
  const [open, setOpen] = React.useState(false);

  const { error } = useSelector((state) => state.login);

  React.useEffect(() => {
    setOpen(status);
  }, [status, error]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          API faild please check connection!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
