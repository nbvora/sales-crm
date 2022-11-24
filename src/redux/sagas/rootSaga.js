import { all, spawn, call } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';

export default function* rootSaga() {
  const sagas = [loginSaga];
  yield all(
    sagas.map((saga) =>
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
