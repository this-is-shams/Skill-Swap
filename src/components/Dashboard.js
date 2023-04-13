import React from "react";
import { Link } from "react-router-dom";
import submit from "../assets/submission.png";
import dev from "../assets/dev.png";
import leader from "../assets/leader.png";
import prof from "../assets/prof.png";

export default function Dashboard() {
  return (
    <div>
      <div
        className="bg-white dark:bg-gray-800 h-screen w-full lg:w-1/5"
        style={{ float: "left" }}
      >
        <div className="pt-20 p-6">
          <Link to="/problem">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={submit} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Problem Solving</h1>
            </button>
          </Link>
          <Link to="/" className="flex items-center">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={dev} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Development</h1>
            </button>
          </Link>
          <Link to="/" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={leader} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Leaderboard</h1>
          </button>
          </Link>
          <Link to="/" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={prof} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Profile</h1>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
