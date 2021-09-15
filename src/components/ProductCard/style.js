import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 300px;
  border-radius: 6px;
  margin-right: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.img`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const CardDetails = styled.div`
  padding: 20px 16px;
`;

export const NameWrapper = styled.h3`
  color: #2c2c2c;
  font-size: 15px;
  //white-space: nowrap;
  width: 100%;
  //overflow: hidden;
  //text-overflow: ellipsis;
  flex-wrap: wrap;
  min-height: 40px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryWrapper = styled.div`
  color: #909090;
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0 !important;
`;

export const StarWrapper = styled.span`
  color: #fad02c;
  font-size: 20px;
  padding-right: 5px;
`;

export const RatingWrapper = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 0;
`;

export const PriceWrapper = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 8px;
`;

export const Reviews = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 2px;
  padding-top: 12px;
`;

export const BookButton = styled.button`
  min-width: 90px;
  height: 40px;
  color: #ffffff;
  background-color: #50cd89;
  border-radius: 0 3px 3px 0;
  border: 0;
  box-shadow: none;
  font-size: 14px;
  font-weight: 700;
  text-shadow: none;
`;

export const LoveWrapper = styled.div`
  font-size: 25px;
  background: #f6f6f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 7px;
  cursor: pointer;
`;
