import styled from "styled-components";

export const StatisticBlocksWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding-bottom: 40px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`;

export const BlockWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 240px;

  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--white);

  padding: 14px 18px;
  &:first-of-type {
    border: 1px solid var(--accent);
  }

  @media only screen and (max-width: 1439px) {
    width: 221px;
  }

  @media only screen and (max-width: 767px) {
    width: 157px;
    gap: 32px;

    padding: 14px;
  }
`;

export const BlockTitleWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: var(--trans-text);

    font-family: "Inter Regular";
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    @media only screen and (max-width: 767px) {
      line-height: 1.16667;
    }
  }
`;

export const StatText = styled.p`
  font-family: "Inter SemiBold";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33333;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
