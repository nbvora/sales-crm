import * as Yup from 'yup';
import { useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
// utils
import { dispatch, useSelector } from '../../../redux/store';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import LoadingScreen from '../../../components/LoadingScreen';

// ----------------------------------------------------------------------

export default function CategoryForm() {
  const { productCategory } = useSelector((state) => state.inventory);
  const { id = '' } = useParams();
  const index = Number(id);
  useEffect(() => {
    const headerDetail = [
      { title: 'ProductCategory', path: PATH_DASHBOARD.inventory.productcategory },
      { title: !id ? 'Add' : 'Edit', path: null },
    ];
    const title = 'Inventory-Mangment';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, [id]);
  const currentUser = productCategory.find((user) => user.id === index);
  const isEdit = currentUser && true;

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.category_name || '',
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

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.user.productcategory);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {productCategory.length === 0 ? (
        <LoadingScreen />
      ) : (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 3,
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                  }}
                >
                  <Typography variant="h4" sx={{ margin: 0 }} gutterBottom>
                    Add New Category
                  </Typography>
                  <RHFTextField name="name" label="Category Name" />
                </Box>

                <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    component={RouterLink}
                    to={`${PATH_DASHBOARD.inventory.productcategory}`}
                  >
                    Cancel
                  </LoadingButton>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    {!isEdit ? 'ADD' : 'Edit'}
                  </LoadingButton>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </FormProvider>
      )}
    </>
  );
}
