import styled from "styled-components";

export const AddSupBtn = styled.button`
  padding: 13px 30px;
  border-radius: 60px;
  border: 1px solid var(--accent);

  font-family: "Inter Medium";
  font-size: 14px;
  line-height: 1.28571;

  transition: all 0.3s;

  &:hover,
  &:active {
    border: 1px solid var(--accent-hover);
    background-color: var(--light-accent);
  }
`;

export const StatusWrpr = styled.div`
  width: 89px;
  border-radius: 40px;
  padding: 4px 0;

  font-size: 14px;
  letter-spacing: -0.7px;
  text-align: center;

  &.active {
    color: var(--accent);
    background-color: var(--completed-bg);
  }
  &.deactive {
    color: var(--accent2);
    background-color: var(--cancelled-bg);
  }
`;

export const SupEditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 17px;
  border-radius: 30px;
  border: 1px solid var(--accent);

  color: var(--accent);
`;
