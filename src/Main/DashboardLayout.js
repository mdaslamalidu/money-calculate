import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getuser } from "../api/Users";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Dashboard/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    getuser(user?.email).then((data) => {
      console.log(data.role);
      setRole(data.role);
      setLoading(false);
    });
  }, [user]);
  return (
    <div>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <>
          <div>
            <Navbar role={role}></Navbar>
          </div>
          <div className="flex-1 md:ml-64">
            <Outlet></Outlet>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
