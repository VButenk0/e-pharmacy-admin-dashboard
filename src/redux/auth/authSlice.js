import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "vendor@gmail.com",
    token: "",
    isLogged: true, // false
    isLoading: false,
    isError: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const authReducer = authSlice.reducer;
