import * as Yup from 'yup';
import { paramCase } from 'change-case';
import { useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
// redux
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';
// utils
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { countries, _userList } from '../../../_mock';
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

// ----------------------------------------------------------------------

export default function VendorForm() {
  const { id = '' } = useParams();
  const headerDetail = [
    { title: 'VendorList', path: PATH_DASHBOARD.vendor.root },
    { title: !id ? 'Add' : 'Edit', path: null },
  ];
  const title = 'Vendors';
  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });

  const currentUser = _userList.find((user) => paramCase(user.id) === id);
  const isEdit = currentUser && true;

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    role: Yup.string().required('Role Number is required'),
    company: Yup.string().required('Company is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.name || '',
      phoneNumber: currentUser?.phoneNumber || '',
      company: currentUser?.company || '',
      role: currentUser?.role || '',
      avatarUrl: currentUser?.avatarUrl || '',
      file: '',
      date: '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isEdit) {
        dispatch({ type: sagaActions.EDIT_VENDORS, data });
      } else {
        dispatch({ type: sagaActions.ADD_VENDORS, data });
      }
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.general.employee);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h7" gutterBottom>
              Personal Information
            </Typography>
            <br />
            <br />
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFSelect name="country" label="Role" placeholder="Role">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="phoneNumber" label="First Name" />
              <RHFTextField name="name" label="Last Name" />
              <RHFTextField name="phoneNumber" label="Mobile Number" />
              <RHFTextField name="company" label="Primary Email" />
              <RHFTextField
                type="date"
                name="date"
                label="Birth date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <br />

            <Typography variant="h7" gutterBottom>
              Company Information
            </Typography>
            <br />
            <br />
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Company Name" />
              <RHFTextField name="phoneNumber" label="GSTIN" />
              <RHFTextField name="name" label="Landline/Office Number" />
              <RHFTextField name="phoneNumber" label="Address" />
              <RHFSelect name="country" label="State" placeholder="State">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFSelect name="country" label="City" placeholder="Role">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFSelect name="country" label="Country" placeholder="Role">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="role" label="Pincode" />
            </Box>
            <br />

            <Typography variant="h7" gutterBottom>
              Login/Account Information
            </Typography>
            <br />
            <br />
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="UserName" />
              <RHFTextField name="phoneNumber" label="Password" />
              <RHFTextField name="name" label="Confirm Password" />
              <RHFTextField type="file" name="file" />
            </Box>
            <br />

            <Typography variant="h7" gutterBottom>
              Bank Details
            </Typography>
            <br />
            <br />
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Bank Name" />
              <RHFTextField name="phoneNumber" label="Bank IFSC" />
              <RHFTextField name="name" label="Bank Account Number" />
            </Box>

            <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                component={RouterLink}
                to={`${PATH_DASHBOARD.general.employee}`}
              >
                Cancel
              </LoadingButton>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create User' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
