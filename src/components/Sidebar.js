import React from "react";
import { Link } from "react-router-dom";
import submit from "../assets/submission.png";
import dev from "../assets/dev.png";
import leader from "../assets/leader.png";
import prof from "../assets/prof.png";
import dash from "../assets/dash.png";
import task from "../assets/tas.png";
import forum from "../assets/forum.png";

export default function Dashboard() {
  return (
    <div className="bg-white dark:bg-slate-800 h-screen fixed top-12 z-50 overflow-hidden;">
      <div className="pt-20 p-6">
        <Link to="/dashboard">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={dash} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Dashboard</h1>
          </button>
        </Link>
        {/* <Link to="/forum" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={forum} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Forum</h1>
          </button>
        </Link> */}
        <Link to="/taskview" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={task} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Task</h1>
          </button>
        </Link>
        <Link to="/problem">
          <button className="flex mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={submit} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Problem Solving</h1>
          </button>
        </Link>
        <Link to="/development" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={dev} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Development</h1>
          </button>
        </Link>
        <Link to="/leaderboard" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={leader} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Leaderboard</h1>
          </button>
        </Link>
        <Link to="/profile" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={prof} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Profile</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}
