import React from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { RegistrationSchema } from "../../helpers/schema";
import { receiveSignUp } from "../../redux/actions/authactions";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  BannerWrapper,
  FormWrapper,
  CardWrapper,
  CardUpper,
  HotelTag,
  TitleTag,
  LogoWrapper,
  AuthFooter,
  AuthPrivacy,
  FormLabel,
  SubmitButton,
} from "./style";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      mobile: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      dispatch(receiveSignUp(values, history))
    },
  });
  return (
    <Wrapper className="container-fluid">
      <div className="row">
        <BannerWrapper
          className="col-sm-6"
          banner={`${process.env.PUBLIC_URL}/assets/register.jpg`}
        ></BannerWrapper>
        <FormWrapper className="col-sm-6">
          <CardWrapper>
            <CardUpper>
              <LogoWrapper>
                <Link
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontFamily: "inherit",
                  }}
                  to="/"
                >
                  House{" "}
                  <span style={{ color: "#11BF8B", fontFamily: "inherit" }}>
                    Garden
                  </span>
                </Link>
              </LogoWrapper>
              <HotelTag>Feel Nature In your House</HotelTag>
              <TitleTag>Register</TitleTag>
            </CardUpper>
            <Form onFinish={formik.handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <FormLabel>First Name</FormLabel>
                  <Form.Item
                    name="fname"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter your first Name!",
                      },
                    ]}
                  >
                    <Input
                      type="fname"
                      placeholder="enter your first name.."
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-sm-6">
                  <FormLabel>Last Name</FormLabel>
                  <Form.Item
                    name="lname"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last Name!",
                      },
                    ]}
                  >
                    <Input
                      type="lname"
                      placeholder="enter your last name.."
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                    />
                  </Form.Item>
                </div>
              </div>
              <FormLabel>Email</FormLabel>
              <Form.Item
                name="email"
                hasFeedback
                rules={[
                  { required: true, message: "Please enter correct email!" },
                ]}
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
                rules={[
                  { required: true, message: "Please enetr your password!" },
                ]}
              >
                <Input
                  type="password"
                  placeholder="enter your password.."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <FormLabel>Mobile Number</FormLabel>
              <Form.Item
                name="mobile"
                hasFeedback
                rules={[
                  { required: true, message: "Please enter your mobile no!" },
                  {
                    pattern: /^([+]\d{2})?\d{10}$/,
                    message: "Enter only mobile number",
                  },
                ]}
              >
                <Input
                  type="mobile"
                  placeholder="enter your mobile no.."
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <SubmitButton type="submit">Register</SubmitButton>
            </Form>
            <AuthFooter>
              <AuthPrivacy>
                By creating your House Garden account, you agree to our{" "}
                <a href="#">Terms, Data Policy</a> and Cookie Policy.
              </AuthPrivacy>
              <span>
                Already have an account? Go to <Link to="/login">Login</Link>
              </span>
            </AuthFooter>
          </CardWrapper>
        </FormWrapper>
      </div>
    </Wrapper>
  );
}
