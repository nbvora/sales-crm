import axios from '../../../utils/axios';
import { startLoading, hasError, uploadFileSuccess } from '../../slices/uploadFile';
import { dispatch } from '../../store';

export function* uploadFileSaga(eventId) {
  console.log(eventId);
  dispatch(startLoading());
  try {
    const response = yield axios.post('/api/calendar/events/update', {
      eventId,
    });
    dispatch(uploadFileSuccess(response.data.event));
  } catch (error) {
    dispatch(hasError(error));
  }
}
