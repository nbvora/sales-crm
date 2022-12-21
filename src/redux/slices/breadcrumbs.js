import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hedare: [],
};

const breadcrumbs = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    getHeaderDetail(state, action) {
      state.hedare = action.payload;
    },
  },
});

export default breadcrumbs.reducer;
export const { getHeaderDetail } = breadcrumbs.actions;
