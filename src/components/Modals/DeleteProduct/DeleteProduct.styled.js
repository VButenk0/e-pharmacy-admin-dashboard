import styled from "styled-components";

export const DeleteModalWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const ButtonsWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    width: 133px;
    height: 44px;
    border-radius: 60px;
    color: var(--white-text);
    background-color: var(--accent2);
    border: 1px solid transparent;

    transition: all 0.3s;

    &:hover,
    &:active {
      background-color: var(--accent2-hover);
    }

    &.cancel {
      color: var(--trans-text);
      background-color: var(--border-color);
    }

    &.cancel:hover,
    &.cancel:active {
      color: var(--accent);
      background-color: transparent;
      border: 1px solid var(--accent);
    }
  }
`;
