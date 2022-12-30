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
// utils
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { _userList } from '../../../_mock';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

// ----------------------------------------------------------------------

export default function EmployeeTargetForm() {
  const { id = '' } = useParams();
  useEffect(() => {
    const headerDetail = [
      { title: 'EmployeeTarget', path: PATH_DASHBOARD.employee.employeetarget },
      { title: !id ? 'Add' : 'Edit', path: null },
    ];

    const title = 'Employee';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, [id]);

  const currentUser = _userList.find((user) => paramCase(user.id) === id);
  const isEdit = currentUser && true;

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    assignTo: Yup.string().required('Assign To is required'),
    assignBy: Yup.string().required('Assign By is required'),
    desingnation: Yup.string().required('Desingnation is required'),
    month: Yup.string().required('Month is required'),
    targetAmmount: Yup.string().required('Target Ammount is required'),
  });

  const defaultValues = useMemo(
    () => ({
      assignTo: currentUser?.name || '',
      assignBy: currentUser?.email || '',
      desingnation: currentUser?.phoneNumber || '',
      month: currentUser?.address || '',
      targetAmmount: currentUser?.country || '',
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
        dispatch({ type: sagaActions.EDIT_EMPLOYEE_TARGET, data });
      } else {
        dispatch({ type: sagaActions.ADD_EMPLOYEE_TARGET, data });
      }
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.employee.employeetarget);
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
              <RHFTextField name="assignBy" label="Designation" />
              <RHFTextField name="assignTo" label="Employees" />
              <RHFTextField name="desingnation" label="Target Ammount" />
              <RHFTextField name="month" label="Month" />
            </Box>

            <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                component={RouterLink}
                to={`${PATH_DASHBOARD.employee.employeetarget}`}
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
