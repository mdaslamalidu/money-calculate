import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import AdminMenu from "./AdminMenu";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserMenu from "./UserMenu";

const Navbar = ({ UserRole }) => {
  const { logout } = useContext(AuthContext);
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

  console.log(UserRole);

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#297BFF] text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-2 font-bold">
            <Link to="/dashboard/home">
              {UserRole.role === "admin" ? "Admin" : "User"}
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-[#297BFF]"
        >
          {isActive ? (
            <Bars3Icon className="h-5 w-5" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#297BFF] w-48 md:w-64 space-y-6 pl-2 py-2 absolute inset-y-0 left-0 transform ${
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
              className="w-7 h-7 absolute bottom-1 left-4 md:left-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>

            <Link to="/dashboard/home">
              {UserRole.role === "admin" ? "Admin" : "User"}
            </Link>
          </h2>
          <div className="flex flex-col items-center mt-2 -mx-2">
            <Link to="/dashboard">
              <img
                className="object-cover w-16 h-16 mx-2 rounded-full border-2 border-white"
                src={
                  UserRole.imgURl
                    ? UserRole.imgURl
                    : "https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent-180x180.png"
                }
                alt="profile"
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/dashboard">
              <h4 className="mx-2 mt-1 font-medium text-white hover:underline">
                {UserRole.name}
              </h4>
            </Link>
            <Link to="/dashboard">
              <p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
                {UserRole.email}
              </p>
            </Link>
          </div>
          {/* nav items */}
          {UserRole.role === "admin" ? (
            <AdminMenu></AdminMenu>
          ) : (
            <UserMenu></UserMenu>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
