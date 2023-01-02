import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../api/Users";
import Header from "../Header";

const Ladger = () => {
  const date = new Date().getFullYear();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser()
      .then((data) => {
        const filteredUser = data.filter(
          (filteredUser) => filteredUser.role === "member"
        );
        setUsers(filteredUser);
      })
      .catch((error) => console.log(error));
  }, []);

  const depositAmount = (user) => {
    let totalAmount = 0;
    for (let userAmount of user) {
      totalAmount += parseInt(userAmount.amount);
    }
    return totalAmount;
  };

  const UserSetup = (user) => {
    return (
      <>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          ></th>
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {user.user.name}
          </th>

          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {depositAmount(user.user.depositAmountDate)}
          </th>
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {user.user.depositAmountDate.length}{" "}
            {/* {user.user.depositAmountDate.length > 1 ? "Payments" : "Payment"} */}
          </th>
        </tr>
      </>
    );
  };

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold">Ladger {date}</h1>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  SL
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  TotalAmount
                </th>
                <th scope="col" className="py-3 px-6">
                  TotalPayment
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.name}
                    </th>

                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {depositAmount(user.depositAmountDate)}
                    </th>
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.depositAmountDate.length}{" "}
                      {/* {user.user.depositAmountDate.length > 1 ? "Payments" : "Payment"} */}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ladger;
