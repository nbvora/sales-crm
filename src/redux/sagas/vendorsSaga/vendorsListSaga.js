import { put } from 'redux-saga/effects';
import { getVendors } from '../../slices/vendors';
import { _userList } from '../../../_mock';

export function* vendorsListSaga() {
  yield put(getVendors(_userList));
}
