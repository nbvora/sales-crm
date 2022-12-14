import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import {
  startLoading,
  hasError,
  getEmployee,
  createEmployeeSuccess,
  updateEmployeeSuccess,
  deleteEmployeeSuccess,
} from '../../slices/employee';
import { _userList } from '../../../_mock';
import { dispatch } from '../../store';

export function* employeeListSaga() {
  yield put(getEmployee(_userList));
}

export function* deleteEmployeeRowSaga(userId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/delete', { userId });
    dispatch(deleteEmployeeSuccess({ response }));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* addEmployeeListSaga(newEvent) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/new', newEvent);
    dispatch(createEmployeeSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
export function* addEmployeeTargetSaga(newEvent) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/new', newEvent);
    dispatch(createEmployeeSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* editEmployeeTargetSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updateEmployeeSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* editEmployeeListSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updateEmployeeSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
