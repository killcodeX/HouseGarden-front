import styled from "styled-components";

export const SideWarpper = styled.div`
  position: fixed;
  left: 0;
  top: 82px;
  z-index: 5;
  background-color: white;
  width: 250px;
  height: 100vh;
  padding: 15px;
  border-right:1px solid #c8beaa;
  transition: left 0.5s ease-out;

  @media(max-width:480px){
    top:0;
  }
`;

export const SideHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SideBarTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const SideBarHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
`;
