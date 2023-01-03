import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const MemberHistory = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold">History of</h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Type
                </th>
                <th scope="col" className="py-3 px-6">
                  Month
                </th>
                <th scope="col" className="py-3 px-6">
                  Deposit Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ></th>
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ></th>
                <td class="py-4 px-6"></td>
                <td class="py-4 px-6"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberHistory;
