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
export const { isLogin, isLogout, isLoding, isInitialized } = login.actions;
