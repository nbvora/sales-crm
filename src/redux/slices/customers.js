import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  customers: null,
};
const customers = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCustomers(state, action) {
      state.customers = action.payload;
    },
    addCustomers(state, action) {
      state.isLoading = false;
      const card = action.payload;
      console.log(card, 'card');
      // state.board.cards[card.id] = card;
      // state.board.columns[columnId].cardIds.push(card.id);
    },
    deleteCustomers(state, action) {
      const { cardId } = action.payload;
      console.log(cardId, 'cardId');
      // state.board.columns[columnId].cardIds = state.board.columns[columnId].cardIds.filter((id) => id !== cardId);
      // state.board.cards = omit(state.board.cards, [cardId]);
    },
  },
});

export default customers.reducer;
export const { startLoading, hasError, getCustomers, addCustomers, deleteCustomers } = customers.actions;
