import { put } from 'redux-saga/effects';
// import axios from '../../../utils/axios';
// import { BASEURL } from '../../../BaseUrl/BaseUrl';
import { getStockManagmant } from '../../slices/inventory';

export function* inventoryStockManagmentSaga() {
  yield put(getStockManagmant([]));
}
