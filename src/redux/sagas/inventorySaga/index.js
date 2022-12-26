import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/index';
import { inventoryProductListSaga } from './productListSaga';
import { inventoryProductCategorySaga } from './productCategorySaga';

export function* inventorySaga() {
  yield takeLatest(sagaActions.GET_PRODUCT, inventoryProductListSaga);
  yield takeLatest(sagaActions.GET_PRODUCT_CATEGORY, inventoryProductCategorySaga);
}
