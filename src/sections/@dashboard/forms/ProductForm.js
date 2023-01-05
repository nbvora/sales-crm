import * as Yup from 'yup';
import { useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import { dispatch, useSelector } from '../../../redux/store';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';
// _mock
import { countries } from '../../../_mock';
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function ProductForm() {
  const { productList } = useSelector((state) => state.inventory);
  const { id = '' } = useParams();
  const index = Number(id);
  useEffect(() => {
    const headerDetail = [
      { title: 'ProductList', path: PATH_DASHBOARD.inventory.productlist },
      { title: !id ? 'Add' : 'Edit', path: null },
    ];
    const title = 'Inventody-Managment';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, [id]);

  const currentUser = productList.find((user) => user.id === index);
  const isEdit = currentUser && true;

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('product_name is required'),
    phoneNumber: Yup.string().required('dealer_destributor is required'),
    email: Yup.string().required('mrp is required'),
    state: Yup.string().required('super_stockist is required'),
    city: Yup.string().required('product_hsncode is required'),
    country: Yup.string().required('country is required'),
    address: Yup.string().required('cartoon_size is required'),
    company: Yup.string().required('Company is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.product_name || '',
      email: currentUser?.mrp || '',
      phoneNumber: currentUser?.dealer_destributor || '',
      address: currentUser?.cartoon_size || '',
      country: currentUser?.country || '',
      state: currentUser?.super_stockist || '',
      city: currentUser?.product_hsncode || '',
      zipCode: currentUser?.zipCode || '',
      avatarUrl: currentUser?.avatarUrl || '',
      isVerified: currentUser?.isVerified || true,
      status: currentUser?.status,
      company: currentUser?.company || '',
      role: currentUser?.role || '',
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
      navigate(PATH_DASHBOARD.inventory.productlist);
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
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Product Name" />
              <RHFTextField name="phoneNumber" label="MRP" />
              <RHFTextField name="email" label="Dealer/Distributor Price" />
              <RHFTextField name="state" label="SuperStockist Price" />
              <RHFTextField name="city" label="Product HSN Code " />

              <RHFSelect name="country" label="Product Category" placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>

              <RHFTextField name="address" label="Product Cartoon Size" />
              <RHFTextField name="company" label="Product Stock " />
            </Box>

            <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                component={RouterLink}
                to={`${PATH_DASHBOARD.inventory.productlist}`}
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
  );
}
