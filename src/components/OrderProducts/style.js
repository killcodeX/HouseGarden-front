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
    width: 300px;
  }
`;

export const OrderProductsWrapper = styled.div`
  margin-bottom:10px;
  border:1px solid #f2f2f2;
`

export const ProductImageWrapper = styled.div`
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

  @media (max-width: 480px) {
    flex-direction: column;
  }
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
    //font-size: 13px;
    margin-top: 20px;
    margin-bottom: 0px;
    text-align: center;
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
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
`;

export const BookButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 33px;
  color: ${(props) => props.status};
  border: 1px solid ${(props) => props.status};
  border-radius: 0 3px 3px 0;
  font-size: 14px;
  font-weight: 500;
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