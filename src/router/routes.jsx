import App from "@/App";
// import OrderDetails from "@/components/Orders/OrderDetails";
import AdminDashboard from "@/layout/AdminDashboard";
import AddProduct from "@/pages/AddProduct";
import AnnouncementPage from "@/pages/Annoucnement/AnnouncementPage";
import CreateAnnouncementPage from "@/pages/Annoucnement/CreateAnnouncementPage";
import OrderList from "@/pages/Order/OrderList";
import PlaceOrder2 from "@/pages/Order/PlaceOrder2";
import EditProduct from "@/pages/Product/EditProduct";
import ProductCategoryList from "@/pages/Product/ProductCategoryList";
import ProductDetailsPage from "@/pages/Product/ProductDetailsPage";
import ProductListPage from "@/pages/Product/ProductListPage";
import UserList from "@/pages/User/UserList";



import { createBrowserRouter } from "react-router-dom";
import DeliveryPage from "@/pages/DeliveryPage";
import Home from "@/pages/Admin Dashboard/Home";
import PromoCodeOne from "@/pages/PromoCode/PromoCode_1";
import SinglePromoDetails from "@/pages/PromoCode/SinglePromoDetails";
import AddPromoCode from "@/pages/PromoCode/AddPromoCode";

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
        path: "/admin-dashboard/home",
        element: <Home></Home>,
      },
      {
        path: "/admin-dashboard/place-order",
        element: <PlaceOrder2></PlaceOrder2>
      },
      {
        path: "/admin-dashboard/order-list",
        element: <OrderList></OrderList>,
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
      {
        path: "/admin-dashboard/delivery-charge",
        element: <DeliveryPage></DeliveryPage>,
      },
      {
        path: "/admin-dashboard/create-announccement",
        element: <CreateAnnouncementPage></CreateAnnouncementPage>,
      },
      // {
      //   path: "/admin-dashboard/product/order-details",
      //   element: <OrderDetails/>
      // },
      {
        path: '/admin-dashboard/user',
        element: <UserList></UserList>
      },

      //bijoy start
      {
        path: "/admin-dashboard/promo-code",
        element:<PromoCodeOne/>
      },
      {
        path: "/admin-dashboard/promo-code/:id",
        element:<SinglePromoDetails/>
      }, 
      {
        path: "/admin-dashboard/addpromo-code",
        element: <AddPromoCode/>
      }

      //bijoy end
    ],
  },
]);
