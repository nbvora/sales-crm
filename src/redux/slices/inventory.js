import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
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
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getProduct(state, action) {
      state.isLoading = false;
      state.productList = action.payload;
    },
    getProductCategory(state, action) {
      state.isLoading = false;
      state.productCategory = action.payload;
    },
    getStockManagmant(state, action) {
      state.isLoading = false;
      state.stockManagment = action.payload;
    },
  },
});

export default inventory.reducer;
export const { startLoading, hasError, getProduct, getProductCategory, getStockManagmant } = inventory.actions;
