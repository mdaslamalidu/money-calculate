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
    // const tag = document.createElement("td");
    // // user.depositAmountDate.forEach((amountDate) => {
    // //   console.log(amountDate.amount);
    // //   tag.appendChild = `<th>${amountDate.amount}</th>`;
    // //   // console.log(user.depositAmountDate);
    // //   // for (let amount of user.depositAmountDate) {
    // //   //   tag.appendChild = `<th>${amount.amount}</th>`;
    // //   // }
    // });
    // // return tag;
    // console.log(tag);
  };

  const UserSetup = (user, index) => {
    console.log(user, index);
    return (
      <>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {index.index}
          </th>
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {user.user.name}
          </th>
          {/* {user.user.depositAmount.map((data) => data.amount)} */}
          <td class="py-4 px-6 td">
            {/* {user.depositAmount.map((data) => data.amount)} */}
          </td>
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
                  Jan
                </th>
                <th scope="col" className="py-3 px-6">
                  Feb
                </th>
                <th scope="col" className="py-3 px-6">
                  March
                </th>
                <th scope="col" className="py-3 px-6">
                  April
                </th>
                <th scope="col" className="py-3 px-6">
                  May
                </th>
                <th scope="col" className="py-3 px-6">
                  June
                </th>
                <th scope="col" className="py-3 px-6">
                  July
                </th>
                <th scope="col" className="py-3 px-6">
                  August
                </th>
                <th scope="col" className="py-3 px-6">
                  Sep
                </th>
                <th scope="col" className="py-3 px-6">
                  Oct
                </th>
                <th scope="col" className="py-3 px-6">
                  Nov
                </th>
                <th scope="col" className="py-3 px-6">
                  Dec
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <UserSetup user={user} index={index} key={index}></UserSetup>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ladger;
