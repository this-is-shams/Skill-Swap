import React from 'react'
import Sidebar from "./Sidebar";

export default function taskView() {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="h-screen w-screen dark:bg-slate-800 dark:text-white pl-72 pt-28">
                <div className=" items-center h-full">
                    <div className="bg-white w-full dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4">
                        <div className="mb-4">
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Task ID</p>
                            <p className="text-gray-600 dark:text-gray-300">Task Number Placeholder</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Date</p>
                            <p className="text-gray-600 dark:text-gray-300">Date Placeholder</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Task Title</p>
                            <p className="text-gray-600 dark:text-gray-300">Task Title Placeholder</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Description</p>
                            <p className="text-gray-600 dark:text-gray-300">Description Placeholder</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Resources</p>
                            <a href="#" className="text-blue-500 hover:underline">Link Placeholder</a>
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-gray-700 dark:text-gray-200">Completed</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import axios from 'axios';

// export default function TaskView() {
//   const [taskData, setTaskData] = useState([]);

//   useEffect(() => {
//     fetchTaskData();
//   }, []);

//   const fetchTaskData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/tasks');
//       const data = response.data;
//       setTaskData(data);
//     } catch (error) {
//       console.error('Error fetching task data:', error);
//       // Handle error state or display error message
//     }
//   };

//   return (
//     <div>
//       <Sidebar />
//       <div className="h-screen w-screen dark:bg-slate-800 dark:text-white pl-72 pt-28">
//         <div className="flex justify-center items-center h-full">
//           <div className="bg-white w-full dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4">
//             {taskData.map((task) => (
//               <div key={task.id} className="mb-4">
//                 <p className="font-semibold text-gray-700 dark:text-gray-200">Task ID</p>
//                 <p className="text-gray-600 dark:text-gray-300">{task.id}</p>

//                 <p className="font-semibold text-gray-700 dark:text-gray-200">Date</p>
//                 <p className="text-gray-600 dark:text-gray-300">{task.date}</p>

//                 <p className="font-semibold text-gray-700 dark:text-gray-200">Task Title</p>
//                 <p className="text-gray-600 dark:text-gray-300">{task.title}</p>

//                 <p className="font-semibold text-gray-700 dark:text-gray-200">Description</p>
//                 <p className="text-gray-600 dark:text-gray-300">{task.description}</p>

//                 <p className="font-semibold text-gray-700 dark:text-gray-200">Resources</p>
//                 <a href={task.link} className="text-blue-500 hover:underline">
//                   {task.link}
//                 </a>

//                 <div className="mb-4">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="form-checkbox" />
//                     <span className="ml-2 text-gray-700 dark:text-gray-200">Completed</span>
//                   </label>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
