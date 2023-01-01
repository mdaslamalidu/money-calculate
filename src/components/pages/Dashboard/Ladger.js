import React from "react";
import Header from "../Header";

const Ladger = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold">Ladger 2021</h1>

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
                <th scope="col" className="py-3 px-6">
                  March
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Aslam
                </th>
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

export default Ladger;
