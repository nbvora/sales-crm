import { put } from 'redux-saga/effects';
import { getleadTable, getorderTable, getdiscussionTable } from '../../slices/leadslice';
import { _userList } from '../../../_mock';

export function* leadTableSaga() {
  yield put(getleadTable(_userList));
}

export function* orderTableSaga() {
  yield put(getorderTable(_userList));
}

export function* discussionTableSaga() {
  yield put(getdiscussionTable(_userList));
}
