import { put } from 'redux-saga/effects';
import { getStokes } from '../../slices/stoklist';
import { _userList } from '../../../_mock';

export function* stokeSaga() {
  yield put(getStokes(_userList));
}
