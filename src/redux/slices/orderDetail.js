import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  orderDetail: [],
  viewInvoiceDetail: null,
};
const orders = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getorderDetail(state, action) {
      state.isLoading = false;
      state.orderDetail = action.payload;
    },
    getviewInvoiceDetail(state, action) {
      state.isLoading = false;
      state.orderDetail = action.payload;
    },
  },
});

export default orders.reducer;
export const { startLoading, hasError, getorderDetail, getviewInvoiceDetail } = orders.actions;
