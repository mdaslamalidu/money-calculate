import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../api/Users";
import Header from "../Header";

const AllPayments = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser()
      .then((data) => {
        const filtredData = data.filter((user) => user.depositAmountDate);
        setUsers(filtredData);
      })
      .catch((error) => console.log(error));
  }, []);

  const depositDate = (myDate) => {
    const lengthNumber = myDate.length - 1;
    const lastDate = myDate[lengthNumber]?.date;
    const date = lastDate?.split("-")[1];
    const year = lastDate?.split("-")[0];
    console.log(lastDate);

    if (date === "01") {
      return `JAN-${year}`;
    } else if (date === "02") {
      return `FEB-${year}`;
    } else if (date === "03") {
      return `MARCH-${year}`;
    } else if (date === "04") {
      return `APRIL-${year}`;
    } else if (date === "05") {
      return `MAY-${year}`;
    } else if (date === "06") {
      return `JUNE-${year}`;
    } else if (date === "07") {
      return `JULY-${year}`;
    } else if (date === "08") {
      return `AUGUST-${year}`;
    } else if (date === "09") {
      return `SEP-${year}`;
    } else if (date === "10") {
      return `OCT-${year}`;
    } else if (date === "11") {
      return `NOV-${year}`;
    } else if (date === "12") {
      return `DEC-${year}`;
    } else {
      return "No Month";
    }
  };

  const depositAmount = (amountData) => {
    const lengthNumber = amountData.length - 1;
    return amountData[lengthNumber]?.amount;
  };

  const depositLastDate = (lastDate) => {
    const lengthNumber = lastDate.length - 1;
    return lastDate[lengthNumber]?.date;
  };

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold">Payment History</h1>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Payment Type
                </th>
                <th scope="col" className="py-3 px-6">
                  Month
                </th>
                <th scope="col" className="py-3 px-6">
                  Payment Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                      {user?.paymentType}
                    </th>
                    <td class="py-4 px-6">
                      {depositDate(user?.depositAmountDate)}
                    </td>
                    <td class="py-4 px-6">
                      {depositLastDate(user?.depositAmountDate)}
                    </td>
                    <td class="py-4 px-6">
                      {depositAmount(user?.depositAmountDate)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPayments;
