import { combineReducers } from "redux";

import userReducer from "./User/User.reducer";
import CartReducer from "./Cart/Cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
