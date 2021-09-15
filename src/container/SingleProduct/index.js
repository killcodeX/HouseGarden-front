import React, { useState, useEffect } from "react";
import { Rate, Divider, InputNumber, message } from "antd";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  SectionWrapper,
  ProductImageWrapper,
  ProductTitle,
  ProductReview,
  ProductDescription,
  ProductPrice,
  CartSection,
  AddCartButton,
  WishListButton,
} from "./style";
import ProductDetail from "./productDetail";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../redux/actions/postactions";
import {
  receiveProductToCart,
  receiveProductUnlike,
  receiveProductLike,
} from "../../redux/actions/authactions";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.singleProduct);
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const [like, setLike] = useState(false);
  const [numberItem, setNumberItem] = useState(1);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  function onChange(value) {
    setNumberItem(value);
  }

  const handleLikeUnlike = (id) => {
    if (user.wishlist.includes(id)) {
      dispatch(receiveProductUnlike(id));
    } else {
      dispatch(receiveProductLike(id));
    }
  };

  const handleCart = (id) => {
    if(auth){
      dispatch(receiveProductToCart(id, numberItem));
    } else{
      message.error('Login/Register to add Product to Cart!!');
    }
  };

  if (!product?.image) {
    return <span>loading...</span>;
  }

  return (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 p-3">
            <ProductImageWrapper>
              <img src={product.image} alt={product.title} />
            </ProductImageWrapper>
          </div>
          <div className="col-md-7 col-sm- p-3">
            <ProductTitle>{product.title}</ProductTitle>
            <ProductReview>
              <Rate
                style={{ zIndex: "-1" }}
                allowHalf
                disabled
                defaultValue={product.rating}
              />
              <span className="px-5">{`${product.totalReviews} Reviews`}</span>
            </ProductReview>
            <ProductDescription>{product.description}</ProductDescription>
            <CartSection>
              <ProductPrice>
                {formatter.format(product.price * numberItem)}
              </ProductPrice>
              <div>
                <span className="px-3">Quantity:</span>
                <InputNumber
                  min={1}
                  max={5}
                  defaultValue={1}
                  onChange={onChange}
                />
              </div>
            </CartSection>
            <CartSection>
              <AddCartButton onClick={() => handleCart(product._id)}>
                Add to Cart
              </AddCartButton>
              {user?.wishlist ? (
                <WishListButton onClick={() => handleLikeUnlike(product._id)}>
                  {user?.wishlist?.includes(product._id) ? (
                    <AiFillHeart style={{ color: "#FF4345" }} />
                  ) : (
                    <AiOutlineHeart />
                  )}
                  <span className="px-2">
                    {user?.wishlist?.includes(product._id)
                      ? "Remove from WishList "
                      : "Add to WishList"}
                  </span>
                </WishListButton>
              ) : null}
            </CartSection>
          </div>
        </div>
        <Divider />
        <ProductDetail product={product} />
      </div>
    </SectionWrapper>
  );
}
