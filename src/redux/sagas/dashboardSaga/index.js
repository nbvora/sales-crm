import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { stokeSaga } from './stokeSaga';
import { distributerSaga } from './ditributerSaga';

export function* dashboardSaga() {
  yield takeLatest(sagaActions.GET_STOKES, stokeSaga);
  yield takeLatest(sagaActions.GET_DISTRIBUTERS, distributerSaga);
}
