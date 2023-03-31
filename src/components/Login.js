import React from "react";
import loginImg from "../assets/emne.gif";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="dark:bg-gray-800 grid grid-cols-1 sm:grid-cols-2 h-screen w-full pt-20 pb-10">
      <div className="hidden sm:block dark:bg-gray-800 ">
        <img className="w-full h-full object-cover p-10" src={loginImg} alt="" />
      </div>
      <div className="bg-white dark:bg-gray-800 flex flex-col justify-center">
        {/* <h2 className="text-4xl dark:text-gray-200 font-bold text-center pb-10">
          Welcome to the{" "}
          <span className=" text-blue-500 dark:text-blue-500">SKILL SWAP</span>
        </h2> */}
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-300 dark:bg-gray-900 p-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>User Type</label>
            <select
              id="userType"
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="text"
            >
              <option value="fjs">Mentor</option>
              <option value="sp">Mentee</option>
            </select>
          </div>
          <div className="flex flex-col dark:text-gray-200 py-2">
            <label>Username</label>
            <input
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col dark:text-gray-200 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg dark:bg-gray-700 mt-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between dark:text-gray-200 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="w-full my-5 py-2 bg-blue-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            <Link to="/dashboard" className="underline">
              Sign in
            </Link>
          </button>

          <h1 className="dark:text-gray-200 text-center">
            Don't have any account? Click on{" "}
            <Link to="/signup" className="underline">
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
