import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { startLoading, hasError, updatePasswordSuccess } from '../../slices/changepassword';
import { _userList } from '../../../_mock';
import { dispatch } from '../../store';

export function* updatePasswordSaga(eventId) {
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(updatePasswordSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
