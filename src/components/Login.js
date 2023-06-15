import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/emne.gif";
import { useRef, useState } from "react";
import { setLoggedInMentee } from "./auth";
import { setLoggedInmentor } from "./auth";
import { setuserType } from "./auth";

export default function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const [uType, setUserType] = useState("");
  const userTypeRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pass = passRef.current.value;

    if (uType === "mentor") {
      const url = `http://localhost:5000/signin/mentor/${user}/${pass}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.statusCode === 200) {
            setLoggedInmentor(user);
            setuserType(uType);
            navigate("/men_dash");
          } else {
            setError("Invalid username or password");
          }
        });
    } else {
      const url = `http://localhost:5000/signin/mentee/${user}/${pass}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.statusCode === 200) {
            setLoggedInMentee(user);
            setuserType(uType);
            navigate("/dashboard");
            e.target.reset();
          } else {
            setError("Invalid username or password");
          }
        });
    }
  };

  return (
    <div className="dark:bg-gray-800 grid grid-cols-1 sm:grid-cols-2 h-screen w-full pt-20 pb-10">
      <div className="hidden sm:block dark:bg-gray-800 ">
        <img className="w-full h-full object-cover p-10" src={loginImg} alt="" />
      </div>
      <div className="bg-white dark:bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSignin}
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-300 dark:bg-gray-900 p-8"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">SIGN IN</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>User Type</label>
            <select
              ref={userTypeRef}
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="text"
              value={uType}
              onChange={handleUserTypeChange}
            >
              <option>Please select...</option>
              <option value="mentor">Mentor</option>
              <option value="mentee">Mentee</option>
            </select>
          </div>
          <div className="flex flex-col dark:text-gray-200 py-2">
            <label>Username</label>
            <input
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="text"
              ref={userRef}
            />
          </div>
          <div className="flex flex-col dark:text-gray-200 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg dark:bg-gray-700 mt-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="password"
              ref={passRef}
            />
          </div>
          <div className="flex justify-between dark:text-gray-200 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="w-full my-5 py-2 bg-blue-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign in
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
