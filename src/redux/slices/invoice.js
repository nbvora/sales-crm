import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  invoice: null,
};
const invoice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getInvoice(state, action) {
      state.isLoading = false;
      state.invoice = action.payload;
    },
    updateInvoiceSuccess(state, action) {
      const event = action.payload;
      const updateEvent = state.events.map((_event) => {
        if (_event.id === event.id) {
          return event;
        }
        return _event;
      });

      state.isLoading = false;
      state.events = updateEvent;
    },
    deleteInvoiceSuccess(state, action) {
      const { userId } = action.payload;
      const deleteEvent = state.events.filter((event) => event.id !== userId);
      state.events = deleteEvent;
    },
    createInvoiceSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },
  },
});

export default invoice.reducer;
export const { startLoading, hasError, getInvoice, createInvoiceSuccess, updateInvoiceSuccess, deleteInvoiceSuccess } =
  invoice.actions;
