import styled from "styled-components";

export const FilterAndAddWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 55px;
`;

export const FilterWrpr = styled.div`
  display: flex;
  align-content: center;
  gap: 14px;

  input {
    width: 224px;
    height: 44px;
    border-radius: 60px;
    padding: 0 18px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: var(--accent);
    border-radius: 60px;
    padding: 13px 30px;

    color: var(--white-text);
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Inter Medium";
  font-size: 14px;
  line-height: 1.28571;

  svg {
    width: 42px;
    height: 42px;
    padding: 13px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

export const BtnsWrpr = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 30px;
  border: 1px solid var(--accent);

  &.delete {
    border: 1px solid var(--accent2);
  }
`;
