import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getVendors } from '../../slices/vendors';
import { _userList } from '../../../_mock';

export function* vendorsListSaga() {
  yield put(getVendors(_userList));
}

export function* DeleteVendorRowSaga(state) {
  console.log(state, 'DeleteVendorRowSaga');

  try {
    const response = yield axios.delete('/api/for delete customer', {
      state,
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* addVendorSaga(state) {
  console.log(state, 'addVendorSaga');

  try {
    const response = yield axios.post('/api/for add VENDORS', {
      state,
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* editVendorSaga(state) {
  console.log(state, 'editVendorSaga');

  try {
    const response = yield axios.put('/api/for update VENDORS', {
      state,
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
}
