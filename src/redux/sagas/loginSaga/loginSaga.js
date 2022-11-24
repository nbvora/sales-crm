export function* signinSaga() {
  try {
    const data = yield { name: 'harsh' };
    console.log(data);
  } catch (e) {
    // yield put({ type: "TODO_FETCH_FAILED" });
  }
}
