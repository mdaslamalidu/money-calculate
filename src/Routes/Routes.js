import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Header from "../components/pages/Header";
import DashboardLayout from "../Main/DashboardLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Header></Header>,
      },
    ],
  },
]);
