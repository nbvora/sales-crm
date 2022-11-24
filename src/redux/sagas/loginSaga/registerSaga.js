export function* signupSaga() {
  try {
    const data = yield { name: 'harsh', surname: 'limbachiya' };
    console.log(data);
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}
