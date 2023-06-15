import React from "react";
import { Link } from "react-router-dom";
import submit from "./assets/tas.png";
import forum from "./assets/forum.png";
import leader from "./assets/leader.png";
import prof from "./assets/prof.png";
import dash from "./assets/dash.png";

export default function MentorSidebar() {
  return (
    <div>
      <div
        className="bg-white dark:bg-slate-800 h-screen float-left fixed top-14 z-10 overflow-hidden"
        style={{ float: "left" }}
      >
        <div className="pt-20 p-6">
          <Link to="/men_dash">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={dash} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Dashboard</h1>
            </button>
          </Link>
          <Link to="/tasks">
            <button className="flex mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={submit} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Tasks</h1>
            </button>
          </Link>
          {/* <Link to="/development" className="flex items-center">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={forum} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Forum</h1>
            </button>
          </Link> */}
          <Link to="/mentorLeader" className="flex items-center">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={leader} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Leaderboard</h1>
            </button>
          </Link>
          <Link to="/mentorProfile" className="flex items-center">
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
