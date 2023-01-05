import { FingerPrintIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserMenu = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <>
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <FingerPrintIcon className="w-5 h-5" />

          <span className="mx-4 font-medium">Dashboard</span>
        </NavLink>
        <NavLink
          to="/dashboard/ladger"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <UserPlusIcon className="w-5 h-5" />

          <span className="mx-4 font-medium">Ladger</span>
        </NavLink>
        <NavLink
          to="/dashboard/paymentList"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <UserPlusIcon className="w-5 h-5" />

          <span className="mx-4 font-medium">Payment List</span>
        </NavLink>
        <NavLink
          to="/dashboard/memberList"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <UserPlusIcon className="w-5 h-5" />

          <span className="mx-4 font-medium">Member List</span>
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <UserPlusIcon className="w-5 h-5" />

          <span className="mx-4 font-medium">Settings/Profile</span>
        </NavLink>
        <div className="w-full mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white font-bold  hover:text-blue-700 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            LogOut
          </button>
        </div>
      </>
    </div>
  );
};

export default UserMenu;

// money - calculate;
// qjNlBN6csYLxJYJg;
