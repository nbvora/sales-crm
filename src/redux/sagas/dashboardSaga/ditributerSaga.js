import { put } from 'redux-saga/effects';
import { getDistributor } from '../../slices/stoklist';
import { _userList } from '../../../_mock';

export function* distributerSaga() {
  yield put(getDistributor(_userList));
}
