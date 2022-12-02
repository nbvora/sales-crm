import { put } from 'redux-saga/effects';
import { getStokes } from '../../slices/dashboard';
import { _userList } from '../../../_mock';

export function* stockSaga() {
  yield put(getStokes(_userList));
}
