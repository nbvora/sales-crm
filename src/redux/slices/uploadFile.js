import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  uploadFile: null,
};

const uploadFile = createSlice({
  name: 'uploadFile',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    uploadFileSuccess(state, action) {
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

export default uploadFile.reducer;
export const { startLoading, hasError, uploadFileSuccess } = uploadFile.actions;
