import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { setSession } from '../../../utils/jwt';
import { getCustomers } from '../../slices/customers';
import { _userList } from '../../../_mock';

export function* customerListSaga() {
  yield put(getCustomers(_userList));
}

export function* DeleteCustomerRowSaga(state) {
  console.log(state, 'DeleteCustomerRowSaga');

  try {
    const response = yield axios.delete('/api/for delete customer', {
      state,
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* addCustomerSaga(state) {
  console.log(state, 'addCustomerSaga');

  try {
    const response = yield axios.post('/api/for add customer', {
      state,
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* EditCustomerSaga(state) {
  console.log(state, 'EditCustomerSaga');

  try {
    const response = yield axios.put('/api/for update customer', {
      state,
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
}
