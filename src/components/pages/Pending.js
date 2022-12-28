import React from "react";
import { Link } from "react-router-dom";

const Pending = () => {
  return (
    <div>
      <h2>Your request is pending....wait for admin approval</h2>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Pending;
