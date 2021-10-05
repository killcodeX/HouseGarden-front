import React, { useState } from "react";
import { Form, Input, Spin, message } from "antd";
import { CartStepWrapper, FormLabel, BookButton } from "./style";
import { useFormik } from "formik";
import { AddressSchema } from "../../../helpers/schema";
import { getorderDetails } from "../../../redux/actions/postactions";
import { useDispatch, useSelector } from "react-redux";

export default function Address({ amount, setCurrentStep }) {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.products.cartProduct);
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      houseno: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values) => {
      setLoading(true);
      let products = cartProduct.map((item) => {
        return { productId: item.productId, quantity: item.quantity, cartId: item.cartId };
      });
      let data = {
        address: {
          ...values,
          mobile: user.mobile,
        },
        products: products,
        totalAmount: amount,
      };
      setTimeout(() => {
        dispatch(getorderDetails(data));
        setLoading(false);
        message.success('Address Added !!');
        setCurrentStep(2);
      }, 2000);
    },
  });
  return (
    <CartStepWrapper>
      <Form onFinish={formik.handleSubmit}>
        <div className="row">
          <FormLabel>Shipped to</FormLabel>
          <div className="col-sm-12 col-md-6">
            <Form.Item
              name="fname"
              rules={[{ required: true, message: "Please input first name!" }]}
            >
              <Input
                type="text"
                placeholder="First Name..."
                value={formik.values.fname}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
          <div className="col-sm-12 col-md-6">
            <Form.Item
              name="lname"
              rules={[{ required: true, message: "Please input last name!" }]}
            >
              <Input
                type="text"
                placeholder="Last Name..."
                value={formik.values.lname}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <FormLabel>House No</FormLabel>
            <Form.Item
              name="houseno"
              rules={[{ required: true, message: "Please input House No!" }]}
            >
              <Input
                type="text"
                placeholder="House No..."
                value={formik.values.houseno}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
          <div className="col-sm-12 col-md-6">
            <FormLabel>Zip Code</FormLabel>
            <Form.Item
              name="pincode"
              rules={[{ required: true, message: "Please input Zip code!" }]}
            >
              <Input
                type="text"
                placeholder="Zip Code..."
                value={formik.values.pincode}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
        </div>
        <FormLabel>Street</FormLabel>
        <Form.Item
          name="street"
          rules={[{ required: true, message: "Please input street name!" }]}
        >
          <Input
            type="text"
            placeholder="Street..."
            value={formik.values.street}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <FormLabel>City</FormLabel>
            <Form.Item
              name="city"
              rules={[{ required: true, message: "Please input city name!" }]}
            >
              <Input
                type="text"
                placeholder="City..."
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
          <div className="col-sm-12 col-md-6">
            <FormLabel>State</FormLabel>
            <Form.Item
              name="state"
              rules={[{ required: true, message: "Please input State name!" }]}
            >
              <Input
                type="text"
                placeholder="State..."
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
        </div>
        {loading ? (
          <Spin />
        ) : (
          <BookButton type="submit">Save Address </BookButton>
        )}
      </Form>
    </CartStepWrapper>
  );
}
