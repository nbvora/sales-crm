import { put } from 'redux-saga/effects';
import { getStokes, startLoading, hasError } from '../../slices/dashboard';
import axios from '../../../utils/axios';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* stockSaga() {
  try {
    yield put(startLoading());
    const Token = window.localStorage.getItem('token');
    const response = yield axios.get(`${BASEURL}dashboard`, {
      headers: {
        authToken: `${Token}`,
      },
    });

    const { userRoles } = response.data.data;
    yield put(getStokes(userRoles));

    // yield dispatch({ type: sagaActions.GET_STOCKES });
  } catch (error) {
    console.log(error);
    yield put(hasError());
  }
}
