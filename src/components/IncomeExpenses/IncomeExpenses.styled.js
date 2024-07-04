import styled from "styled-components";

export const TypeWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 13.5px;
  border-radius: 40px;

  font-size: 14px;
  letter-spacing: -0.7px;

  &.expense {
    color: var(--accent2);
    background-color: var(--light-accent2);
  }
  &.income {
    color: var(--accent);
    background-color: var(--light-accent);
  }
  &.error {
    background-color: var(--border-color);
  }

  &.expense {
    color: var(--accent2);
  }
  &.income {
    color: var(--accent);
  }
`;
