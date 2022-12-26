import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getorderDetail, getviewInvoiceDetail, startLoading, hasError } from '../../slices/orderDetail';
import { _userList } from '../../../_mock';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* orderDetailSaga() {
  try {
    yield put(startLoading());
    const Token = window.localStorage.getItem('token');
    const response = yield axios.post(
      `${BASEURL}order-list?month=12-2022`,
      {},
      {
        headers: {
          authToken: `${Token}`,
        },
      }
    );
    const { data } = response.data;

    yield put(getorderDetail(data));
  } catch (error) {
    yield put(hasError());
    console.log(error);
  }
}

export function* viewInvoiceDetailSaga() {
  // yield put(getviewInvoiceDetail(_userList));
}
