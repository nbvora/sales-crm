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
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* leadTableSaga() {
  // yield put(getleadTable(_userList));
  try {
    yield put(startLoading());
    const Token = window.localStorage.getItem('token');
    const response = yield axios.post(
      `${BASEURL}assign-employee`,
      {},
      {
        headers: {
          authToken: `${Token}`,
        },
      }
    );
    const { data } = response.data;

    yield put(getleadTable(data));
  } catch (error) {
    yield put(hasError());
    console.log(error);
  }
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
