import { all, spawn, call } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { leadsSaga } from './leadsSaga';
// eslint-disable-next-line
export default function* rootSaga() {
  const sagas = [loginSaga, leadsSaga];
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
