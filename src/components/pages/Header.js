import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";

const Header = () => {
  return (
    <div className="hidden md:block ">
      <div className="h-16 bg-[#333947] grid items-center">
        <div className="flex items-center justify-between text-white px-5">
          <div>
            <Bars3Icon className="h-6 w-6" />
          </div>
          <div className="relative">
            <input
              className="px-3 py-2 rounded-md outline-none text-black"
              type="search"
              name=""
              id=""
              placeholder="search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 absolute right-2 top-3 z-10 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="h-4 w-4 bg-red-600 flex items-center justify-center  rounded-lg absolute top-[-7px]">
              <h2 className="">4</h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
