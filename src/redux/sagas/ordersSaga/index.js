import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { orderDetailSaga } from './orderDeatilSaga';

export function* ordersSaga() {
  yield takeLatest(sagaActions.ORDERDETAIL_SAGA, orderDetailSaga);
}
