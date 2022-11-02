import { combineReducers } from 'redux';
import { cartReducer } from './cart.slice';
import { authReducer } from './auth.slice';
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
export default rootReducer;
