import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getInvoice } from '../../slices/invoice';
import { _userList } from '../../../_mock';

export function* invoiceListSaga() {
  yield put(getInvoice(_userList));
}

export function* deleteInvoiceRowSaga(state) {
  console.log(state, 'DeleteEmployeeRowSaga');

  try {
    const response = yield axios.delete('/api/for delete employee', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* addInvoiceSaga(state) {
  console.log(state, 'dsdsdsd');

  try {
    const response = yield axios.post('/api/for add invoice', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* editInvoiceSaga(state) {
  console.log(state, 'editInvoiceSaga');

  try {
    const response = yield axios.put('/api/for update invoice', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
