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
    updateVendorSuccess(state, action) {
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
    deleteVendorSuccess(state, action) {
      const { userId } = action.payload;
      const deleteEvent = state.events.filter((event) => event.id !== userId);
      state.events = deleteEvent;
    },
    createVendorSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },
  },
});

export default vendors.reducer;
export const { startLoading, hasError, getVendors, updateVendorSuccess, createVendorSuccess, deleteVendorSuccess } =
  vendors.actions;
