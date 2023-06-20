import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { getLoggedInMentee } from "./auth";

export default function TaskView() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    fetchTaskData();
  }, []);

  const fetchTaskData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/task");
      const data = response.data;

      const loggedInMenteeId = getLoggedInMentee();

      const filteredData = [];
      for (let i = 0; i < data.length; i++) {
        const task = data[i];

        if (
          task.menteeId.toString() === loggedInMenteeId.toString() ||
          task.menteeId === "All"
        ) {
          filteredData.push(task);
        }
      }
      setTaskData(filteredData);
    } catch (error) {
      console.error("Error fetching task data:", error);
      // Handle error state or display error message
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="h-screen w-screen dark:bg-slate-800 dark:text-white pl-72 pt-28">
        <div className="justify-center items-center h-full">
          <div className="bg-white w-full dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4">
            {taskData.map((task) => (
              <div key={task.id} className="mb-6 pb-10">
                <div>
                <p className="font-semibold text-gray-700 dark:text-gray-500">
                  #Task ID: {task.mTaskId}
                </p>
                <h2 className="text-2xl font-bold">{task.taskTitle}</h2>

                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-500">
                  Date: {task.date}
                </p>



                <div className="mt-5">
                <p className="text-gray-600 dark:text-gray-300">
                  {task.taskDescription}
                </p>
                </div>

               <div className="mt-5">
               <p className="font-semibold text-gray-700 dark:text-gray-200">
                  Resources
                </p>
                {task.resources.map((resource, index) => (
                  <p key={index} className="text-blue-500 hover:underline">
                    {resource}
                  </p>
                ))}
               </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
