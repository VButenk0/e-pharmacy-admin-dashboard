import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import Global from "./styles/common.js";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import Toast from "./components/Toast/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/e-pharmacy-admin-dashboard">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
        <Toast />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
