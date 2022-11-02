import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import { authReducer } from './auth.slice';

const reducer = {
  cart: cartReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
