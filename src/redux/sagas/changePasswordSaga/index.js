import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { updatePasswordSaga } from './changePasswordSaga';

export function* changePasswordSaga() {
  yield takeLatest(sagaActions.CHANGE_PASSWORD, updatePasswordSaga);
}
