import React from "react";
import { useHistory } from "react-router-dom";
import { CartStepWrapper, BookButton } from "./style";
import { FlexSection, PriceDesc, PriceValue } from "../style";
import { displayRazorPay } from "../../../helpers/razorPayment";
import { useDispatch, useSelector } from "react-redux";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function Payment({ amount, currentStep }) {
  const history = useHistory();
  const productDetails = useSelector((state) => state.products.orderDetails);
  const userId = useSelector((state) => state.auth.user._id);

  return (
    <CartStepWrapper>
      <FlexSection className="mb-4">
        <PriceDesc>Total Amount:</PriceDesc>
        <PriceValue>{formatter.format(amount)}</PriceValue>
      </FlexSection>
      <BookButton
        disabled={currentStep == 2 ? false : true}
        onClick={() => displayRazorPay(amount, productDetails, userId, history)}
      >
        Pay Now
      </BookButton>
    </CartStepWrapper>
  );
}
