import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  inventory: null,
  productCategory: null,
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
      state.inventory = action.payload;
    },
    getProductCategory(state, action) {
      state.isLoading = false;
      state.productCategory = action.payload;
    },
  },
});

export default inventory.reducer;
export const { startLoading, hasError, getProduct, getProductCategory } = inventory.actions;
