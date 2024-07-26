import { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../../assets/sprite.svg";
import AddEditProduct from "../AddEditProduct/AddEditProduct";
import AddEditSupplier from "../AddEditSupplier/AddEditSupplier";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import Logout from "../Logout/Logout";
import { BtnClose, ModalContainer, ModalStyled, Overlay } from "./Modal.styled";

const Modal = ({
  modalIsOpen,
  addProductModal,
  editProductModal,
  deleteProductModal,
  addSupplierModal,
  editSupplierModal,
  logoutModal,
  closeModal,
  closeAddProductModal,
  closeEditProductModal,
  closeDeleteProductModal,
  closeAddSupplierModal,
  closeEditSupplierModal,
  closeLogoutModal,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModals = useCallback(() => {
    document.body.style.overflow = "auto";
    closeModal();
    if (addProductModal || editProductModal || deleteProductModal) {
      closeAddProductModal();
      closeEditProductModal();
      closeDeleteProductModal();
    }
    if (addSupplierModal || editSupplierModal) {
      closeAddSupplierModal();
      closeEditSupplierModal();
    }
    if (logoutModal) {
      closeLogoutModal();
    }
  });

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

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onBackdropClick}>
        <ModalContainer>
          <Fade in={modalIsOpen} timeout={700}>
            <ModalStyled>
              {(addProductModal || editProductModal) && (
                <AddEditProduct
                  addProductModal={addProductModal}
                  closeModals={closeModals}
                />
              )}
              {deleteProductModal && (
                <DeleteProduct closeModals={closeModals} />
              )}
              {(addSupplierModal || editSupplierModal) && (
                <AddEditSupplier
                  addSupplierModal={addSupplierModal}
                  closeModals={closeModals}
                />
              )}
              {logoutModal && <Logout closeModals={closeModals} />}

              <BtnClose type="button" onClick={closeModals}>
                <svg width={26} height={26}>
                  <use href={sprite + "#x"} />
                </svg>
              </BtnClose>
            </ModalStyled>
          </Fade>
        </ModalContainer>
      </Overlay>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
