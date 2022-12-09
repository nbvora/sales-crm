import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  vendors: null,
};
const vendors = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getVendors(state, action) {
      state.isLoading = false;
      state.vendors = action.payload;
    },
  },
});

export default vendors.reducer;
export const { startLoading, hasError, getVendors } = vendors.actions;
