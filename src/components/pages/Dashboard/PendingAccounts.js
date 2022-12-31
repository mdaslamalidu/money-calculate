import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUser } from "../../../api/Users";
import Header from "../Header";

const PendingAccounts = () => {
  const [users, setUsers] = useState([]);

  const handleApproved = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  useEffect(() => {
    getAllUser().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <Header></Header>
      <h1 className="my-4 text-center text-2xl font-bold">Member List</h1>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.name}
                    </th>
                    <td class="py-4 px-6">{user.email}</td>
                    <td class="py-4 px-6">
                      <button
                        onClick={() => handleApproved(user._id)}
                        className="bg-blue-600 text-white py-1 px-2 rounded"
                      >
                        {user.role === "requested" ? "Pending" : "Approved"}
                      </button>
                    </td>
                    <td class="py-4 px-6 ">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-600 text-white py-1 px-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAccounts;
