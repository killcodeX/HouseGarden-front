import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  LIKE_UNLIKE_PRODUCT,
  ADDING_REMOVING_PRODUCT,
  REMOVING_PRODUCT_WISHLIST
} from "../actions/constactions";

import { saveState, loadState } from "../../helpers/localStrorage";

const initialState = {
  isAuthenticated: loadState("houseGardenLoggedIn") || false,
  token: "",
  user: loadState("houseGardenUser") || {},
  inCheckOut: false,
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveState("houseGardenLoggedIn", true);
      saveState("houseGardenUser", action.user);
      saveState("houseGardentoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case SIGNUP_SUCCESS:
      saveState("houseGardenLoggedIn", true);
      saveState("houseGardenUser", action.user);
      saveState("houseGardentoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case LOGOUT_SUCCESS:
      saveState("houseGardenLoggedIn", false);
      saveState("houseGardenUser", {});
      saveState("houseGardentoken", "");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
      };

    case LIKE_UNLIKE_PRODUCT:
      saveState("houseGardenUser", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case ADDING_REMOVING_PRODUCT:
      saveState("houseGardenUser", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("houseGardenLoggedIn");
      const user = loadState("houseGardenUser");
      const token = loadState("houseGardentoken");
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token,
      };

    default:
      return state;
  }
};

export default AuthReducer;
