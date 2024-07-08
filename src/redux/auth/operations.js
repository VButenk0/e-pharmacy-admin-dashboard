import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/configAxios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      //   toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await api.post("api/auth/logout");
      clearToken();
      //   toast.success("Logout successfully");
    } catch (error) {
      //   toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userInfoThunk = createAsyncThunk(
  "auth/userInfo",
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await api.patch(`api/auth/user`, credentials);
      return data;
    } catch (error) {
      //   toast.error(error.message);
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
