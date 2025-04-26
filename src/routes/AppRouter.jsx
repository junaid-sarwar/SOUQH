import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Overview from "../pages/Dashboard/Overview";
import Sales from "../pages/Dashboard/Sales";
import Products from "../pages/Dashboard/Products";
import Customers from "../pages/Dashboard/Customers";
import Settings from "../pages/Dashboard/Settings";
import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/Topbar";
import ProductDetails from "../pages/Dashboard/ProductDetails";
import UpdateProduct from "../pages/Dashboard/UpdateProducts";

export default function AppRouter() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  console.log("AppRouter Rendered");
  console.log("Redux State - isAuthenticated:", isAuthenticated);

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  if (isDashboardRoute && !isAuthenticated) {
    console.log(
      "User not authenticated, trying to access dashboard, redirect to /login"
    );
    return <Navigate to="/login" />;
  }

  console.log("User is authenticated, showing dashboard and routes");

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-6">
        <TopBar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Overview /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard/sales"
            element={isAuthenticated ? <Sales /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard/products"
            element={isAuthenticated ? <Products /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard/customers"
            element={isAuthenticated ? <Customers /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard/settings"
            element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard/products/:productId"
            element={
              isAuthenticated ? <ProductDetails /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/dashboard/update-product"
            element={
              isAuthenticated ? <UpdateProduct /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
