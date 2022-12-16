import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  invalidCredential: null,
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isInitialized(state, action) {
      const user = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    },
    isLoding(state) {
      state.isInitialized = true;
    },
    isLogin(state, action) {
      const user = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        isInitialized: false,
        user,
      };
    },
    isError(state, action) {
      const invalidCredential = action.payload;

      return {
        ...state,
        invalidCredential,
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
export const { isLogin, isLogout, isLoding, isInitialized, isError } = login.actions;
