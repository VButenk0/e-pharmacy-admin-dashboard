import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrpr = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;

  position: fixed;
  top: 81px;
  left: 0;
  z-index: 10;

  padding: 40px 18px;

  background-color: var(--bg-color);
  border-right: 1px solid var(--border-color);
`;

export const BtnsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const StyledBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: var(--white);

  svg {
    fill: var(--secondary-text);
    transition: all 0.2s;
  }

  &.active svg {
    fill: var(--accent);
  }

  &:hover {
    svg {
      fill: var(--accent);
    }
  }
`;
