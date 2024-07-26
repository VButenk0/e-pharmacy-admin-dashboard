export const selectEmail = (state) => state.authSlice.email;
export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectToken = (state) => state.authSlice.token;

export const selectStatistics = (state) => state.dataSlice.statistics;
export const selectRecentCustomers = (state) => state.dataSlice.recentCustomers;
export const selectIncomeExpenses = (state) => state.dataSlice.incomeExpenses;
export const selectOrders = (state) => state.dataSlice.orders;
export const selectProducts = (state) => state.dataSlice.products;
export const selectSuppliers = (state) => state.dataSlice.suppliers;
export const selectCustomers = (state) => state.dataSlice.customers;
export const selectCustomerInfo = (state) => state.dataSlice.customerInfo;
export const selectSelectedItem = (state) => state.dataSlice.selectedItem;
export const selectPaginPage = (state) => state.dataSlice.paginPage;

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