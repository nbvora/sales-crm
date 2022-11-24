import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { signinSaga, signupSaga } from './loginSaga';

export function* loginSaga() {
  yield takeLatest(sagaActions.INITIALIZE_SAGA, signinSaga);
  yield takeLatest(sagaActions.SIGNUP_SAGA, signupSaga);
}
