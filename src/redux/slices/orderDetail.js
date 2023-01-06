import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: false,
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
    hasError(state) {
      state.isLoading = false;
      state.error = true;
    },
    getorderDetail(state, action) {
      state.isLoading = false;
      state.orderDetail = action.payload;
      state.error = false;
    },
    getviewInvoiceDetail(state, action) {
      state.isLoading = false;
      state.orderDetail = action.payload;
    },
  },
});

export default orders.reducer;
export const { startLoading, hasError, getorderDetail, getviewInvoiceDetail } = orders.actions;
