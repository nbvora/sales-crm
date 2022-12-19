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
// import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { countries, _userList } from '../../../_mock';

// components
// import Label from '../../../components/Label';
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function UserNewForm() {
  const { name = '' } = useParams();

  const currentUser = _userList.find((user) => paramCase(user.name) === name);
  const isEdit = currentUser && true;

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    companyName: Yup.string().required('COmpany Name is required'),
    invoiceNumber: Yup.string().required('Invoice Number is required'),
    invoiceDate: Yup.string().required('Invoice Date is required'),
    subTotalAmmount: Yup.string().required('Sub Total Ammount is required'),
  });

  const defaultValues = useMemo(
    () => ({
      companyName: currentUser?.name || '',
      invoiceNumber: currentUser?.email || '',
      invoiceDate: currentUser?.phoneNumber || '',
      subTotalAmmount: currentUser?.address || '',
      avatarUrl: currentUser?.avatarUrl || '',
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
        dispatch({ type: sagaActions.EDIT_INVOICE, data });
      } else {
        dispatch({ type: sagaActions.ADD_INVOICE, data });
      }
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.blog.root);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Typography variant="h4" gutterBottom mx={4}>
          {!isEdit ? 'Add New Invoice' : 'Edit Invoice'}
        </Typography>
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
              <RHFSelect name="country" label="Country" placeholder="Role">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="companyName" label="Company Name" />
              <RHFTextField name="invoiceNumber" label="Invoice Number" />
              <RHFTextField name="invoiceDate" label="Invoice Date" />

              <RHFTextField name="subTotalAmmount" label="Sub Total Ammount" />
              <RHFTextField name="invoiceNumber" label="Invoice Number" />
              <RHFTextField name="invoiceDate" label="Invoice Date" />
              <RHFTextField name="subTotalAmmount" label="Sub Total Ammount" />
              <RHFTextField name="subTotalAmmount" label="Sub Total Ammount" />
            </Box>
            <Box sx={{ mt: 3 }}>
              <RHFTextField name="subTotalAmmount" label="Sub Total Ammount" />
            </Box>

            <Box
              sx={{
                mt: 3,
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFSelect name="country" label="Country" placeholder="Role">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="companyName" label="Company Name" />
              <RHFTextField name="invoiceNumber" label="Invoice Number" />
              <RHFTextField name="invoiceDate" label="Invoice Date" />
            </Box>

            <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                component={RouterLink}
                to={`${PATH_DASHBOARD.blog.root}`}
              >
                Cancle
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
