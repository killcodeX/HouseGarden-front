import { combineReducers } from "redux";
import ProductReducer from "./postreducers";
import AuthReducer from "./authreducers";

export default combineReducers({
  products: ProductReducer,
  auth: AuthReducer,
});
