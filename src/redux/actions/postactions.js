import {
  GetAllProduct,
  GetSingleProduct,
  GetSorted,
  FilterData,
  SearchData,
  ClearSearchData,
  WishListData,
  CartData,
  Removing_Product_Wishlist,
  AddOrderDetails,
  OrderData,
  CancelOrder
} from "./constactions";

import {
  getAllProductApi,
  getSingleProductApi,
  getFilterProductApi,
  getWishListProductApi,
  getCartProductApi,
  removeProductCartApi,
  getOrderProductApi,
  getCancelOrderApi
} from "../../api/postApi";

// actions
export const getAllProduct = () => async (dispatch) => {
  const result = await getAllProductApi();
  dispatch({
    type: GetAllProduct,
    payload: result,
  });
};

export const getSingleProduct = (id) => async (dispatch) => {
  const result = await getSingleProductApi(id);
  dispatch({
    type: GetSingleProduct,
    payload: result,
  });
};

export const getProductSorted = (sort) => {
  return {
    type: GetSorted,
    payload: sort,
  };
};

export const getFilterData = (filter) => async (dispatch) => {
  const result = await getFilterProductApi(filter);
  dispatch({
    type: FilterData,
    payload: result,
  });
};

export const getSearchData = (data) => {
  return {
    type: SearchData,
    payload: [data],
  };
};

export const clearSearchData = () => {
  return {
    type: ClearSearchData,
  };
};

export const getWishListData = () => async (dispatch) => {
  const result = await getWishListProductApi();
  dispatch({
    type: WishListData,
    payload: result,
  });
};

export const RemovingProduct = (id) => {
  return{
    type: Removing_Product_Wishlist,
    payload: id,
  }
}

export const getCartData = () => async (dispatch) => {
  const result = await getCartProductApi();
  dispatch({
    type: CartData,
    products: result.products,
    pricing: result.pricing,
  });
};

export const getorderDetails = (body) => {
  return {
    type: AddOrderDetails,
    payload: body
  }
}

export const getorderData = (body) => async (dispatch) => {
  const result = await getOrderProductApi(body);
  dispatch({
    type: OrderData,
    payload: result,
  });
};

export const getCancelOrder = (id) => async (dispatch) => {
  const result = await getCancelOrderApi(id);
  getorderData()
  dispatch({
    type: CancelOrder,
    payload: result
  })
}