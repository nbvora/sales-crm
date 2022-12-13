import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { customerListSaga, addCustomerSaga, DeleteCustomerRowSaga, EditCustomerSaga } from './customerListSaga';

export function* customerSaga() {
  yield takeLatest(sagaActions.GET_CUSTOMERS, customerListSaga);
  yield takeLatest(sagaActions.ADD_CUSTOMERS, addCustomerSaga);
  yield takeLatest(sagaActions.DELETE_CUSTOMERS, DeleteCustomerRowSaga);
  yield takeLatest(sagaActions.EDIT_CUSTOMERS, EditCustomerSaga);
}
