import React from "react";
import Sidebar from "./Sidebar";
import Chart from "react-google-charts";
import Streak from "./Streak";

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

export default function Dashboard() {
  return (
    <div className="dark:bg-gray-800 overflow-hidden text-gray-800 dark:text-white">
      <Sidebar />
      <div className="overflow-hidden">
        <div className="float-left w-1/2 pt-20 text-gray-800 dark:text-white flex justify-center">
          <Chart
            width={"400px"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pieData}
            options={pieOptions}
            rootProps={{ "data-testid": "3" }}
          />
        </div>
        <div className="float-right w-1/2 pt-40 flex flex-col justify-center">
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            <div className="w-4 h-4 bg-red-500 mr-2"></div>
            Development
            <span className="ml-28 self-end">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
            Problem Solving
            <span className="ml-20 self-end">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            Total Time(Last Week)
            <span className="ml-12 self-end">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            Total Time(Last Month)
            <span className="ml-9 self-end">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            Total Time (All Time)
            <span className="ml-16 self-end">:</span>
          </h1>
        </div>
      </div>
      <div className="container flex justify-center">
        <Streak/>
      </div>
    </div>
  );
}
