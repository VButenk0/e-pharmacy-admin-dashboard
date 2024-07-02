import { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../../assets/sprite.svg";
import { closeModals } from "../../../redux/modals/modalsSlice";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import EditProductData from "../EditProductData/EditProductData";
import Logout from "../Logout/Logout";
import AddNewSupplier from "../AddNewSupplier/AddNewSupplier";
import EditSupplierData from "../EditSupplierData/EditSupplierData";
import {
  selectAddProductModal,
  selectAddSupplierModal,
  selectDeleteProductModal,
  selectEditProductModal,
  selectEditSupplierModal,
  selectIsModalOpen,
  selectLogoutModal,
} from "../../../redux/selectors";
import { BtnClose, ModalContainer, ModalStyled, Overlay } from "./Modal.styled";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

const Modal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const addProductModal = useSelector(selectAddProductModal);
  const editProductModal = useSelector(selectEditProductModal);
  const deleteProductModal = useSelector(selectDeleteProductModal);
  const addSupplierModal = useSelector(selectAddSupplierModal);
  const editSupplierModal = useSelector(selectEditSupplierModal);
  const logoutModal = useSelector(selectLogoutModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";

    dispatch(closeModals(false));
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onBackdropClick}>
        <ModalContainer>
          <Fade in={modalIsOpen} timeout={700}>
            <ModalStyled>
              {addProductModal && <AddNewProduct />}
              {editProductModal && <EditProductData />}
              {deleteProductModal && <DeleteProduct />}
              {addSupplierModal && <AddNewSupplier />}
              {editSupplierModal && <EditSupplierData />}
              {logoutModal && <Logout />}

              <BtnClose type="button" onClick={closeModal}>
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
