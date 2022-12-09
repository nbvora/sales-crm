import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { vendorsListSaga } from './vendorsListSaga';
import { stockSaga } from '../dashboardSaga/stockSaga';

export function* vendorsSaga() {
  yield takeLatest(sagaActions.GET_VENDORS, vendorsListSaga);
}
