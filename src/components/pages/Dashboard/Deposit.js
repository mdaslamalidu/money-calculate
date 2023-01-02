import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { addMoney, getAllUser, hostDataApi } from "../../../api/Users";
import Header from "../Header";

const Deposit = () => {
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const amount = form.amount.value;
    const message = form.message.value;
    const date = form.date.value;
    const paymentType = form.paymentType.value;
    const data = {
      amount,
      message,
      date,
      paymentType,
      email,
    };
    console.log(data);
    addMoney(data)
      .then((updateData) => {
        toast.success("Successfully Deposit");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUser()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="bg-slate-200 py-8 flex items-center">
        <div className="w-1/2 mx-auto bg-white py-4 px-8 rounded">
          <h2 className="text-2xl font-bold text-center">Deposit Money</h2>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Select Member
                </label>
                <select
                  id="small"
                  name="email"
                  class="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {users.map((user) => (
                    <option value={user.email}>
                      {user.name} {user.phoneNumber} {user.email}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Payment Type
                </label>
                <select
                  id="small"
                  name="paymentType"
                  class="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="ontime">On Time</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Month
                </label>
                <input
                  type="date"
                  name="date"
                  id="small"
                  placeholder="Enter Your Name Here"
                  className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="small"
                  required
                  placeholder="5000"
                  className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Message (Optional)
                </label>
                <textarea
                  className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="message"
                  id=""
                  cols="5"
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-3 rounded mb-2"
                type="submit"
              >
                Deposit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Deposit;
