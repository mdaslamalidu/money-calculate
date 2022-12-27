import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Header from "../components/pages/Header";
import DashboardLayout from "../Main/DashboardLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
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
