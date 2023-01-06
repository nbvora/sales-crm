import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: false,
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
    hasError(state) {
      state.isLoading = false;
      state.error = true;
    },
    getStokes(state, action) {
      state.isLoading = false;
      state.stocks = action.payload;
      state.error = false;
    },
    getDistributor(state, action) {
      state.isLoading = false;
      state.ditributor = action.payload;
    },
  },
});

export default dashboard.reducer;
export const { startLoading, hasError, getStokes, getDistributor } = dashboard.actions;
