import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  LIKE_UNLIKE_PRODUCT,
  ADDING_REMOVING_PRODUCT,
} from "./constactions";

import {
  userRegister,
  userLogin,
  likeProduct,
  unLikeProduct,
  addProducttoCartApi,
  removeProducttocartApi,
} from "../../api/userApi";

import { getCartData } from "./postactions";

export const receiveLogin = (user, history) => async (dispatch) => {
  const result = await userLogin(user);
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      user: result.result,
      token: result.token,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const receiveSignUp = (user, history) => async (dispatch) => {
  const result = await userRegister(user);
  try {
    dispatch({
      type: SIGNUP_SUCCESS,
      user: result.result,
      token: result.token,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};

export const receiveProductLike = (id) => async (dispatch) => {
  const result = await likeProduct({ productId: id });
  try {
    dispatch({
      type: LIKE_UNLIKE_PRODUCT,
      payload: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const receiveProductUnlike = (id) => async (dispatch) => {
  const result = await unLikeProduct({ productId: id });
  try {
    dispatch({
      type: LIKE_UNLIKE_PRODUCT,
      payload: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const receiveProductToCart = (id, quantity) => async (dispatch) => {
  const result = await addProducttoCartApi({
    productId: id,
    quantity: quantity,
  });
  try {
    dispatch({
      type: ADDING_REMOVING_PRODUCT,
      payload: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const receiveProductOutCart = (id) => async (dispatch) => {
  try {
    const result = await removeProducttocartApi({ cartId: id });
    dispatch(getCartData());
    dispatch({
      type: ADDING_REMOVING_PRODUCT,
      payload: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};
