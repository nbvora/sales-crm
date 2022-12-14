import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import {
  startLoading,
  hasError,
  getInvoice,
  createInvoiceSuccess,
  updateInvoiceSuccess,
  deleteInvoiceSuccess,
} from '../../slices/invoice';
import { _userList } from '../../../_mock';
import { dispatch } from '../../store';

export function* invoiceListSaga() {
  yield put(getInvoice(_userList));
}

export function* deleteInvoiceRowSaga(userId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/delete', { userId });
    dispatch(deleteInvoiceSuccess({ response }));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* addInvoiceSaga(newEvent) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/new', newEvent);
    dispatch(createInvoiceSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* editInvoiceSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updateInvoiceSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
