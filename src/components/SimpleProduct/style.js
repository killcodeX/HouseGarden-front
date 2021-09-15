import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  //width: 300px;
  border-radius: 6px;
  margin-right: 20px;
  overflow: hidden;
  padding: 20px 15px;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const ProductImageWrapper = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  width: 11rem;
  height: 11rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const FlexSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightSideProduct = styled.div`
  padding-left: 20px;
  width:300px;

  @media (max-width: 480px) {
    padding-left: 10px;
  }
`;

export const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  min-height: 40px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ProductCategory = styled.div`
  color: #909090;
  font-size: 14px;
  font-weight: 400;
`;

export const PriceWrapper = styled.p`
  font-size: 15px;
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
  min-width: 130px;
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
