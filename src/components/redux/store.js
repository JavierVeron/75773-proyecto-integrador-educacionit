import { createStore, combineReducers } from "redux"
import productReducer from "./productReducer"
import cartReducer from "./productReducer"

const rootReducer = combineReducers({products:productReducer, cart:cartReducer});
const store = createStore(rootReducer);

export default store;