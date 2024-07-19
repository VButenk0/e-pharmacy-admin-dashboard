import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AllOrdersPage from "./pages/AllOrdersPage/AllOrdersPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import AllSuppliersPage from "./pages/AllSuppliersPage/AllSuppliersPage";
import CustomersDataPage from "./pages/CustomersDataPage/CustomersDataPage";
import { userInfoThunk } from "./redux/auth/operations";
import { selectIsLogged } from "./redux/selectors";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Navigate to="/dashboard" /> : children;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfoThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<AllOrdersPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/suppliers" element={<AllSuppliersPage />} />
          <Route path="/customers" element={<CustomersDataPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
