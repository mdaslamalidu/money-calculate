import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Home from "../components/pages/Dashboard/Home";
import Ladger from "../components/pages/Dashboard/Ladger";
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
      {
        path: "/dashboard/home",
        element: <Home></Home>,
      },
      {
        path: "/dashboard/ladger",
        element: <Ladger></Ladger>,
      },
    ],
  },
]);
