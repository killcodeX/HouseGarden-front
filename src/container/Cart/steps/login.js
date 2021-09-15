import React from "react";
import { Form, Input } from "antd";
import { CartStepWrapper, FormLabel, AuthFooter, BookButton } from "./style";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export default function Login({auth}) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if(auth){
    return (
      <CartStepWrapper>
        <span>Login ok !!</span>
      </CartStepWrapper>
    )
  }

  return (
    <CartStepWrapper>
      <Form onFinish={formik.handleSubmit}>
        <FormLabel>Email</FormLabel>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            type="email"
            placeholder="enter your email.."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <FormLabel>Password</FormLabel>
        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, message: "Please Select your city!" }]}
        >
          <Input
            type="password"
            placeholder="enter your password.."
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <BookButton type="submit">Login</BookButton>
      </Form>
      <AuthFooter>
        <span>
          Don't have an account? Go to <Link to="/register">Register</Link>
        </span>
      </AuthFooter>
    </CartStepWrapper>
  );
}
