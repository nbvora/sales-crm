import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  employee: null,
};
const employee = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getEmployee(state, action) {
      state.isLoading = false;
      state.employee = action.payload;
    },
    updateEmployeeSuccess(state, action) {
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
    deleteEmployeeSuccess(state, action) {
      const { userId } = action.payload;
      const deleteEvent = state.events.filter((event) => event.id !== userId);
      state.events = deleteEvent;
    },
    createEmployeeSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },
  },
});

export default employee.reducer;
export const {
  startLoading,
  hasError,
  getEmployee,
  createEmployeeSuccess,
  updateEmployeeSuccess,
  deleteEmployeeSuccess,
} = employee.actions;
