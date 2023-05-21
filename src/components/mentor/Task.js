import { React, useState } from 'react'
import MentorSidebar from './MentorSidebar'
import 'react-datepicker/dist/react-datepicker.css';


export default function Task() {
    const currentDate = new Date();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
            setIsModalOpen(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <div><MentorSidebar /></div>
            <div className='dark:bg-slate-800 dark:text-white pl-60 mt-14 ml-10'>
                <div className='w-full h-full dark:bg-slate-800'>
                    <div className='dark:bg-slate-800 fixed bg-white w-full'>
                        <button className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleAddTask}>
                            Add Task
                        </button>
                    </div>

                    {isModalOpen && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                            <div className="bg-white w-1/3 p-4 rounded">
                                <h2 className="text-xl font-bold mb-4">Add Task</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskInput">
                                            Task:
                                        </label>
                                        <input
                                            type="text"
                                            id="taskInput"
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            value={newTask}
                                            onChange={(e) => setNewTask(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="h-screen dark:bg-slate-800 dark:text-white pt-20">
                        <div className="w-full h-full ">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-gray-200 dark:bg-slate-600 text-left py-2 px-4 flex justify-center items-center">Tasks ({currentDate.toDateString()})</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task, index) => (
                                        <tr key={index}>
                                            <td className="border py-2 px-4">{task}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
