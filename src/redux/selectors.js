export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;
export const selectAddProductModal = (state) =>
  state.modalsSlice.addProductModal;
export const selectEditProductModal = (state) =>
  state.modalsSlice.editProductModal;
export const selectDeleteProductModal = (state) =>
  state.modalsSlice.deleteProductModal;
export const selectAddSupplierModal = (state) =>
  state.modalsSlice.addSupplierModal;
export const selectEditSupplierModal = (state) =>
  state.modalsSlice.editSupplierModal;
export const selectLogoutModal = (state) => state.modalsSlice.logoutModal;
export const selectBurgerMenu = (state) => state.modalsSlice.burgerMenu;