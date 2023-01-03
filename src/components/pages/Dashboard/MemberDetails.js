import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const MemberDetails = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    fetch(`https://server-site-nu.vercel.app/getUser/${id}`)
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

        {user.length === 0 ? (
          <h2>loading...</h2>
        ) : (
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
            {user?.presentAddress ? (
              <div>
                <h1 className="text-2xl mb-2 mt-4 w-full bg-gray-200 py-2 px-2 rounded font-bold">
                  Name:{" "}
                  <span className="text-xl font-semibold mr-4">
                    {user.name}
                  </span>
                </h1>
                <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
                  Fathername:{" "}
                  <span className="text-xl font-semibold mr-4">
                    {user.fathername}
                  </span>
                </h1>
                <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
                  Mothername:{" "}
                  <span className="text-xl font-semibold mr-4">
                    {user.mothername}
                  </span>
                </h1>
                <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
                  PermanentAddress:{" "}
                  <span className="text-xl font-semibold mr-4">
                    {user.permanentAddress}
                  </span>
                </h1>
                <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
                  PresentAddress:{" "}
                  <span className="text-xl font-semibold mr-4">
                    {user.presentAddress}
                  </span>
                </h1>
                <h1 className="text-2xl mb-2 w-full bg-gray-200 py-2 px-2 rounded font-bold">
                  PhoneNumber:{" "}
                  <span className="text-xl font-semibold mr-4">
                    {user.phoneNumber}
                  </span>
                </h1>
              </div>
            ) : (
              <h1 className="text-center mt-4 text-2xl font-bold">
                Profile is incomplete
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberDetails;
