import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import {
  startLoading,
  hasError,
  getVendors,
  updateVendorSuccess,
  createVendorSuccess,
  deleteVendorSuccess,
} from '../../slices/vendors';
import { _userList } from '../../../_mock';
import { dispatch } from '../../store';

export function* vendorsListSaga() {
  yield put(getVendors(_userList));
}

export function* DeleteVendorRowSaga(userId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/delete', { userId });
    dispatch(deleteVendorSuccess({ response }));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* addVendorSaga(newEvent) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/new', newEvent);
    dispatch(createVendorSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* editVendorSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updateVendorSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
