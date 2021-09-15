import React from "react";
import { Divider } from "antd";
import { FlexSection, PriceDesc, PriceValue, DiscountWrapper } from "./style";
import { useSelector } from "react-redux";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  })

export default function PriceDetail() {
  const pricing = useSelector(state => state.products.cartPricing)
  return (
    <>
      <FlexSection className='pb-2'>
        <PriceDesc>Total Price:</PriceDesc>
        <PriceValue>{formatter.format(pricing.totalPrice)}</PriceValue>
      </FlexSection>
      <FlexSection className='pb-2'>
        <PriceDesc>Discount: <DiscountWrapper>{`${pricing.discount}% off`}</DiscountWrapper></PriceDesc>
        <PriceValue>- {formatter.format(pricing.discountPrice)}</PriceValue>
      </FlexSection>
      <FlexSection>
        <PriceDesc>Tax:</PriceDesc>
        <PriceValue>+ {formatter.format(pricing.totalTax)}</PriceValue>
      </FlexSection>
      <Divider />
      <FlexSection>
        <PriceDesc>Total Amount:</PriceDesc>
        <PriceValue>{formatter.format(pricing.finalAmount)}</PriceValue>
      </FlexSection>
    </>
  );
}
