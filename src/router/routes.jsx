import App from "@/App";
// import OrderDetails from "@/components/Orders/OrderDetails";
import AdminDashboard from "@/layout/AdminDashboard";
import AddProduct from "@/pages/AddProduct";
import AnnouncementPage from "@/pages/AnnouncementPage";
import CreateAnnouncementPage from "@/pages/CreateAnnouncementPage";
import Dashboard from "@/pages/Dashboard";
import OrderList from "@/pages/Order/OrderList";
import PlaceOrder from "@/pages/Order/PlaceOrder";
import EditProduct from "@/pages/Product/EditProduct";
import ProductCategoryList from "@/pages/Product/ProductCategoryList";
import ProductDetailsPage from "@/pages/Product/ProductDetailsPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import UserList from "@/pages/User/UserList";



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
        path: "/admin-dashboard/place-order",
        element: <PlaceOrder></PlaceOrder>
      },
      {
        path: "/admin-dashboard/order-list",
        element: <OrderList></OrderList>
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
        path: "/admin-dashboard/product/edit-product",
        element: <EditProduct></EditProduct>,
      },
      {
        path: "/admin-dashboard/product/details",
        element: <ProductDetailsPage></ProductDetailsPage>,
      },
      {
        path: "/admin-dashboard/product/category",
        element: <ProductCategoryList></ProductCategoryList>,
      },
      {
        path: "/admin-dashboard/product/announcement",
        element: <AnnouncementPage></AnnouncementPage>,
      },
      {
        path: "/admin-dashboard/product/create-announcement",
        element: <CreateAnnouncementPage></CreateAnnouncementPage>,
      },
      // {
      //   path: "/admin-dashboard/product/order-details",
      //   element: <OrderDetails/>
      // },
      {
        path: '/admin-dashboard/user',
        element: <UserList></UserList>
      }
    ],
  },
]);
