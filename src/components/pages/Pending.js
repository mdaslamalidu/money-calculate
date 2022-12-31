import React from "react";
import { Link } from "react-router-dom";

const Pending = () => {
  return (
    <div className="bg-blue-500 h-screen  flex items-center justify-center">
      <div className="w-[500px] rounded-md bg-white text-black h-[400px] text-center px-8 pt-16">
        <h2 className="text-red-700 font-bold text-3xl">
          Your request is pending
          <br />
          Please wait for admin approval
        </h2>
        <div className="w-20 h-20 my-6 mx-auto border-8 border-dashed rounded-full animate-spin border-blue-600"></div>

        <Link to="/">
          <span className="w-full block bg-blue-600 py-4 text-white font-bold text-xl rounded">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Pending;
