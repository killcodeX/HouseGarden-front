import styled from "styled-components";

// w-80%, ml-250px

export const FooterWrapper = styled.footer`
  min-height: 50px;
  display: flex;
  align-items: center;
  width: ${(props) => (props.foot ? "80%" : "100%")};
  padding: 10px 25px;
  border-top: 1px solid #c8beaa;
  margin-left: ${(props) => (props.foot ? "250px" : "0")};

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
`;
