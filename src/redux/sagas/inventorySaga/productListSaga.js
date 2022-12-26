import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getProduct, startLoading } from '../../slices/inventory';
import { _userList } from '../../../_mock';
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
    console.log(error);
  }
}
