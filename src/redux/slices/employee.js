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
    addEmployee(state, action) {
      const { card, columnId } = action.payload;

      state.board.cards[card.id] = card;
      state.board.columns[columnId].cardIds.push(card.id);
    },
  },
});

export default employee.reducer;
export const { startLoading, hasError, getEmployee, addEmployee } = employee.actions;
