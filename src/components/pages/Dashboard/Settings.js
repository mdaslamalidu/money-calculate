import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getuser, hostDataApi } from "../../../api/Users";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Header from "../Header";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [updateUser, setUpdateUser] = useState("");

  useEffect(() => {
    getuser(user?.email)
      .then((data) => setUpdateUser(data))
      .catch((error) => console.log(error.message));
  }, [user?.email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const fathername = form.fathername.value;
    const mothername = form.mothername.value;
    const presentAddress = form.presentAddress.value;
    const permanentAddress = form.permanentAddress.value;
    const email = form.email.value;
    const nidNumber = form.nidNumber.value;
    const phoneNumber = form.phoneNumber.value;
    const image = form.image.files[0];
    const password = form.password.value;
    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=dcca9949ed124ec4ad8d08fc11efcf29";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const usersInfo = {
          email,
          name,
          password,
          phoneNumber,
          presentAddress,
          permanentAddress,
          nidNumber,
          fathername,
          mothername,
          imgURl: data.data.display_url,
        };
        hostDataApi(usersInfo)
          .then((data) => {
            toast.success("Update Your Information");
            form.reset();
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Header></Header>
      <div className="bg-gray-200 py-8">
        <div className="bg-white p-6 mx-8 rounded">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Update</h1>
            <p className="text-sm text-gray-700">
              Update Your Account With Prev Information
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={updateUser?.name}
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Father's Name
                </label>
                <input
                  type="text"
                  name="fathername"
                  id="fathername"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Mother's Name
                </label>
                <input
                  type="text"
                  name="mothername"
                  id="mothername"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Present address
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  id="presentAddress"
                  required
                  placeholder="Your Present Address"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Permanent address
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  id="permanentAddress"
                  required
                  placeholder="Your Permanent Address"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Nid Number
                  </label>
                </div>
                <input
                  type="number"
                  name="nidNumber"
                  id="nidNumber"
                  required
                  placeholder="8574*******"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Phone Number
                  </label>
                </div>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="+88017********"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-blue-300 focus:outline-blue-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input type="file" id="image" name="image" required />
              </div>
            </div>

            <div>
              <button
                className="w-full bg-blue-600 text-white py-3 rounded mb-2"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
