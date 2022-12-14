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
    updateLeadSuccess(state, action) {
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
    deleteLeadSuccess(state, action) {
      const { userId } = action.payload;
      const deleteEvent = state.events.filter((event) => event.id !== userId);
      state.events = deleteEvent;
    },
    createLeadSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },
  },
});

export default leads.reducer;
export const {
  startLoading,
  hasError,
  getleadTable,
  getorderTable,
  getdiscussionTable,
  updateLeadSuccess,
  createLeadSuccess,
  deleteLeadSuccess,
} = leads.actions;
