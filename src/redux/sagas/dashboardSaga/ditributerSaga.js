import { put } from 'redux-saga/effects';
import { getDistributor } from '../../slices/dashboard';

export function* distributerSaga() {
  yield put(getDistributor([]));
}
