import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context/Context";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { setUserDetails, URL, userLocalData, setUserLocalData } =
    useContext(myContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (isSignUp) {
      axios
        .post(`${URL}signup`, data)
        .then((response) => {
          if (response.data.success) {
            toast.success(`Welcome ${response.data.userData.name}`);
            setUserDetails(response.data.userData);
            localStorage.setItem("email", response.data.userData.email);
            localStorage.setItem("name", response.data.userData.name);
            setUserLocalData({
              name: response.data.userData.name,
              email: response.data.userData.email,
            });

            navigate("/");
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${URL}login`, data)
        .then((response) => {
          if (response.data.success) {
            toast.success(`Welcome Back ${response.data.userData.name}`);
            localStorage.setItem("email", response.data.userData.email);
            localStorage.setItem("name", response.data.userData.name);
            setUserLocalData({
              name: response.data.userData.name,
              email: response.data.userData.email,
            });
            setUserDetails(response.data.userData);
            navigate("/");
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-[95%] max-w-[450px] mx-auto bg-white flex flex-col p-3 md:p-8 mt-8 rounded-md shadow-md ">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h1 className="text-2xl font-semibold md:mb-2 text-center border-b-2 pb-2 border-gray-500">
          {isSignUp ? "Sign Up" : "Login"}
        </h1>
        {isSignUp ? (
          <div className="flex flex-col gap-3 p-2">
            <label className="block md:mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]{3,}$/,
                  message:
                    "Name must be at least 3 characters & contain only letters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm -mt-2">
                {errors.name.message}
              </p>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-3 p-2">
          <label className="block mb-1 font-semibold outline-0">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            autoComplete="off"
          />
          {errors.email && (
            <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 mb-2 p-2">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^[A-Z][a-zA-Z0-9@#$%^&*]{5,}$/,
                message: "Password Is Invalid",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm -mt-2 ">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="">
          {isSignUp ? (
            <div className=" flex gap-5 items-center border-b-2 pb-4 p-2">
              <button
                className=" bg-blue-500 w-full text-white p-2  cursor-pointer rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="border-b-2 pb-4 p-2">
              <button
                className=" bg-blue-500 w-full text-white p-2  cursor-pointer  rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          )}
          {isSignUp ? (
            <p
              className="mt-3 text-sm cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Already have an account?
              <span className="pl- text-blue-500"> Login</span>
            </p>
          ) : (
            <p
              className="mt-3 text-sm cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Don't have an account?{" "}
              <span className="pl- text-blue-500"> Sign up</span>
            </p>
          )}
        </div>
      </form>
      <button className=" bg-red-500 mt-5 text-white p-2 rounded cursor-pointer">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
