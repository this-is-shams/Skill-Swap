import React from "react";
import Chart from "react-google-charts";
import Sidebar from "./Sidebar";
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
    <div>
      <div><Sidebar /></div>
      <div className='h-screen dark:bg-slate-800 dark:text-white  pl-60 pt-20'>
        <div className='h-auto w-90 m-10'>
          <div className='w-full h-full flex flex-row'>
            <div className='w-1/2 h-full'>
              <div className='w-full h-1/2 overflow-hidden'>
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
              <div className='w-full h-1/2 overflow-hidden'>
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

    </div>
  );
}
