import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getorderDetail, getviewInvoiceDetail, startLoading } from '../../slices/orderDetail';
import { _userList } from '../../../_mock';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* orderDetailSaga() {
  yield put(getorderDetail(_userList));
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
    // console.log(response.data)

    yield put(getorderDetail(data));
  } catch (error) {
    console.log(error);
  }
}

export function* viewInvoiceDetailSaga() {
  yield put(getviewInvoiceDetail(_userList));
}
