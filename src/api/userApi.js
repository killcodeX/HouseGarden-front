import { notification } from "antd";
import { ApiFunc } from "./postApi";

const openNotificationWithIcon = (type, title, message) => {
    notification[type]({
      message: title,
      description: message,
    });
  };


// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/housegarden/signup`, body);
    openNotificationWithIcon("success", "Signup Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Signup Failed",
        error.response.data.message
      );
    }
  }
};

export const userLogin = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/housegarden/signin`, body);
    openNotificationWithIcon("success", "Login Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Login Failed",
        error.response.data.message
      );
    }
  }
};


export const likeProduct = async (body) => {
  try {
    const { data } = await ApiFunc.put(`/housegarden/likeproduct`, body);
    openNotificationWithIcon("success", "Product Added to Wishlist !!", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Adding Product to Wishlist Failed !!",
        error.response.data.message
      );
    }
  }
}

export const unLikeProduct = async (body) => {
  try {
    const { data } = await ApiFunc.put(`/housegarden/unlikeproduct`, body);
    openNotificationWithIcon("success", "Product Removed from Wishlist!!", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Removing Product from Wishlist Failed !!",
        error.response.data.message
      );
    }
  }
}

export const addProducttoCartApi = async (body) => {
  try {
    const { data } = await ApiFunc.put(`/housegarden/add-product-cart`, body);
    openNotificationWithIcon("success", "Product Added to Cart !!", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Adding Product to Cart Failed !!",
        error.response.data.message
      );
    }
  }
}

export const removeProducttocartApi = async (body) => {
  try {
    const { data } = await ApiFunc.put(`/housegarden/remove-product-cart`, body);
    openNotificationWithIcon("success", "Product Removed from Cart !!", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Removing Product from Cart Failed !!",
        error.response.data.message
      );
    }
  }
}