import { React, useEffect, useState } from "react";
import Chart from "react-google-charts";
import Sidebar from "./Sidebar";
import Streak from "./Streak";
import { getLoggedInMentee } from "./auth";
import axios from "axios";

const pieOptions = {
  pieHole: 0.25,
  backgroundColor: "transparent",
  chartArea: {
    backgroundColor: "transparent",
  },
  textStyle: {
    color: "text-white dark:text-white",
  },
  legend: "none",
};

export default function Dashboard() {
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
        const loggedInMentee = getLoggedInMentee(); // This function returns the logged-in user

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
      return `${hours} hour${hours > 1 ? "s" : ""} ${
        remainingMinutes > 0 ? `${remainingMinutes} minutes` : ""
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

  // console.log("Total CP Time:", totalCpTime);
  // console.log("Total Dev Time:", totalDevTime);
  // console.log("Total Both CP Dev Time (Last Week):", totalBothCpDevLastWeek);
  // console.log("Total Both CP Dev Time (Last Month):", totalBothCpDevLastMonth);

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="h-screen dark:bg-slate-800 dark:text-white  pl-60 pt-20">
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
    </div>
  );
}
