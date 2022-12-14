import { put } from 'redux-saga/effects';
import {
  startLoading,
  hasError,
  getleadTable,
  getorderTable,
  getdiscussionTable,
  updateLeadSuccess,
  createLeadSuccess,
  deleteLeadSuccess,
} from '../../slices/leadslice';
import { _userList } from '../../../_mock';
import { dispatch } from '../../store';
import axios from '../../../utils/axios';

export function* leadTableSaga() {
  yield put(getleadTable(_userList));
}

export function* orderTableSaga() {
  yield put(getorderTable(_userList));
}

export function* discussionTableSaga() {
  yield put(getdiscussionTable(_userList));
}

export function* editLeadSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updateLeadSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* deleteLeadRowSaga(userId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/delete', { userId });
    dispatch(deleteLeadSuccess({ response }));
  } catch (error) {
    dispatch(hasError(error));
  }
}

export function* addLeadSaga(newEvent) {
  console.log(newEvent);
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/new', newEvent);
    dispatch(createLeadSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
