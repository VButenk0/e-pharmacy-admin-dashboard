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

  input,
  select {
    width: 224px;
    height: 44px;
    border-radius: 60px;
    border: 1px solid var(--border-color);
    padding: 0 18px;
  }

  input::placeholder {
    color: var(--trans-text);
  }

  select {
    color: var(--primary-text);
  }

  select option[value=""][disabled] {
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

    &.cancel {
      color: var(--trans-text);
      background-color: var(--border-color);
    }
  }
`;
