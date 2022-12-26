import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { setSession } from '../../../utils/jwt';
import { isLogin, isLogout, isInitialized, isError } from '../../slices/login';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* logOut() {
  const response = yield axios.post(`${BASEURL}logout`);
  if (response.data.message) {
    yield put(isLogout());
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    setSession(null);
  }
}

export function* signupSaga(state) {
  try {
    const { email, password } = state.data;
    const response = yield axios.post(`${BASEURL}login`, {
      email,
      mobile_no: null,
      password,
      device_type: '3',
      device_token: 'fghdfikjvgnsjbghj',
    });
    const { token, data } = response.data;
    localStorage.setItem('user', JSON.stringify(data));
    const Token = window.localStorage.setItem('token', token);

    setSession(Token);
    if (Token !== null) {
      yield put(isLogin(data));
    }
  } catch (error) {
    yield put(isError(error));
  }
}

export function* initialize() {
  try {
    const data = window.localStorage.getItem('user');
    const user = JSON.parse(data);
    yield put(isInitialized(user));
  } catch (error) {
    console.log(error);
  }
}
