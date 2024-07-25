import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/configAxios";

export const getDashboardInfoThunk = createAsyncThunk(
  "data/dashboard",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/dashboard");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOrdersThunk = createAsyncThunk(
  "data/orders",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/orders");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getProductsThunk = createAsyncThunk(
  "data/products",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/products");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  "data/addProduct",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/products", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editProductThunk = createAsyncThunk(
  "data/editProduct",
  async ({ _id, ...credentials }, thunkApi) => {
    try {
      const { data } = await api.put(`/products/${_id}`, credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "data/deleteProduct",
  async (id, thunkApi) => {
    try {
      const { data } = await api.delete(`/products/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSuppliersThunk = createAsyncThunk(
  "data/suppliers",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/suppliers");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addSupplierThunk = createAsyncThunk(
  "data/addSupplier",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/suppliers", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editSupplierThunk = createAsyncThunk(
  "data/editSupplier",
  async ({ _id, ...credentials }, thunkApi) => {
    try {
      const { data } = await api.put(`/suppliers/${_id}`, credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCustomersThunk = createAsyncThunk(
  "data/customers",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/customers");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCustomerInfoThunk = createAsyncThunk(
  "data/customerInfo",
  async (id, thunkApi) => {
    try {
      const { data } = await api.get(`/customers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
