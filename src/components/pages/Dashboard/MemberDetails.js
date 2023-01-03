import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const MemberDetails = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/getUser/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold">
          Details of {user.name}
        </h1>
        <div className="w-full md:w-4/5 mx-auto shadow-lg py-3 px-5">
          <div className="flex justify-center items-center">
            <img
              class="w-16 h-16 rounded-full"
              src={
                user?.imgURL
                  ? user?.imgURL
                  : "https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent-180x180.png"
              }
              alt="Rounded avatar"
            />
          </div>
          <div>
            <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
              Name: {user.name}
            </h1>
            <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
              Fathername: {user.fathername}
            </h1>
            <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
              Mothername: {user.mothername}
            </h1>
            <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
              PermanentAddress: {user.permanentAddress}
            </h1>
            <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
              PresentAddress: {user.presentAddress}
            </h1>
            <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
              PhoneNumber: {user.phoneNumber}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
