import sprite from "../../assets/sprite.svg";
import { BtnsWrpr, SidebarWrpr, StyledBtn } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarWrpr>
      <BtnsWrpr>
        <StyledBtn to={"/dashboard"}>
          <svg width="16" height="16">
            <use href={sprite + "#dashboard"}></use>
          </svg>
        </StyledBtn>
        <StyledBtn to={"/orders"}>
          <svg width="16" height="16">
            <use href={sprite + "#orders"}></use>
          </svg>
        </StyledBtn>
        <StyledBtn to={"/products"}>
          <svg width="16" height="16">
            <use href={sprite + "#products"}></use>
          </svg>
        </StyledBtn>
        <StyledBtn to={"/suppliers"}>
          <svg width="16" height="16">
            <use href={sprite + "#customers"}></use>
          </svg>
        </StyledBtn>
        <StyledBtn to={"/customers"}>
          <svg width="16" height="16" fill="none">
            <use href={sprite + "#suppliers"}></use>
          </svg>
        </StyledBtn>
      </BtnsWrpr>
    </SidebarWrpr>
  );
};

export default Sidebar;
