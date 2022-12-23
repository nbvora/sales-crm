import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { setSession } from '../../../utils/jwt';
import { isLogin, isLogout, isInitialized, isError } from '../../slices/login';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* logOut() {
  yield put(isLogout());
  window.localStorage.removeItem('token');
  setSession(null);
}

export function* signupSaga(state) {
  try {
    const { email, password } = state.data;
    // const response = yield axios.post('/api/account/login', {
    //   email,
    //   password
    const response = yield axios.post(`${BASEURL}login`, {
      email: 'admin@swarasbeverages.com',
      mobile_no: null,
      password: 'Admin@123',
      device_type: '3',
      device_token: 'fghdfikjvgnsjbghj',
    });
    const { token, user } = response.data;
    console.log(response.data);

    console.log(response);

    const Token = window.localStorage.setItem('token', token);

    setSession(Token);
    if (Token !== null) {
      yield put(isLogin(user));
    }
  } catch (error) {
    yield put(isError(error));
  }
}

export function* initialize() {
  try {
    const Token = window.localStorage.getItem('token');
    const response = yield axios.get('/api/account/my-account', {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const { user } = response.data;

    console.log(user);
    yield put(isInitialized(user));
  } catch (error) {
    console.log(error);
  }
}
