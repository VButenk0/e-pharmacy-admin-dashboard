import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 84px;
  height: 100%;

  @media only screen and (max-width: 767px) {
    width: 78px;
  }
`;

export const SidebarStyled = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  z-index: 1000;
  background-color: var(--bg-color);
`;

export const BtnClose = styled.button`
  flex-shrink: 0;
  background-color: transparent;
  position: absolute;
  border: none;
  padding: 0;
  top: 20px;
  right: 14px;
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.4;
  }
`;

export const SidebarLogoutWrpr = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: space-between;
  padding: 92px 20px 20px;
`;
