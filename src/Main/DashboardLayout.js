import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getuser } from "../api/Users";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Dashboard/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [UserRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getuser(user?.email).then((data) => {
      setUserRole(data);
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
            <Navbar UserRole={UserRole}></Navbar>
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
