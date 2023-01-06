import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  invalidCredential: null,
  error: false,
  isLoading: false,
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state) {
      state.isLoading = false;
      state.error = true;
    },
    isInitialized(state, action) {
      const user = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
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
        invalidCredential: null,
        isLoading: false,
        error: false,
        user,
      };
    },
    isError(state, action) {
      const invalidCredential = action.payload;

      return {
        ...state,
        invalidCredential,
        isLoading: false,
      };
    },
    isLogout(state) {
      return {
        ...state,
        isAuthenticated: false,
        isInitialized: false,
        error: false,
        user: null,
        isLoading: false,
      };
    },
  },
});

export default login.reducer;
export const { isLogin, isLogout, isLoding, startLoading, hasError, isInitialized, isError } = login.actions;
