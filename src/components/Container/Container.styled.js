import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 80px;

  padding: 20px 40px 40px;

  overflow: auto;

  @media only screen and (max-width: 1439px) {
    width: 768px;

    left: 0;

    padding: 20px 32px 40px;
  }

  @media only screen and (max-width: 767px) {
    width: 375px;

    padding: 20px 20px 80px;
  }
`;
