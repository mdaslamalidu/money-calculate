import { FingerPrintIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
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
      </>
    </div>
  );
};

export default UserMenu;

// money - calculate;
// qjNlBN6csYLxJYJg;
