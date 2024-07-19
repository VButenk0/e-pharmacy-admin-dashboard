import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, userInfoThunk } from "./operations";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
    token: "",
    isLogged: false,
    isLoading: false,
    isError: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.token = payload.token;
        localStorage.setItem("token", payload.token);
        state.isLogged = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.name = "";
        state.email = "";
        state.token = "";
        localStorage.removeItem("token");
        state.isLogged = false;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(userInfoThunk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.isLogged = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(userInfoThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
