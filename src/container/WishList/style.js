import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
  min-height:600px;
`;

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight:500;
  margin-top: 0px;
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