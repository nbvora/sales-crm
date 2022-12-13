import { put } from 'redux-saga/effects';
import axios from '../../../utils/axios';
import { getEmployee } from '../../slices/employee';
import { _userList } from '../../../_mock';

export function* employeeListSaga() {
  yield put(getEmployee(_userList));
}

export function* deleteEmployeeRowSaga(state) {
  console.log(state, 'DeleteEmployeeRowSaga');

  try {
    const response = yield axios.delete('/api/for delete employee', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* addEmployeeSaga(state) {
  console.log(state, 'dsdsdsd');

  try {
    const response = yield axios.post('/api/for add EMPLOYEE', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* editEmployeeTargetSaga(state) {
  console.log(state, 'editEmployeeTargetSaga');

  try {
    const response = yield axios.put('/api/for add EMPLOYEE', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* editEmployeeListSaga(state) {
  console.log(state, 'editEmployeeTargetSaga');

  try {
    const response = yield axios.put('/api/for add EMPLOYEE', {
      state,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
