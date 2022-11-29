export function* signinSaga() {
  try {
    const data = yield { name: 'harsh' };
    console.log(data);
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* signupSaga() {
  try {
    const data = yield { name: 'harsh', surname: 'limbachiya' };
    console.log(data);
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* resetPasswordSaga(resetData) {
  try {
    const data = yield { email: resetData };
    console.log(data);
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}
