import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerDetail: [],
  title: null,
};

const breadcrumbs = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    getHeaderDetail(state, action) {
      state.headerDetail = action.payload;
    },
    getTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export default breadcrumbs.reducer;
export const { getHeaderDetail, getTitle } = breadcrumbs.actions;
