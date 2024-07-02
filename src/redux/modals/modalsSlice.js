import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    isModalOpen: false,
    addProductModal: false,
    editProductModal: false,
    deleteProductModal: false,
    addSupplierModal: false,
    editSupplierModal: false,
    logoutModal: false,
    burgerMenu: false,
  },

  reducers: {
    changeModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    changeAddProductModal: (state, { payload }) => {
      state.addProductModal = payload;
    },
    changeEditProductModal: (state, { payload }) => {
      state.editProductModal = payload;
    },
    changeDeleteProductModal: (state, { payload }) => {
      state.deleteProductModal = payload;
    },
    changeAddSupplierModal: (state, { payload }) => {
      state.addSupplierModal = payload;
    },
    changeEditSupplierModal: (state, { payload }) => {
      state.editSupplierModal = payload;
    },
    changeLogoutModal: (state, { payload }) => {
      state.logoutModal = payload;
    },
    changeBurgerMenu: (state, { payload }) => {
      state.burgerMenu = payload;
    },
    closeModals: (state) => {
      state.isModalOpen = false;
      state.addProductModal = false;
      state.editProductModal = false;
      state.deleteProductModal = false;
      state.addSupplierModal = false;
      state.editSupplierModal = false;
      state.logoutModal = false;
      state.burgerMenu = false;
    },
  },
});

export const {
  changeModalOpen,
  changeAddProductModal,
  changeEditProductModal,
  changeDeleteProductModal,
  changeAddSupplierModal,
  changeEditSupplierModal,
  changeLogoutModal,
  changeBurgerMenu,
  closeModals,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
