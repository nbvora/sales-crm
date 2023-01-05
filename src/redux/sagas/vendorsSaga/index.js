import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { vendorsListSaga, addVendorSaga, DeleteVendorRowSaga, editVendorSaga } from './vendorsListSaga';

export function* vendorsSaga() {
  yield takeLatest(sagaActions.GET_VENDORS, vendorsListSaga);
  yield takeLatest(sagaActions.ADD_VENDORS, addVendorSaga);
  yield takeLatest(sagaActions.DELETE_VENDORS, DeleteVendorRowSaga);
  yield takeLatest(sagaActions.EDIT_VENDORS, editVendorSaga);
}
