import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrpr = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;

  position: fixed;
  top: 79px;
  left: 0;

  padding: 40px 18px;

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

  transition: all 0.5s;

  svg {
    fill: var(--secondary-text);
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
