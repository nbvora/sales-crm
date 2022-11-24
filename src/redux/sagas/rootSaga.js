import { takeEvery } from 'redux-saga/effects';
import sagaActions from '../actions';

export function* fetchDataSaga() {
  try {
    const data = yield { name: 'harsh' };
    console.log(data);
    // let result = yield call(() =>
    //   callAPI({ url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos" })
    // );
    // yield put(fetchData(result.data));
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.INITIALIZE_SAGA, fetchDataSaga);
}
