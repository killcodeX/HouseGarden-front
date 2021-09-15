import React from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  ProductCardWrapper,
  ImageWrapper,
  CardDetails,
  NameWrapper,
  CategoryWrapper,
  PriceWrapper,
  ReviewWrapper,
  StarWrapper,
  RatingWrapper,
  Reviews,
  BookButton,
  LoveWrapper,
} from "./style";
import {
  receiveProductLike,
  receiveProductUnlike,
} from "../../redux/actions/authactions";
import { useDispatch, useSelector } from "react-redux";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLikeUnlike = (id) => {
    if (user.wishlist.includes(id)) {
      dispatch(receiveProductUnlike(id));
    } else {
      dispatch(receiveProductLike(id));
    }
  };

  return (
    <ProductCardWrapper>
      <ImageWrapper src={item.image} alt={item.title} />
      <CardDetails>
        <NameWrapper>{item.title}</NameWrapper>
        <ReviewWrapper>
          <CategoryWrapper>{item.category}</CategoryWrapper>
          <StarWrapper>
            <AiFillStar />
          </StarWrapper>
          <RatingWrapper>{item.rating}</RatingWrapper>
        </ReviewWrapper>
        <ReviewWrapper>
          <PriceWrapper>{formatter.format(item.price)}</PriceWrapper>
          <Reviews>{`${item.totalReviews} Reviews`}</Reviews>
        </ReviewWrapper>
        <ReviewWrapper className="mt-2">
          <BookButton>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={`/product/${item._id}`}
            >
              By Now
            </Link>
          </BookButton>
          {user?.wishlist ? (
            <LoveWrapper onClick={() => handleLikeUnlike(item._id)}>
              {user?.wishlist?.includes(item._id) ? (
                <AiFillHeart style={{ color: "#FF4345" }} />
              ) : (
                <AiOutlineHeart />
              )}
            </LoveWrapper>
          ) : null}
        </ReviewWrapper>
      </CardDetails>
    </ProductCardWrapper>
  );
}
