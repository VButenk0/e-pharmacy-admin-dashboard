import styled from "styled-components";

export const ModalWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ModalTitle = styled.h2`
  font-family: "Inter SemiBold";
  font-size: 24px;
  line-height: 1.16667;
`;

export const InputsWrpr = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 8px;
  grid-row-gap: 14px;
  padding-bottom: 40px;
`;

export const StyledInput = styled.input`
  width: 224px;
  height: 44px;
  border-radius: 60px;
  border: 1px solid var(--border-color);
  padding: 0 18px;

  font-family: "Inter Regular";
  font-size: 12px;
  line-height: 1.5;

  &::placeholder {
    color: var(--trans-text);
  }
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
    background-color: var(--accent);
    border: 1px solid transparent;

    transition: all 0.3s;

    &:hover,
    &:active {
      background-color: var(--accent-hover);
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
