import styled from "styled-components";

export const CartStepWrapper = styled.div`
  padding: 15px;
`;

export const FormLabel = styled.div`
  font-size: 14px;
`;

export const AuthFooter = styled.div`
  padding-top: 30px;
`;

export const AuthPrivacy = styled.div`
  padding-bottom: 20px;
  color: #b5b5c3;
`;

export const BookButton = styled.button`
  min-width: 130px;
  height: 40px;
  color: #ffffff;
  background-color: ${props => props.disabled? '#cecece':'#50cd89'};
  border-radius: 0 3px 3px 0;
  border: 0;
  box-shadow: none;
  font-size: 15px;
  font-weight: 500;
  text-shadow: none;
`;