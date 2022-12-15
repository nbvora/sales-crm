import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  customers: null,
};

const password = createSlice({
  name: 'password',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updatePasswordSuccess(state, action) {
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
  },
});

export default password.reducer;
export const { startLoading, hasError, updatePasswordSuccess } = password.actions;
