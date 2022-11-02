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
      state.session = action.payload;
    },

    loginUpdate: (state, action) => {
      state.session = action.payload;
    },

    logOut: (state) => {
      state.session = {
        loginType: '',
        loggedIn: false,
      };
    },
  },
});

export const authReducer = authSlice.reducer;

export const { doLogin, iniateLoginWithMpesa, loginUpdate, logOut } =
  authSlice.actions;
