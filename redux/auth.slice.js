import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    doLogin: (state, action) => {
      // state.push({ ...action.payload });
      state.user = action.payload;
    },
    iniateLoginWithMpesa: (state, action) => {
      state.initiate = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { doLogin, iniateLoginWithMpesa } = authSlice.actions;
