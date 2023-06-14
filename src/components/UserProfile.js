import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Chart from "react-google-charts";
import Streak from "./Streak";
import axios from "axios";


export default function UserProfile() {
    const myString = window.location.href;
    const parts = myString.split("/");
    const username = parts.pop();
    const [toggleState, setToggleState] = useState(1);
    const [showComments, setShowComments] = useState([]);

    //Dashboard
    const pieOptions = {
        pieHole: 0,
        backgroundColor: "transparent",
        chartArea: {
            backgroundColor: "transparent",
        },
        textStyle: {
            color: "text-white dark:text-white",
        },
        legend: "none",
    };
    const [devRecords, setDevRecords] = useState([]);
    const [cpRecords, setCpRecords] = useState([]);
    const [pieData, setPieData] = useState([
        ["Task", "Hours per Day"],
        ["Development", 0],
        ["Problem Solving", 0],
    ]);

    useEffect(() => {
        async function fetchData() {
            try {
                const loggedInMentee = username; // This function returns the logged-in user

                // Fetch devRecords for the logged-in user
                const devRecordsResponse = await axios.get(
                    `http://localhost:5000/dev/${loggedInMentee}`
                );
                setDevRecords(devRecordsResponse.data);

                // Fetch cpRecords for the logged-in user
                const cpRecordsResponse = await axios.get(
                    `http://localhost:5000/cp/${loggedInMentee}`
                );
                setCpRecords(cpRecordsResponse.data);

                // Update pieData with the new counts
                setPieData([
                    ["Task", "Hours per Day"],
                    ["Development", devRecordsResponse.data.length],
                    ["Problem Solving", cpRecordsResponse.data.length],
                ]);
            } catch (error) {
                console.error("Error:", error.message);
                // Handle error state
            }
        }

        fetchData();
    }, []);

    // Function to calculate total time from an array of records
    const calculateTotalTime = (records) => {
        return records.reduce((total, record) => total + record.time, 0);
    };

    // Function to format time in hours and minutes
    const formatTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        if (hours > 0) {
            return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes > 0 ? `${remainingMinutes} minutes` : ""
                }`;
        }
        return `${remainingMinutes} minutes`;
    };

    // Calculate the required totals and format the time

    let totalCpTime = calculateTotalTime(cpRecords);
    let totalDevTime = calculateTotalTime(devRecords);
    const totalTime = formatTime(totalCpTime + totalDevTime);
    totalCpTime = formatTime(totalCpTime);
    totalDevTime = formatTime(totalDevTime);

    // Get the last week's and last month's timestamp
    const lastWeekTimestamp = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const lastMonthTimestamp = Date.now() - 30 * 24 * 60 * 60 * 1000;

    // Filter records based on timestamps
    const lastWeekRecords = [...devRecords, ...cpRecords].filter(
        (record) => new Date(record.date) >= lastWeekTimestamp
    );
    const lastMonthRecords = [...devRecords, ...cpRecords].filter(
        (record) => new Date(record.date) >= lastMonthTimestamp
    );

    // Calculate total time for last week and last month and format the time
    const totalBothCpDevLastWeek = formatTime(
        calculateTotalTime(lastWeekRecords)
    );
    const totalBothCpDevLastMonth = formatTime(
        calculateTotalTime(lastMonthRecords)
    );
    //Dashboard

    //Problem Solving Record
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchCPRecords();
    }, []);
    const fetchCPRecords = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/cp/${username}`
            );
            // console.log(items);
            setItems(response.data);
        } catch (error) {
            console.log("Error fetching CP records:", error);
            alert("Error fetching CP records");
        }
    };
    //Problem Solving Record

    //Dev Record
    const [its, setIts] = useState([]);
    useEffect(() => {
        fetchDevRecords();
    }, []);
    const fetchDevRecords = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/dev/${username}`
            );
            // console.log(its);
            setIts([...its, ...response.data]);
        } catch (error) {
            console.log("Error fetching Dev records:", error);
        }
    };

    console.log("FETCH DEV CHECK");
    console.log(items);

    const toggleComments = (index) => {
        const newShowComments = [...showComments];
        newShowComments[index] = !newShowComments[index];
        setShowComments(newShowComments);
    };
    //Dev Record

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="dark:bg-slate-800">
            <div>
                <Sidebar />
            </div>
            <div className="h-screen dark:bg-slate-800 dark:text-white pl-60 pt-20">
                <div className="h-1/5 w-full flex items-center justify-center">
                    <div className="flex items-center justify-center h-20 w-20 bg-green-500 rounded-full text-white font-bold text-xl mr-4">
                        {/* {userInitials} */}
                        {/* Replace userInitials with the initials of the user's name */}
                        Shams
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Shams</h3> {/* Replace userName with the user's name */}
                        <p className="mt-1">Shams Farabi</p> {/* Replace fullName with the user's full name */}
                        <p className="mt-1">IIUC</p> {/* Replace institution with the user's institution */}
                        <p className="mt-1">shams@gmail.com</p> {/* Replace email with the user's email address */}
                        <a href="www.github.com}" className="mt-1 text-blue-500 hover:underline">
                            this-is-shams
                        </a> {/* Replace githubProfile with the user's GitHub profile URL */}
                    </div>
                </div>

                <div className="h-full dark:bg-slate-800 flex flex-col items-center">
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
                            Problem Solving
                        </button>
                        <button
                            className={`p-4 text-lg font-semibold rounded-lg ${toggleState === 3
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-600"
                                }`}
                            onClick={() => toggleTab(3)}
                        >
                            Development
                        </button>
                    </div>

                    <div
                        className={`${toggleState === 1 ? "block" : "hidden"
                            } text-center`}
                    >
                        <div className="h-auto w-90 m-10">
                            <div className="w-full h-full flex flex-row">
                                <div className="w-1/2 h-full">
                                    <div className="w-full h-1/2 overflow-hidden">
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

                                <div className="w-1/2 h-full flex justify-center items-center pt-14">
                                    <div className="w-full h-1/2 overflow-hidden">
                                        {/* Details */}
                                        <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                            <div className="w-4 h-4 bg-red-500 mr-2"></div>
                                            Development
                                            <span className="ml-28 self-end">: {totalDevTime}</span>
                                        </h1>
                                        <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                                            Problem Solving
                                            <span className="ml-20 self-end">: {totalCpTime}</span>
                                        </h1>
                                        <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                            Total Time(Last Week)
                                            <span className="ml-12 self-end">
                                                : {totalBothCpDevLastWeek}
                                            </span>
                                        </h1>
                                        <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                            Total Time(Last Month)
                                            <span className="ml-9 self-end">
                                                : {totalBothCpDevLastMonth}
                                            </span>
                                        </h1>
                                        <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
                                            Total Time (All Time)
                                            <span className="ml-16 self-end">: {totalTime}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="container w-full overflow-hidden -100">
                                {/* Enroll student div */}
                                <Streak devRecords={devRecords} cpRecords={cpRecords} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${toggleState === 2 ? "block" : "hidden"
                            } text-center`}
                    >
                        <div className="dark:bg-gray-800 h-screen">

                            <div
                                className="bg-white m-10 pt-2 pb-2 dark:bg-gray-800 rounded-md shadow-md z-0"
                                style={{
                                    flexDirection: "column",
                                    position: "absolute",
                                    left: 250,
                                    right: -20,
                                    display: "flex",
                                    float: "right",
                                }}
                            >
                                <div
                                    className="p-2 dark:bg-gray-800"
                                    style={{ flexDirection: "row" }}
                                >
                                    <div className="float-left w-1/6 dark:text-white">
                                        <p>Serial</p>
                                    </div>

                                    <div className="float-left w-1/6">
                                        <p>Link</p>
                                    </div>

                                    <div className="float-left w-1/6 flex justify-center dark:text-white">
                                        <p>Status</p>
                                    </div>

                                    <div className="float-left w-1/6 flex justify-center dark:text-white">
                                        <p>Time (Minutes)</p>
                                    </div>

                                    <div className="float-left w-1/6 flex justify-center dark:text-white">
                                        <p>Date</p>
                                    </div>
                                </div>
                                {items.map((item, index) => (
                                    <div
                                        className="p-2 dark:bg-gray-800"
                                        key={index}
                                        style={{ flexDirection: "row" }}
                                    >
                                        <div className="float-left w-1/6 dark:text-white">
                                            {item.serial}
                                        </div>

                                        <div className="float-left w-1/6">
                                            <a
                                                href={item.link}
                                                className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textAlign: "center" }}
                                            >
                                                Link
                                            </a>
                                        </div>

                                        <div className="float-left w-1/6 flex justify-center dark:text-white">
                                            {item.status}
                                            {/* <h1>asfsaf</h1> */}
                                        </div>

                                        <div className="float-left w-1/6 flex justify-center dark:text-white">
                                            {item.time}
                                        </div>

                                        <div className="float-left w-1/6 flex justify-center dark:text-white">
                                            {item.date}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className={`${toggleState === 3 ? "block" : "hidden"} dark:bg-slate-800`}>
                        <div className="h-screen dark:bg-slate-800">
                            <div
                                className="pt-2 pb-2 dark:bg-slate-800 rounded-md shadow-md z-0"
                                style={{
                                    flexDirection: "column",
                                    position: "absolute",
                                    left: 250,
                                    right: 0,
                                    display: "flex",
                                    float: "right",
                                }}
                            >
                                {its.map((item, index) => (
                                    <div
                                        key={index}
                                        className="dark:bg-gray-800 p-5 my-5 mx-5 rounded-md"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h2 className="text-2xl font-bold">{item.title}</h2>
                                                <p className="text-gray-500">{item.date}</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 ">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="mt-5 ">
                                            <p>Time: {item.time}</p>
                                        </div>
                                        <div className="mt-5 ">
                                            <p>Task ID: {item.taskId}</p>
                                        </div>
                                        <div className="mt-5 ">
                                            <h3 className="text-lg font-semibold">Links:</h3>
                                            {item.links.map((link, linkIndex) => (
                                                <p key={linkIndex}>
                                                    <a href={link}>{link}</a>
                                                </p>
                                            ))}
                                        </div>
                                        <div className="mt-5">
                                            <button
                                                className="px-3 py-1 bg-blue-500 text-white rounded-md"
                                                onClick={() => toggleComments(index)}
                                            >
                                                Show/Hide Comments
                                            </button>
                                            {showComments[index] && (
                                                <div>
                                                    {/* Render comments from the database */}
                                                    {item.remarks}
                                                    {/* ... */}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
