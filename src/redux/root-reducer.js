import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./User/User.reducer";
import CartReducer from "./Cart/Cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
});

export default persistReducer(persistConfig, rootReducer);
