import { FingerPrintIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AdminMenu = () => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>

          <span className="mx-4 font-medium">Ladger</span>
        </NavLink>
        <NavLink
          to="/dashboard/pendingAccounts"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <span className="mx-4 font-medium">Pending Accounts</span>
        </NavLink>
        <NavLink
          to="/dashboard/deposit"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
            />
          </svg>

          <span className="mx-4 font-medium">Deposit</span>
        </NavLink>
        <NavLink
          to="/dashboard/paymentList"
          className={({ isActive }) =>
            `flex items-center pl-4 py-2 mt-3  transition-colors rounded-l-lg duration-300 transform  hover:bg-white   hover:text-blue-700 ${
              isActive ? "bg-white  text-[#297BFF]" : "text-white"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

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

export default AdminMenu;
