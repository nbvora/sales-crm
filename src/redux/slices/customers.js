import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  customers: null,
};
const customers = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCustomers(state, action) {
      state.isLoading = false;
      state.customers = action.payload;
    },

    updateCustomerSuccess(state, action) {
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
    deleteCustomerSuccess(state, action) {
      const { userId } = action.payload;
      const deleteEvent = state.events.filter((event) => event.id !== userId);
      state.events = deleteEvent;
    },
    createCustomerSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },
  },
});

export default customers.reducer;
export const {
  startLoading,
  hasError,
  getCustomers,
  createCustomerSuccess,
  updateCustomerSuccess,
  deleteCustomerSuccess,
} = customers.actions;
