import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./User/User.reducer";
import CartReducer from "./Cart/Cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shopData/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shopData: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
