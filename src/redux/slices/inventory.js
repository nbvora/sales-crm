import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: false,
  productList: [],
  productCategory: [],
  stockManagment: [],
};
const inventory = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state) {
      state.isLoading = false;
      state.error = true;
    },
    getProduct(state, action) {
      state.isLoading = false;
      state.productList = action.payload;
      state.error = false;
    },
    getProductCategory(state, action) {
      state.isLoading = false;
      state.productCategory = action.payload;
      state.error = false;
    },
    getStockManagmant(state, action) {
      state.isLoading = false;
      state.stockManagment = action.payload;
      state.error = false;
    },
  },
});

export default inventory.reducer;
export const { startLoading, hasError, getProduct, getProductCategory, getStockManagmant } = inventory.actions;
