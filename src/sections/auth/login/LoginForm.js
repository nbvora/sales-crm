/* eslint-disable import/no-unresolved */
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { dispatch, useSelector } from 'src/redux/store';
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';

import sagaActions from '../../../redux/actions';
// components
import Iconify from '../../../components/Iconify';
import Tostify from '../../../components/Tostify';
import LoadingScreen from '../../../components/LoadingScreen';

import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const { invalidCredential, user, error, isLoading } = useSelector((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const cookies = new Cookie();
  const userDetail = cookies.get('auth-user');

  useEffect(() => {
    const Token = window.localStorage.getItem('token');
    if (Token) {
      navigate(PATH_DASHBOARD.general.app, { replace: true });
    }
  }, [user, navigate]);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: userDetail?.email || '',
    password: userDetail?.password || '',
    remember: userDetail?.remember || false,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = (data) => {
    dispatch({ type: sagaActions.SIGNUP_SAGA, data });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Tostify status={error} />
          <Stack spacing={3}>
            {!!invalidCredential && invalidCredential?.status === 0 && (
              <Alert severity="error">{invalidCredential.message}</Alert>
            )}

            <RHFTextField name="email" label="Email address" />

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <RHFCheckbox name="remember" label="Remember me" />
            <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Login
          </LoadingButton>
        </FormProvider>
      )}
    </>
  );
}
