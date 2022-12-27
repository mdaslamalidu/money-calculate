import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Signup = () => {
  const [userEmail, setUserEmail] = useState("");
  const {
    createUser,
    updateUserProfile,
    verifyEmail,
    signInWithGoogle,
    setLoading,
    loading,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSingIn = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    // const image = event.target.image.files[0];
    const password = event.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Create User Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-blue-500 h-screen  flex items-center justify-center">
      <div className="w-[400px] bg-white px-4 py-6 rounded">
        <div>
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-700">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSingIn}
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
              {/* <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input type="file" id="image" name="image" required />
              </div> */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  onBlur={(e) => setUserEmail(e.target.value)}
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
  );
};

export default Signup;
