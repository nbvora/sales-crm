import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import {
  startLoading,
  hasError,
  getCustomers,
  createCustomerSuccess,
  updateCustomerSuccess,
  deleteCustomerSuccess,
} from '../../slices/customers';
import { dispatch } from '../../store';

export function* customerListSaga() {
  yield put(getCustomers([]));
}

export function* DeleteCustomerRowSaga(userId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/delete', { userId });
    dispatch(deleteCustomerSuccess({ response }));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* addCustomerSaga(newEvent) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/new', newEvent);
    dispatch(createCustomerSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* EditCustomerSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updateCustomerSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
