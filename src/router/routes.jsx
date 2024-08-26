import App from "@/App";
import AdminDashboard from "@/layout/AdminDashboard";
import Dashboard from "@/pages/Dashboard";
import {createBrowserRouter} from "react-router-dom";
  


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: 'admin-dashboard',
      element: <AdminDashboard></AdminDashboard>,
      children: [
        {
          path: '/admin-dashboard/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ]);