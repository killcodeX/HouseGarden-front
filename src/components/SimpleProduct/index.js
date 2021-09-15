import React, { useState } from "react";
import { Rate } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  ProductCardWrapper,
  ProductImageWrapper,
  FlexSection,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
  PriceWrapper,
  Reviews,
  BookButton,
  LoveWrapper,
} from "./style";
import {
  receiveProductLike,
  receiveProductUnlike,
} from "../../redux/actions/authactions";
import { RemovingProduct } from "../../redux/actions/postactions";
import { useDispatch, useSelector } from "react-redux";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function SimpleProduct({ item }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLikeUnlike = (id) => {
    if (user.wishlist.includes(id)) {
      dispatch(receiveProductUnlike(id));
      dispatch(RemovingProduct(id));
    } else {
      dispatch(receiveProductLike(id));
    }
  };

  return (
    <ProductCardWrapper>
      <FlexSection>
        <ProductImageWrapper>
          <img src={item.image} alt={item.title} />
        </ProductImageWrapper>
        <RightSideProduct>
          <ProductTitle>{item.title}</ProductTitle>
          <FlexSection className="mb-1">
            <ProductCategory>{item.category}</ProductCategory>
            <Rate disabled style={{ fontSize: "16px" }} value={item.rating} />
          </FlexSection>
          <FlexSection className="mb-3">
            <PriceWrapper>{formatter.format(item.price)}</PriceWrapper>
            <Reviews>{`${item.totalReviews} Reviews`}</Reviews>
          </FlexSection>
          <FlexSection>
            <BookButton><Link style={{color:'inherit', textDecoration:'none'}} to={`/product/${item._id}`}>View Product</Link></BookButton>
            <LoveWrapper onClick={() => handleLikeUnlike(item._id)}>
              {user?.wishlist?.includes(item._id) ? (
                <AiFillHeart style={{ color: "#FF4345" }} />
              ) : (
                <AiOutlineHeart />
              )}
            </LoveWrapper>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductCardWrapper>
  );
}
