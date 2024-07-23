import styled from "styled-components";

export const LogoutWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const LogoutBtn = styled.button`
  align-self: center;
  width: 50%;
  height: 52px;
  border-radius: 60px;
  color: var(--white-text);
  background-color: var(--accent2);
  border: 1px solid transparent;

  transition: all 0.3s;

  &:hover,
  &:active {
    background-color: var(--accent2-hover);
  }
`;
