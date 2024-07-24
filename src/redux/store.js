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
import { modalsReducer } from "./modals/modalsSlice";

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

const modalsPersistConfig = {
  key: "modals",
  storage,
  whitelist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedDataReducer = persistReducer(dataPersistConfig, dataReducer);

const persistedModalsReducer = persistReducer(
  modalsPersistConfig,
  modalsReducer
);

export const store = configureStore({
  reducer: {
    authSlice: persistedAuthReducer,
    dataSlice: persistedDataReducer,
    modalsSlice: persistedModalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
