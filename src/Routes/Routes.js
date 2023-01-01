import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import AllPayments from "../components/pages/Dashboard/AllPayments";
import Deposit from "../components/pages/Dashboard/Deposit";
import Home from "../components/pages/Dashboard/Home";
import Ladger from "../components/pages/Dashboard/Ladger";
import MemberDetails from "../components/pages/Dashboard/MemberDetails";
import MemberHistory from "../components/pages/Dashboard/MemberHistory";
import MemberList from "../components/pages/Dashboard/MemberList";
import PendingAccounts from "../components/pages/Dashboard/PendingAccounts";
import Settings from "../components/pages/Dashboard/Settings";
import Header from "../components/pages/Header";
import Pending from "../components/pages/Pending";
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
    path: "/pending",
    element: <Pending></Pending>,
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
      {
        path: "/dashboard/pendingAccounts",
        element: <PendingAccounts></PendingAccounts>,
      },
      {
        path: "/dashboard/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/dashboard/memberList",
        element: <MemberList></MemberList>,
      },
      {
        path: "/dashboard/paymentList",
        element: <AllPayments></AllPayments>,
      },
      {
        path: "/dashboard/deposit",
        element: <Deposit></Deposit>,
      },
      {
        path: "/dashboard/memberList/history/:id",
        element: <MemberHistory></MemberHistory>,
        loader: (params) =>
          fetch(
            `http://localhost:3000/dashboard/memberList/history/${params.id}`
          ),
      },
      {
        path: "/dashboard/memberList/details/:id",
        element: <MemberDetails></MemberDetails>,
        loader: (params) =>
          fetch(
            `http://localhost:3000/dashboard/memberList/details/${params.id}`
          ),
      },
    ],
  },
]);
