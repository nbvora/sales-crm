import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  leadTable: null,
  orderTable: null,
  discussionTable: null,
};
const leads = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getleadTable(state, action) {
      state.isLoading = false;
      state.leadTable = action.payload;
    },
    getorderTable(state, action) {
      state.isLoading = false;
      state.orderTable = action.payload;
    },
    getdiscussionTable(state, action) {
      state.isLoading = false;
      state.discussionTable = action.payload;
    },
  },
});

export default leads.reducer;
export const { startLoading, hasError, getleadTable, getorderTable, getdiscussionTable } = leads.actions;
