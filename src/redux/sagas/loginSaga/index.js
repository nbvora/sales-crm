import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { logOut, signupSaga, initialize } from './loginSaga';

export function* loginSaga() {
  yield takeLatest(sagaActions.LOG_OUT, logOut);
  yield takeLatest(sagaActions.SIGNUP_SAGA, signupSaga);
  yield takeLatest(sagaActions.INTIALIZED, initialize);
}
