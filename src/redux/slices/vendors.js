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
    addVendors(state, action) {
      state.isLoading = false;
      state.vendors = action.payload;
      const card = action.payload;
      console.log(card);
      // state.board.cards[card.id] = card;
      // state.board.columns[columnId].cardIds.push(card.id);
    },
  },
});

export default vendors.reducer;
export const { startLoading, hasError, getVendors, addVendors } = vendors.actions;
