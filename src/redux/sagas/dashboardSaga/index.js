import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { stockSaga } from './stockSaga';
import { distributerSaga } from './ditributerSaga';

export function* dashboardSaga() {
  yield takeLatest(sagaActions.GET_STOCKES, stockSaga);
  yield takeLatest(sagaActions.GET_DISTRIBUTERS, distributerSaga);
}
