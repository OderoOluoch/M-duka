import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    doLogin: (state, action) => {
      // state.push({ ...action.payload });
      state.user = action.payload
    },
  },
});

export const authReducer = authSlice.reducer;

export const {
  doLogin,
} = authSlice.actions;
