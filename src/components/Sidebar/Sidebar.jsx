import { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../assets/sprite.svg";
import Modal from "../Modals/Modal/Modal";
import { Overlay } from "../Modals/Modal/Modal.styled";
import {
  SidebarContainer,
  SidebarStyled,
  BtnClose,
  SidebarLogoutWrpr,
} from "./Sidebar.styled";
import { LogoutBtn } from "../Header/Header.styled";
import { BtnsWrpr, StyledBtn } from "./SidebarMenu.styled";

const Sidebar = ({ burgerMenu, closeBurgerMenu }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModals = useCallback(() => {
    document.body.style.overflow = "auto";

    setIsModalOpen(false);
    setIsLogoutModalOpen(false);
    closeBurgerMenu();
  }, [closeBurgerMenu]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        closeModals();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModals, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModals();
    }
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
    setIsLogoutModalOpen(true);
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onBackdropClick}>
        <SidebarContainer>
          <Fade in={burgerMenu} timeout={700}>
            <SidebarStyled>
              <SidebarLogoutWrpr>
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
                <LogoutBtn onClick={handleLogoutClick}>
                  <svg width="16" height="16">
                    <use href={sprite + "#logout"}></use>
                  </svg>
                </LogoutBtn>
              </SidebarLogoutWrpr>

              <BtnClose type="button" onClick={closeModals}>
                <svg width={26} height={26}>
                  <use href={sprite + "#x"} />
                </svg>
              </BtnClose>
            </SidebarStyled>
          </Fade>
        </SidebarContainer>
      </Overlay>
      {isModalOpen && (
        <Modal
          modalIsOpen={isModalOpen}
          logoutModal={isLogoutModalOpen}
          closeModal={() => setIsModalOpen(false)}
          closeLogoutModal={() => setIsLogoutModalOpen(false)}
        />
      )}
    </>,
    document.getElementById("portal")
  );
};

export default Sidebar;
