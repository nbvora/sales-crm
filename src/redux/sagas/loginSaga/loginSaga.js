import { put } from 'redux-saga/effects';
import Cookie from 'universal-cookie';
import axios from '../../../utils/axios';
import { setSession } from '../../../utils/jwt';
import { isLogin, isLogout, startLoading, hasError, isInitialized, isError } from '../../slices/login';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* logOut() {
  yield put(startLoading());
  try {
    const response = yield axios.post(`${BASEURL}logout`);
    if (response.data.message) {
      yield put(isLogout(response.data.message));
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');
      setSession(null);
    }
  } catch (error) {
    console.log(error);
    yield put(hasError());
  }
}

export function* signupSaga(state) {
  try {
    yield put(startLoading());
    const { email, password, remember } = state.data;
    const response = yield axios.post(`${BASEURL}login`, {
      email,
      mobile_no: null,
      password,
      device_type: '3',
      device_token: 'fghdfikjvgnsjbghj',
    });
    const { token, data, message } = response.data;
    if (message !== 'Success') {
      yield put(isError(response.data));
    }

    if (token) {
      localStorage.setItem('user', JSON.stringify(data));
      const Token = window.localStorage.setItem('token', token);
      setSession(Token);
      const cookies = new Cookie();
      if (remember) {
        cookies.set('auth-user', state.data, {
          expires: new Date(Date.now - 82800),
        });
      } else {
        cookies.remove('auth-user');
      }
      if (Token !== null) {
        yield put(isLogin(data));
      }
    }
  } catch (error) {
    console.log(error, 'error');
    yield put(hasError());
  }
}

export function* initialize() {
  try {
    const data = window.localStorage.getItem('user');
    const user = JSON.parse(data);
    yield put(isInitialized(user));
  } catch (error) {
    console.log(error);
    yield put(startLoading());
  }
}
