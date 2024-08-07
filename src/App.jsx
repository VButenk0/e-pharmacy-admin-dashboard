import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import PublicRoute from "./routesConfig/PublicRoute";
import PrivateRoute from "./routesConfig/PrivateRoute";
import { userInfoThunk } from "./redux/auth/operations";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage/AllOrdersPage"));
const AllProductsPage = lazy(() =>
  import("./pages/AllProductsPage/AllProductsPage")
);
const AllSuppliersPage = lazy(() =>
  import("./pages/AllSuppliersPage/AllSuppliersPage")
);
const CustomersDataPage = lazy(() =>
  import("./pages/CustomersDataPage/CustomersDataPage")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfoThunk());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
