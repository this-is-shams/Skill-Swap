import React from "react";
import Sidebar from "./Sidebar";
import Chart from "react-google-charts";

const pieData = [
  ["Task", "Hours per Day"],
  ["Development", 40],
  ["Problem Solving", 60],
];
const pieOptions = {
  title: "My Daily Activities",
  pieHole: 0.4,
};

export default function Dashboard() {
  return (
    <div>
      <div className="float-left h-screen w-full lg:w-1/5 flex-col">
        <Sidebar />
      </div>
      <div className="float-left">
        <Chart
          width={"500px"}
          height={"320px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </div>
  );
}
