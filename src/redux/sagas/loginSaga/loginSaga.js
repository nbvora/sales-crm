import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { isLogin, isLogout } from '../../slices/login';
import { setSession } from '../../../utils/jwt';

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
    console.log(error);
  }
}
