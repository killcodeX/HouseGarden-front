import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 100px;
  margin-left: 250px;
  padding-bottom: 100px;
  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export const NoDataBanner = styled.div`
  display: flex;
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

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 0px;
`;

export const SideMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 82px;
  z-index: 10;
  background-color: white;
  width: 250px;
  height: 100vh;
  padding: 15px;
  border-right: 1px solid #c8beaa;
  transition: left 0.5s ease-out;

  @media (max-width: 480px) {
    top: 0;
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

export const SectionSubTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
`;
