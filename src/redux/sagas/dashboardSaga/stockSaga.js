import { put } from 'redux-saga/effects';
import { getStokes, startLoading } from '../../slices/dashboard';
import axios from '../../../utils/axios';
import { _userList } from '../../../_mock';
import { BASEURL } from '../../../BaseUrl/BaseUrl';
import { dispatch } from '../../store';
import sagaActions from '../../actions';
// import { dispatch, useSelector } from '../../../redux/store';
// import sagaActions from '../../../redux/actions';

// export function* stockSaga() {
//   yield put(getStokes(_userList));
// }

export function* stockSaga() {
  try {
    yield put(getStokes(_userList));
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
  }
}
