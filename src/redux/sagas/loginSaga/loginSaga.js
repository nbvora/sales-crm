import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { setSession } from '../../../utils/jwt';
import { isLogin, isLogout, isInitialized, isError } from '../../slices/login';

export function* logOut() {
  yield put(isLogout());
  window.localStorage.removeItem('token');
  setSession(null);
}

export function* signupSaga(state) {
  try {
    const { email, password } = state.data;
    const response = yield axios.post('/api/account/login', {
      email,
      password,
    });
    const { accessToken, user } = response.data;

    const Token = window.localStorage.setItem('token', accessToken);

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
    yield put(isInitialized(user));
  } catch (error) {
    console.log(error);
  }
}
