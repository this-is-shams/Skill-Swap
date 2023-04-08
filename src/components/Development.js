import React from 'react'
import { Link } from "react-router-dom";

export default function Development() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 h-screen w-full lg:w-1/5" style={{ float: "left" }}>
        <div className="pt-20 p-6">
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <Link to="/problem">
            <h1>Problem Solving</h1>
            </Link>
          </button>
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
          <Link to="/development">
          <h1>Development</h1>
          </Link>
          </button>
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
          <h1>Leaderboard</h1>
          </button>
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            Profile
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-blue-800 h-screen w-full lg:w-4/5" style={{ float: "right" }}></div>
    </div>
  )
}
