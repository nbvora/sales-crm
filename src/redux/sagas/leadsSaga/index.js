import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { leadTableSaga, orderTableSaga, discussionTableSaga } from './leadTableSaga';

export function* leadsSaga() {
  yield takeLatest(sagaActions.LEADTABLE_SAGA, leadTableSaga);
  yield takeLatest(sagaActions.ORDERTABLE_SAGA, orderTableSaga);
  yield takeLatest(sagaActions.DISCUSSIONTABLE_SAGA, discussionTableSaga);
}
