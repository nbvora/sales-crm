import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack } from '@mui/material';
// utils
import { Page } from '@react-pdf/renderer';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

// ----------------------------------------------------------------------

UserNewLeadForm.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default function UserNewLeadForm({ isEdit, currentUser }) {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewLeadSchema = Yup.object().shape({
    role: Yup.string().required('Role Number is required'),
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    companyName: Yup.string().required('companyName is required'),
    address: Yup.string().required('Address is required'),
    assignEmployee: Yup.string().required('assignEmployee is required'),
    leadType: Yup.string().required('leadType is required'),
    leadOrigin: Yup.string().required('leadOrigin is required'),
    productName: Yup.string().required('productName is required'),
    valueOfLead: Yup.string().required('valueOfLead is required'),
    // email: Yup.string().required('Email is required').email(),
    // country: Yup.string().required('country is required'),
    // company: Yup.string().required('Company is required'),
    // state: Yup.string().required('State is required'),
    // city: Yup.string().required('City is required'),
    // avatarUrl: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
  });

  const defaultValues = useMemo(
    () => ({
      role: currentUser?.role || '',
      name: currentUser?.name || '',
      phoneNumber: currentUser?.phoneNumber || '',
      companyName: currentUser?.companyName || '',
      address: currentUser?.address || '',
      assignEmployee: currentUser?.assignEmployee || '',
      leadType: currentUser?.leadType || '',
      leadOrigin: currentUser?.leadOrigin || '',
      productName: currentUser?.productName || '',
      valueOfLead: currentUser?.valueOfLead || '',
      // isVerified: currentUser?.isVerified || true,
      // status: currentUser?.status,
      // company: currentUser?.company || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewLeadSchema),
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

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.lead.newLeads);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Page title="Add New Lead">
        <HeaderBreadcrumbs
          heading="Create a New Lead"
          links={[{ name: 'Leads', href: PATH_DASHBOARD.lead.root }, { name: 'Add New Lead' }]}
        />
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={4}>
                        <Card sx={{ py: 10, px: 3 }}>
                            {isEdit && (
                                <Label
                                    color={values.status !== 'active' ? 'error' : 'success'}
                                    sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24, }}
                                >
                                    {values.status}
                                </Label>
                            )}

                            {isEdit && (
                                <FormControlLabel
                                    labelPlacement="start"
                                    control={
                                        <Controller
                                            name="status"
                                            control={control}
                                            render={({ field }) => (
                                                <Switch
                                                    {...field}
                                                    checked={field.value !== 'active'}
                                                    onChange={(event) => field.onChange(event.target.checked ? 'banned' : 'active')}
                                                />
                                            )}
                                        />
                                    }
                                    label={
                                        <>
                                            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                                                Banned
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                Apply disable account
                                            </Typography>
                                        </>
                                    }
                                    sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
                                />
                            )}
                        </Card>
                    </Grid> */}

          <Grid item xs={12} md={8}>
            <Card sx={{ p: 5, width: '135%', left: 57, top: 70 }}>
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 2,
                  rowGap: 3,
                  gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(4, 1fr)' },
                }}
              >
                <RHFSelect name="role" label="Role" placeholder="Role">
                  <option value="" />
                  {/* {role.map((option) => (
                                        <option key={option.label} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))} */}
                </RHFSelect>

                <RHFTextField name="name" label="Full Name" />
                <RHFTextField name="phoneNumber" label="Phone Number" />
                <RHFTextField name="companyName" label="Company Name" />
                <RHFTextField name="address" label="Address" />

                <RHFSelect name="assignEmployee" label="Assign Employee" placeholder="Assign Employee">
                  <option value="" />
                  {/* {assignEmployee.map((option) => (
                                        <option key={option.label} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))} */}
                </RHFSelect>

                <RHFTextField name="leadType" label="Lead Type" />
                <RHFTextField name="leadOrigin" label="Lead Origin" />

                <RHFSelect name="productName" label="Product Name" placeholder="Product Name">
                  <option value="" />
                  {/* {productName.map((option) => (
                                        <option key={option.label} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))} */}
                </RHFSelect>

                <RHFTextField name="valueOfLead" label="Value Of Lead" />
              </Box>

              <Stack alignItems="flex-end" sx={{ mt: 1.5 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!isEdit ? 'Create Lead' : 'Save Changes'}
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Page>
    </FormProvider>
  );
}
