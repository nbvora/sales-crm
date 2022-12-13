import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import {
  employeeListSaga,
  addEmployeeSaga,
  deleteEmployeeRowSaga,
  editEmployeeTargetSaga,
  editEmployeeListSaga,
} from './employeeListSaga';

export function* employeeSaga() {
  yield takeLatest(sagaActions.GET_EMPLOYEE, employeeListSaga);
  yield takeLatest(sagaActions.ADD_EMPLOYEE, addEmployeeSaga);
  yield takeLatest(sagaActions.DELETE_EMPLOYEE_TARGET, deleteEmployeeRowSaga);
  yield takeLatest(sagaActions.DELETE_EMPLOYEE_LIST, deleteEmployeeRowSaga);
  yield takeLatest(sagaActions.EDIT_EMPLOYEE_TARGET, editEmployeeTargetSaga);
  yield takeLatest(sagaActions.EDIT_EMPLOYEE_LIST, editEmployeeTargetSaga);
}
