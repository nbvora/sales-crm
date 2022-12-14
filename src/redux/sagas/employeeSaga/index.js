import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import {
  employeeListSaga,
  addEmployeeTargetSaga,
  addEmployeeListSaga,
  deleteEmployeeRowSaga,
  editEmployeeTargetSaga,
  editEmployeeListSaga,
} from './employeeListSaga';

export function* employeeSaga() {
  yield takeLatest(sagaActions.GET_EMPLOYEE, employeeListSaga);

  yield takeLatest(sagaActions.ADD_EMPLOYEE_LIST, addEmployeeListSaga);
  yield takeLatest(sagaActions.ADD_EMPLOYEE_TARGET, addEmployeeTargetSaga);

  yield takeLatest(sagaActions.EDIT_EMPLOYEE_LIST, editEmployeeListSaga);
  yield takeLatest(sagaActions.EDIT_EMPLOYEE_TARGET, editEmployeeTargetSaga);

  yield takeLatest(sagaActions.DELETE_EMPLOYEE_LIST, deleteEmployeeRowSaga);
  yield takeLatest(sagaActions.DELETE_EMPLOYEE_TARGET, deleteEmployeeRowSaga);
}
