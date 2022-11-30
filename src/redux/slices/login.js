import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLoding(state) {
      state.isInitialized = true;
    },
    isLogin(state, action) {
      console.log(action.payload);
      const user = action.payload;
      console.log(user);
      return {
        ...state,
        isAuthenticated: true,
        isInitialized: false,
        user,
      };
    },
    isLogout(state) {
      return {
        ...state,
        isAuthenticated: false,
        isInitialized: false,
        user: null,
      };
    },
  },
});

export default login.reducer;
export const { isLogin, isLogout, isLoding } = login.actions;
