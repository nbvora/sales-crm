import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';

export function* loginSaga() {
  yield takeLatest(sagaActions.INITIALIZE_SAGA);
}
