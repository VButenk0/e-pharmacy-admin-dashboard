import { createSlice } from "@reduxjs/toolkit";
import {
  addProductThunk,
  addSupplierThunk,
  deleteProductThunk,
  editProductThunk,
  editSupplierThunk,
  getCustomerInfoThunk,
  getCustomersThunk,
  getDashboardInfoThunk,
  getOrdersThunk,
  getProductsThunk,
  getSuppliersThunk,
} from "./operations";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    statistics: { allProducts: 0, allSuppliers: 0, allCustomers: 0 },
    recentCustomers: [],
    incomeExpenses: [],
    orders: [],
    products: [],
    suppliers: [],
    customers: [],
    customerInfo: {},
    selectedItem: {},
    paginPage: 1,
    isLoading: false,
    isError: null,
  },

  reducers: {
    changeSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
    },
    changePaginPage: (state, { payload }) => {
      state.paginPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardInfoThunk.fulfilled, (state, { payload }) => {
        state.statistics.allProducts = payload.statistics.allProducts;
        state.statistics.allSuppliers = payload.statistics.allSuppliers;
        state.statistics.allCustomers = payload.statistics.allCustomers;
        state.recentCustomers = payload.recentCustomers;
        state.incomeExpenses = payload.incomeExpenses;
      })
      .addCase(getOrdersThunk.fulfilled, (state, { payload }) => {
        state.orders = payload;
      })
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(addProductThunk.fulfilled, (state, { payload }) => {
        state.products.push(payload);
      })
      .addCase(editProductThunk.fulfilled, (state, { payload }) => {
        const productToUpdate = state.products.indexOf(
          (product) => product._id === payload._id
        );
        if (productToUpdate) {
          state.products[productToUpdate] = payload;
        }
      })
      .addCase(deleteProductThunk.fulfilled, (state, { payload }) => {
        state.products = state.products.filter(
          (product) => product._id !== payload
        );
      })
      .addCase(getSuppliersThunk.fulfilled, (state, { payload }) => {
        state.suppliers = payload;
      })
      .addCase(addSupplierThunk.fulfilled, (state, { payload }) => {
        state.suppliers.push(payload);
      })
      .addCase(editSupplierThunk.fulfilled, (state, { payload }) => {
        const supplierToUpdate = state.products.indexOf(
          (supplier) => supplier._id === payload._id
        );
        if (supplierToUpdate) {
          state.suppliers[supplierToUpdate] = payload;
        }
      })
      .addCase(getCustomersThunk.fulfilled, (state, { payload }) => {
        state.customers = payload;
      })
      .addCase(getCustomerInfoThunk.fulfilled, (state, { payload }) => {
        state.customerInfo = payload;
      });
  },
});

export const { changeSelectedItem, changePaginPage } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
