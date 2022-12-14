import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import {
  leadTableSaga,
  orderTableSaga,
  discussionTableSaga,
  editLeadSaga,
  addLeadSaga,
  deleteLeadRowSaga,
} from './leadTableSaga';

export function* leadsSaga() {
  yield takeLatest(sagaActions.LEADTABLE_SAGA, leadTableSaga);
  yield takeLatest(sagaActions.ORDERTABLE_SAGA, orderTableSaga);
  yield takeLatest(sagaActions.DISCUSSIONTABLE_SAGA, discussionTableSaga);
  yield takeLatest(sagaActions.EDIT_LEAD, editLeadSaga);
  yield takeLatest(sagaActions.ADD_LEAD, addLeadSaga);
  yield takeLatest(sagaActions.DELETE_LEAD, deleteLeadRowSaga);
}
