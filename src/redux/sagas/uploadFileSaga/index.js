import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { uploadFileSaga } from './uploadFileSaga';

export function* uploadSaga() {
  yield takeLatest(sagaActions.UPLOAD_FILE, uploadFileSaga);
}
