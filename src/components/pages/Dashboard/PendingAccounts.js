import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../api/Users";

const PendingAccounts = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllUser().then((data) => {
      setUser(data);
    });
  }, []);
  return (
    <div>
      <h1>{user.length}</h1>
    </div>
  );
};

export default PendingAccounts;
