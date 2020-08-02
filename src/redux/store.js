import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);
export { store, persistor };
