import { put } from 'redux-saga/effects';
import { getorderDetail } from '../../slices/orderDetail';
import { _userList } from '../../../_mock';

export function* orderDetailSaga() {
  yield put(getorderDetail(_userList));
}
