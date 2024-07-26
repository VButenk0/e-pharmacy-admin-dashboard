import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";
import { dataReducer } from "./data/dataSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token", "email"],
};

const dataPersistConfig = {
  key: "data",
  storage,
  whitelist: [
    "statistics",
    "recentCustomers",
    "incomeExpenses",
    "orders",
    "products",
    "suppliers",
    "customers",
  ],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedDataReducer = persistReducer(dataPersistConfig, dataReducer);

export const store = configureStore({
  reducer: {
    authSlice: persistedAuthReducer,
    dataSlice: persistedDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
