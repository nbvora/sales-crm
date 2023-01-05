import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  stocks: [],
  ditributor: [],
};
const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getStokes(state, action) {
      state.isLoading = false;
      state.stocks = action.payload;
    },
    getDistributor(state, action) {
      state.isLoading = false;
      state.ditributor = action.payload;
    },
  },
});

export default dashboard.reducer;
export const { startLoading, hasError, getStokes, getDistributor } = dashboard.actions;
