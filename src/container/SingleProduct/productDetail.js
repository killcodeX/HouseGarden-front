import React from "react";
import moment from "moment";
import {
  ProductPageTitle,
  AboutProduct,
  ProductReiviews,
  ProductReiviewUpper,
  ProfileImage,
  ReviewTitle,
  ReviewDate,
  ProductActualReview,
} from "./style";

export default function ProductDetail({ product }) {
  return (
    <div>
      <ProductPageTitle>About the Plant</ProductPageTitle>
      <AboutProduct>{product.about}</AboutProduct>
      <table className="table table-bordered my-4">
        <tbody>
          <tr>
            <th>Common Name</th>
            <td>{product.details.commonName}</td>
          </tr>
          <tr>
            <th>Bloom Time</th>
            <td>{product.details.bloomTime}</td>
          </tr>
          <tr>
            <th>Difficulty in Growing</th>
            <td>{product.details.diffculty}</td>
          </tr>
          <tr>
            <th>Sunlight</th>
            <td>{product.details.sunlight}</td>
          </tr>
          <tr>
            <th>Temperature</th>
            <td>{product.details.temp}</td>
          </tr>
          <tr>
            <th>Water Needed</th>
            <td>{product.details.water}</td>
          </tr>
        </tbody>
      </table>
      <ProductPageTitle>Reviews</ProductPageTitle>
      <div className="row">
        {product.reviews.map((item) => {
          return (
            <div key={item._id} className="col-sm-12 col-md-6 mb-4">
              <ProductReiviews>
                <ProductReiviewUpper>
                  <ProfileImage>
                    <img src={item.image} alt="profile" />
                  </ProfileImage>
                  <div className="d-flex flex-column">
                    <ReviewTitle>{item.title}</ReviewTitle>
                    <ReviewDate>{`${item.name} on ${moment(
                      item.postedOn
                    ).format("MMM Do YY")}`}</ReviewDate>
                  </div>
                </ProductReiviewUpper>
                <ProductActualReview>{item.review}</ProductActualReview>
              </ProductReiviews>
            </div>
          );
        })}
      </div>
    </div>
  );
}
