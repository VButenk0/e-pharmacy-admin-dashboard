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
