import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AllOrdersPage from "./pages/AllOrdersPage/AllOrdersPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import AllSuppliersPage from "./pages/AllSuppliersPage/AllSuppliersPage";
import CustomersDataPage from "./pages/CustomersDataPage/CustomersDataPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SharedLayout />}>
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
