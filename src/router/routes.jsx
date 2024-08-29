import App from "@/App";
import AdminDashboard from "@/layout/AdminDashboard";
import AddProduct from "@/pages/AddProduct";
import Dashboard from "@/pages/Dashboard";
import ProductDetailsPage from "@/pages/Product/ProductDetailsPage";
import ProductListPage from "@/pages/Product/ProductListPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/admin-dashboard/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin-dashboard/product/list",
        element: <ProductListPage />,
      },
      {
        path: "/admin-dashboard/product/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/admin-dashboard/product/details",
        element: <ProductDetailsPage></ProductDetailsPage>,
      },
    ],
  },
]);
