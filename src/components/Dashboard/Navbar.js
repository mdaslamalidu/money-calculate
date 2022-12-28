import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  FingerPrintIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import AdminMenu from "./AdminMenu";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserMenu from "./UserMenu";

const Navbar = ({ role }) => {
  const { user, logout } = useContext(AuthContext);
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#297BFF] text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-2 font-bold">
            <Link to="/">Admin</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-[#297BFF]"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#297BFF] w-64 space-y-6 pl-2 py-2 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <h2 className="text-3xl cursor-pointer font-semibold text-center text-white relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 absolute bottom-1 left-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>

            <Link to="/"> Admin</Link>
          </h2>
          <div className="flex flex-col items-center mt-2 -mx-2">
            <Link to="/dashboard">
              <img
                className="object-cover w-16 h-16 mx-2 rounded-full border-2 border-white"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDzbt50KeFVmvrPK2X34uWqGnEv9SsHqlULReqk7D&s"
                alt="profile"
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/dashboard">
              <h4 className="mx-2 mt-1 font-medium text-white hover:underline">
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
          {role === "admin" ? <AdminMenu></AdminMenu> : <UserMenu></UserMenu>}
          <div className="absolute bottom-5 w-full">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
