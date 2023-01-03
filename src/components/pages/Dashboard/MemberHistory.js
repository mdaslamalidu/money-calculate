import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const MemberHistory = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/getUser/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(user);

  const displayAmount = (userData) => {
    const usersData = userData.map((d) => d.amount + "//");
    return usersData;
  };
  const displayDate = (userData) => {
    const usersData = userData.map((d) => d.date + "//");
    return usersData;
  };

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold">
          History of {user.name}
        </h1>
        <div className="w-full md:w-2/3 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg mx-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <>
              <h2
                scope="row"
                class="py-4 px-6 font-medium text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span className="text-2xl font-bold mr-4">Name:</span>{" "}
                {user?.name}
              </h2>
              <h2
                scope="row"
                class="py-4 px-6 font-medium text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span className="text-2xl font-bold mr-4">PaymentType:</span>{" "}
                {user?.paymentType}
              </h2>
              <h2
                scope="row"
                class="py-4 px-6 font-medium text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span className="text-2xl font-bold mr-4">Payment:</span>{" "}
                {user?.paymentType && displayAmount(user?.depositAmountDate)}{" "}
              </h2>
              <h2
                scope="row"
                class="py-4 px-6 font-medium text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span className="text-2xl font-bold mr-4">PaymentDate:</span>{" "}
                {user?.paymentType && displayDate(user?.depositAmountDate)}{" "}
              </h2>
            </>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberHistory;
