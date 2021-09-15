import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
  min-height: 700px;
`;

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 0px;
`;

export const SectionSubTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const OrderSummaryCol = styled.div`
  border-right: 1px solid #c8beaa;
  padding-right: 20px;
`;

// price details
export const PriceDesc = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export const PriceValue = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

export const DiscountWrapper = styled.span`
  border: 1px solid #ff4867;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #fff1ed;
  color: #ff4867;
  font: 400 0.8rem / 1.33 "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

// product list
export const ProductListWrapper = styled.div`
  //width: 300px;
  margin-bottom: 22px;
  border-radius: 6px;
  margin-right: 20px;
  overflow: hidden;
  padding: 20px 15px;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  @media (max-width: 480px) {
    margin: 0 auto;
    width: 300px;
  }
`;

export const ProductImageWrapper = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  width: 11rem;
  height: 8rem;
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
  //margin-top: 8px;
`;

export const Reviews = styled.div`
  font-size: 14px;
  font-weight: 500;
  // margin-top: 2px;
  // padding-top: 12px;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  color: red;
  cursor: pointer;
`;

export const NoDataBanner = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 31rem;
  height: 25rem;
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