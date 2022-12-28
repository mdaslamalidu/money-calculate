import React, { useContext, useEffect, useState } from "react";
import { getuser } from "../../../api/Users";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Header from "../Header";

const Home = () => {
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
      <Header></Header>
      <div className="bg-gray-300">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          <div className="bg-white my-4 mx-[5px] py-2 px-2 rounded flex justify-between items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-end font-medium">
              <h2>Total Amount</h2>
              <h2>0</h2>
              <h2>last update 28 dec 22</h2>
            </div>
          </div>
          <div className="bg-white my-4 py-2 mx-[5px] px-2 rounded flex justify-between items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="text-end font-medium">
              <h2>Total Member</h2>
              <h2>0</h2>
              <h2>last update 28 dec 22</h2>
            </div>
          </div>
          <div className="bg-white my-4 py-2 mx-[5px] px-2 rounded flex justify-between items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-end font-medium">
              <h2>Amount of This Month</h2>
              <h2>0</h2>
              <h2>last update 28 dec 22</h2>
            </div>
          </div>
          <div className="bg-white my-4 py-2 mx-[5px] px-2 rounded flex justify-between items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 text-blue-500 rounded-full border-4 border-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </div>
            <div className="text-end font-medium">
              <h2>Unpaid of This Month</h2>
              <h2>0</h2>
              <h2>last update 28 dec 22</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center font-bold px-4">
          <h1 className="text-7xl absolute top-1/2 text-gray-400">
            Welcome to{" "}
            <span className="text-blue-600">
              {role === "admin" ? "Admin" : "Member"}
            </span>{" "}
            Dashborad
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;