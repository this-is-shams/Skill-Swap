import React from "react";
import Sidebar from "./Sidebar";
import Chart from "react-google-charts";

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
      <div className="overflow-hidden text-gray-800 dark:text-white">
        <div className="float-left pt-20 text-gray-800 dark:text-white">
          <Chart
            width={"600px"}
            height={"320px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pieData}
            options={pieOptions}
            rootProps={{ "data-testid": "3" }}
          />
        </div>
        <div className="float-left pt-40 flex flex-col">
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            <div className="w-4 h-4 bg-red-500 mr-2"></div>
            Development
            <span className="ml-auto">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
            Problem Solving
            <span className="ml-auto">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            Total Time(Last Week)
            <span className="ml-auto">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            Total Time(Last Month)
            <span className="ml-8">:</span>
          </h1>
          <h1 className="text-2xl text-gray-800 dark:text-white flex items-center">
            Total Time
            <span className="ml-auto">:</span>
          </h1>
        </div>

        <div></div>
      </div>
    </div>
  );
}
