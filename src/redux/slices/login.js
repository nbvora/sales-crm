import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invalidCredential: null,
  isAuthenticated: false,
  isInitialized: false,
  isLoading: false,
  error: false,
  user: null,
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
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },

    isLoding(state) {
      state.isInitialized = true;
    },

    isLogin(state, action) {
      state.isAuthenticated = true;
      state.isInitialized = false;
      state.invalidCredential = null;
      state.isLoading = false;
      state.error = false;
      state.user = action.payload;
    },

    isError(state, action) {
      state.invalidCredential = action.payload;
      state.isLoading = false;
    },

    isLogout(state, action) {
      state.isAuthenticated = false;
      state.isInitialized = false;
      state.error = false;
      state.user = null;
      state.isLoading = false;
      state.invalidCredential = action.payload;
    },
  },
});

export default login.reducer;
export const { isLogin, isLogout, isLoding, startLoading, hasError, isInitialized, isError } = login.actions;
