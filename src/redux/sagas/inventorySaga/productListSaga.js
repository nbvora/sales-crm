import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getProduct, startLoading, hasError } from '../../slices/inventory';
import { BASEURL } from '../../../BaseUrl/BaseUrl';

export function* inventoryProductListSaga() {
  try {
    yield put(startLoading());
    const Token = window.localStorage.getItem('token');
    const response = yield axios.get(`${BASEURL}user-list`, {
      headers: {
        authToken: `${Token}`,
      },
    });
    const { products } = response.data.data;

    yield put(getProduct(products));
  } catch (error) {
    yield put(hasError());
    console.log(error);
  }
}
