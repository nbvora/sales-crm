import { useState, useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { paramCase } from 'change-case';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import { dispatch } from '../../../redux/store';
// _mock
import { countries, _userList } from '../../../_mock';
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

// ----------------------------------------------------------------------

export default function StockForm() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [list, setList] = useState([{ stock: '', productName: '' }]);
  useEffect(() => {
    const headerDetail = [
      { title: 'StockList', path: PATH_DASHBOARD.inventory.stockmanagement },
      { title: 'Add', path: null },
    ];
    const title = 'Inventory-Managment';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);

  const addRows = () => {
    setList([...list, { stock: '', productName: '' }]);
  };

  const currentUser = _userList.find((user) => paramCase(user.id) === id);

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    country: Yup.string().required('Country is required'),
    company: Yup.string().required('Product Stock is required'),
  });

  const defaultValues = useMemo(
    () => ({
      country: currentUser?.country || '',
      company: currentUser?.company || '',
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

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar('Create success!');
      navigate(PATH_DASHBOARD.inventory.stockmanagement);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (index, event) => {
    const values = [...list];
    values[index][event.target.name] = event.target.value;
    setList(values);
  };

  const handleDeleteRow = (id) => {
    const filteItem = list.filter((item, index) => index !== id);
    setList(filteItem);
    console.log(filteItem);
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
              <RHFSelect name="country" label="Country" placeholder="Product Name">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="company" label="Product Stock" />

              <Box style={{ marginTop: '15px' }}>
                <AddCircleIcon onClick={addRows} />
              </Box>
            </Box>

            {list?.map((item, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    my: 3,
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 3,
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
                  }}
                >
                  <RHFSelect name="country" label="Country" placeholder="Product Name">
                    <option value="" />
                    {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </RHFSelect>
                  <TextField
                    name="stock"
                    value={item.stock}
                    label="Product Stock"
                    onChange={(event) => handleChange(index, event)}
                  />
                  <RemoveIcon style={{ marginTop: '15px' }} onClick={() => handleDeleteRow(index)} />
                </Box>
              </Box>
            ))}

            <Stack alignItems="flex-end" direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                component={RouterLink}
                to={`${PATH_DASHBOARD.inventory.stockmanagement}`}
              >
                Cancel
              </LoadingButton>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Add
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
