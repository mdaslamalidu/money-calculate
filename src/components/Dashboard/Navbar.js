import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  FingerPrintIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import AdminMenu from "./AdminMenu";

const Navbar = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#297BFF] text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">AdminOx</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#297BFF] w-64 space-y-6 pl-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <h2 className="text-3xl cursor-pointer font-semibold text-center text-white">
            <Link to="/"> AdminOx</Link>
          </h2>
          <div className="flex flex-col items-center mt-6 -mx-2">
            <Link to="/dashboard">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src=""
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/dashboard">
              <h4 className="mx-2 mt-2 font-medium text-white hover:underline">
                Aslam
              </h4>
            </Link>
            <Link to="/dashboard">
              <p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
                mdaslamali675@gmail.com
              </p>
            </Link>
          </div>
          {/* nav items */}
          <AdminMenu></AdminMenu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
