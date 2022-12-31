import React from "react";
import Header from "../Header";

const Settings = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <Header></Header>
      <h2>Update Your Account</h2>
      <div className="bg-blue-500 h-screen  flex items-center justify-center">
        <div className="bg-white px-4 py-6 rounded">
          <div>
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-700">
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
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
                    name="fathername"
                    id="fathername"
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
              </div>

              <div>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded mb-2"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
