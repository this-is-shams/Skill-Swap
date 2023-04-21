import React from 'react'
import Sidebar from "./Sidebar";

export default function Development() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 h-screen w-full lg:w-1/5" style={{ float: "left" }}>
        <Sidebar/>
      </div>
      <div className="bg-white dark:bg-blue-800 h-screen w-full lg:w-4/5" style={{ float: "right" }}></div>
    </div>
  )
}
