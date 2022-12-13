import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  invoice: null,
};
const invoice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getInvoice(state, action) {
      state.isLoading = false;
      state.invoice = action.payload;
    },
    addInvoice(state, action) {
      state.isLoading = true;
      state.invoice = action.payload;
      // // const { card, columnId } = action.payload;
      // state.board.cards[card.id] = card;
      // state.board.columns[columnId].cardIds.push(card.id);
    },
  },
});

export default invoice.reducer;
export const { startLoading, hasError, getInvoice, addInvoice } = invoice.actions;
