import { put } from 'redux-saga/effects';
import { getorderDetail, getviewInvoiceDetail } from '../../slices/orderDetail';
import { _userList } from '../../../_mock';

export function* orderDetailSaga() {
  yield put(getorderDetail(_userList));
}

export function* viewInvoiceDetailSaga() {
  yield put(getviewInvoiceDetail(_userList));
}
