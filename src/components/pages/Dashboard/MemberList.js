import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUser, makeHost } from "../../../api/Users";
import Header from "../Header";

const MemberList = () => {
  const [users, setUsers] = useState([]);

  const handleApproved = (user) => {
    makeHost(user).then(() => {
      hostUser();
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        hostUser();
      })
      .catch((error) => console.log(error.message));
  };

  const hostUser = () => {
    getAllUser().then((users) => {
      const pendingUser = users.filter((user) => user.role === "member");
      setUsers(pendingUser);
    });
  };

  useEffect(() => {
    hostUser();
  }, []);

  return (
    <div>
      <Header></Header>
      {users.length === 0 ? (
        <h1 className="my-4 text-center text-2xl font-bold">
          No Pending Member
        </h1>
      ) : (
        <div>
          <h1 className="my-4 text-center text-2xl font-bold">Member List</h1>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Image
                  </th>
                  <th scope="col" className="py-3 px-6">
                    name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Total Amount
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Details
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
                          <img
                            class="w-10 h-10 rounded-full"
                            src={
                              user?.imgURL
                                ? "user?.imgURL"
                                : "https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent-180x180.png"
                            }
                            alt="Rounded avatar"
                          />
                        </th>
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {user.name}
                        </th>
                        <td class="py-4 px-6">{user.email}</td>
                        <td class="py-4 px-6">{user.email}</td>
                        <td class="py-4 px-6">
                          <Link
                            to={`/dashboard/memberList/history/${user?._id}`}
                          >
                            <button className="bg-blue-600 text-white py-1 px-2 rounded">
                              Accounts
                            </button>
                          </Link>
                        </td>
                        <td class="py-4 px-6 ">
                          <Link
                            to={`/dashboard/memberList/details/${user?._id}`}
                          >
                            <button className="bg-red-600 text-white py-1 px-2 rounded">
                              Show
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
