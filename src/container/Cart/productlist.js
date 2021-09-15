import React from "react";
import {
  ProductListWrapper,
  FlexSection,
  ProductImageWrapper,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
  PriceWrapper,
  Reviews,
  IconWrapper
} from "./style";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { receiveProductOutCart } from "../../redux/actions/authactions";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function Productlist({ item }) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(receiveProductOutCart(id))
  }


  return (
    <ProductListWrapper>
      <FlexSection>
        <ProductImageWrapper>
          <img src={item.image} alt={item.title} />
        </ProductImageWrapper>
        <RightSideProduct>
          <ProductTitle>{item.title}</ProductTitle>
          <FlexSection className="pb-3">
            <ProductCategory>{item.category}</ProductCategory>
            <Reviews>{`Quantity: ${item.quantity}`}</Reviews>
          </FlexSection>
          <FlexSection>
            <PriceWrapper>{formatter.format(item.price)}</PriceWrapper>
            <IconWrapper onClick={() => handleDelete(item.cartId)}>
              <AiOutlineDelete />
            </IconWrapper>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductListWrapper>
  );
}
