import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  handlechange: PropTypes.func,
};

export default function RHFTextField({ name, label, type }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} type={type} fullWidth error={!!error} helperText={error?.message} label={label} />
      )}
    />
  );
}
