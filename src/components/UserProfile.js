import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chart from "react-google-charts";
import Streak from "./Streak";

export default function UserProfile() {
    const myString = window.location.href;
    const parts = myString.split("/");
    const username = parts.pop();
    const [toggleState, setToggleState] = useState(1);

    const pieData = [
        ["Task", "Hours per Day"],
        ["Development", 40],
        ["Problem Solving", 60],
    ];
    const pieOptions = {
        pieHole: 0.5,
        backgroundColor: "transparent",
        chartArea: {
            backgroundColor: "transparent",
        },
        textStyle: {
            color: "text-white dark:text-white",
        },
        legend: "none",
    };

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="dark:bg-slate-800">
            <div>
                <Sidebar />
            </div>
            <div className="h-screen dark:bg-slate-800 dark:text-white pl-60 pt-20">
                <div className="h-1/3 bg-blue-200"></div>
                <div className="h-screen dark:bg-slate-800 flex flex-col items-center">
                    <div className="dark:bg-slate-800 flex justify-center mt-8">
                        <button
                            className={`mr-4 p-4 text-lg font-semibold rounded-lg ${toggleState === 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-600"
                                }`}
                            onClick={() => toggleTab(1)}
                        >
                            Dashboard
                        </button>
                        <button
                            className={`mr-4 p-4 text-lg font-semibold rounded-lg ${toggleState === 2
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-600"
                                }`}
                            onClick={() => toggleTab(2)}
                        >
                            Problem Solving Record
                        </button>
                        <button
                            className={`p-4 text-lg font-semibold rounded-lg ${toggleState === 3
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-600"
                                }`}
                            onClick={() => toggleTab(3)}
                        >
                            Development Record
                        </button>
                    </div>
                    <div className="dark:bg-slate-800 flex-1 p-8">
                        <div
                            className={`${toggleState === 1 ? "block" : "hidden"
                                } text-center`}
                        >

                            <div className='h-auto w-90 m-10'>
                                <div className='w-full h-full flex flex-row'>
                                    <div className='w-1/2 h-full'>
                                        <div className='w-full h-1/2 overflow-hidden pr-60'>
                                            {/* Chart */}
                                            <Chart
                                                width={"700px"}
                                                height={"300px"}
                                                chartType="PieChart"
                                                loader={<div>Loading Chart</div>}
                                                data={pieData}
                                                options={pieOptions}
                                                rootProps={{ "data-testid": "3" }}
                                            />
                                        </div>
                                    </div>

                                    <div className='w-1/2 h-full flex justify-center items-center pt-14'>
                                        <div className='w-full h-1/2 overflow-hidden pl-10'>
                                            {/* Details */}
                                            <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                                <div className="w-4 h-4 bg-red-500 mr-2"></div>
                                                Development
                                                <span className="ml-28 self-end">: 32 Hours</span>
                                            </h1>
                                            <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                                <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                                                Problem Solving
                                                <span className="ml-20 self-end">: 40 Hours</span>
                                            </h1>
                                            <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                                Total Time(Last Week)
                                                <span className="ml-12 self-end">: 17 Hours</span>
                                            </h1>
                                            <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                                Total Time(Last Month)
                                                <span className="ml-9 self-end">: 33 Hours</span>
                                            </h1>
                                            <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                                Total Time (All Time)
                                                <span className="ml-16 self-end">: 72 Hours</span>
                                            </h1>
                                        </div>
                                    </div>

                                </div>
                                <div className='container w-full overflow-hidden -100'>
                                    {/* Enroll student div */}
                                    <Streak />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${toggleState === 2 ? "block" : "hidden"
                                } text-center`}
                        >
                            <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
                            <hr className="border-gray-500 mb-4" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                voluptatum qui adipisci.
                            </p>
                        </div>
                        <div
                            className={`${toggleState === 3 ? "block" : "hidden"
                                } text-center`}
                        >
                            <h2 className="text-2xl font-bold mb-4">Development</h2>
                            <hr className="border-gray-500 mb-4" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                Accusamus in quia odit aspernatur provident et ad vel distinctio
                                recusandae totam quidem repudiandae omnis veritatis nostrum
                                laboriosam architecto optio rem, dignissimos voluptatum beatae
                                aperiam voluptatem atque. Beatae rerum dolores sunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
