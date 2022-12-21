import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  InputLabelProps: PropTypes.object,
};

export default function RHFTextField({ name, label, type, InputLabelProps }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          fullWidth
          error={!!error}
          helperText={error?.message}
          label={label}
          InputLabelProps={InputLabelProps}
        />
      )}
    />
  );
}
