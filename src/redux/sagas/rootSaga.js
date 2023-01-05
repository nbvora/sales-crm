import { all, spawn, call } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { leadsSaga } from './leadsSaga';
import { dashboardSaga } from './dashboardSaga';
import { employeeSaga } from './employeeSaga';
import { vendorsSaga } from './vendorsSaga';
import { invoiceSaga } from './invoiceSaga';
import { ordersSaga } from './ordersSaga';
import { customerSaga } from './customerSaga';
import { changePasswordSaga } from './changePasswordSaga';
import { uploadSaga } from './uploadFileSaga';
import { inventorySaga } from './inventorySaga';

// eslint-disable-next-line
export default function* rootSaga() {
  const sagas = [
    loginSaga,
    dashboardSaga,
    vendorsSaga,
    customerSaga,
    employeeSaga,
    invoiceSaga,
    uploadSaga,
    changePasswordSaga,
    leadsSaga,
    ordersSaga,
    inventorySaga,
  ];
  yield all(
    sagas.map((saga) =>
      // eslint-disable-next-line
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.debug(e);
          }
        }
      })
    )
  );
}
