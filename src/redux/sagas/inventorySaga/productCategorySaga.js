import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getProductCategory, startLoading, hasError } from '../../slices/inventory';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* inventoryProductCategorySaga() {
  try {
    yield put(startLoading());
    const Token = window.localStorage.getItem('token');
    const response = yield axios.post(
      `${BASEURL}stock-detail`,
      {},
      {
        headers: {
          authToken: `${Token}`,
        },
      }
    );
    const { data } = response.data;

    yield put(getProductCategory(data));
  } catch (error) {
    yield put(hasError());
    console.log(error);
  }
}
