import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { invoiceListSaga, addInvoiceSaga, deleteInvoiceRowSaga, editInvoiceSaga } from './invoiceListSaga';

export function* invoiceSaga() {
  yield takeLatest(sagaActions.GET_INVOICE, invoiceListSaga);
  yield takeLatest(sagaActions.ADD_INVOICE, addInvoiceSaga);
  yield takeLatest(sagaActions.DELETE_INVOICE, deleteInvoiceRowSaga);
  yield takeLatest(sagaActions.EDIT_INVOICE, editInvoiceSaga);
}
