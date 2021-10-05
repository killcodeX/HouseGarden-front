import axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export const ApiFunc = axios.create({ baseURL: baseURL });

ApiFunc.interceptors.request.use((req) => {
  if (localStorage.getItem("houseGardentoken")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("houseGardentoken")
    )}`;
  }
  return req;
});

// User Api
export const getAllProductApi = async () => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/get-all-products`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching All Products Failed",
        error.response.data.message
      );
    }
  }
};

// to get single product
export const getSingleProductApi = async (id) => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/single-product/${id}`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Single Product Failed",
        error.response.data.message
      );
    }
  }
};

export const getFilterProductApi = async (filter) => {
  try {
    const { data } = await ApiFunc.post(`/housegarden/filter-product`, filter);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Filter Product Failed",
        error.response.data.message
      );
    }
  }
};


export const getWishListProductApi = async () => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/wishlist-products`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Wishlist Product Failed",
        error.response.data.message
      );
    }
  }
};

export const getCartProductApi = async () => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/cart-products`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Cart Product Failed",
        error.response.data.message
      );
    }
  }
};


export const getOrderProductApi = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/housegarden/order-products`, body);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Order Product Failed",
        error.response.data.message
      );
    }
  }
};

export const getCancelOrderApi = async (id) => {
  try {
    const { data } = await ApiFunc.put(`/housegarden/cancel-order/${id}`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Order Product Failed",
        error.response.data.message
      );
    }
  }
};

