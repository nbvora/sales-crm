import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { orderDetailSaga, viewInvoiceDetailSaga } from './orderDeatilSaga';

export function* ordersSaga() {
  yield takeLatest(sagaActions.ORDERDETAIL_SAGA, orderDetailSaga);
  yield takeLatest(sagaActions.VIEWINVOICEDETAIL_SAGA, viewInvoiceDetailSaga);
}
