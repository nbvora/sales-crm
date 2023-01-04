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
import { Box, Card, Grid, Stack } from '@mui/material';
// redux
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { _userList } from '../../../_mock';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

// ----------------------------------------------------------------------

export default function CustomerForm() {
  const { id = '' } = useParams();
  const currentUser = _userList.find((user) => paramCase(user.id) === id);
  useEffect(() => {
    const headerDetail = [
      { title: 'CustomerList', path: PATH_DASHBOARD.general.customer },
      { title: !id ? 'Add' : 'Edit', path: null },
    ];
    const title = 'Customers';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, [id]);
  const isEdit = currentUser && true;

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    role: Yup.string().required('Role Number is required'),
    company: Yup.string().required('Company is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    state: Yup.string().required('State is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.name || '',
      phoneNumber: currentUser?.phoneNumber || '',
      state: currentUser?.state || '',
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
        dispatch({ type: sagaActions.EDIT_CUSTOMERS, data });
      } else {
        dispatch({ type: sagaActions.ADD_CUSTOMERS, data });
      }
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.general.customer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="First Name" />
              <RHFTextField name="state" label="Last Name" />
              <RHFTextField name="phoneNumber" label="Mobile Number" />
              <RHFTextField name="name" label="Address" />
              <RHFTextField name="company" label="Password" />
              <RHFTextField name="role" label="Confirm Password" />
            </Box>

            <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                component={RouterLink}
                to={`${PATH_DASHBOARD.general.customer}`}
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
