import styled from "styled-components";

export const StatisticBlocksWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding-bottom: 40px;
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
`;

export const BlockTitleWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: var(--trans-text);

    font-family: "Inter Regular";
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const StatText = styled.p`
  font-family: "Inter SemiBold";
  font-size: 24px;
  line-height: 1.33333;
`;
