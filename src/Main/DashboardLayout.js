import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex-1 md:ml-64">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
