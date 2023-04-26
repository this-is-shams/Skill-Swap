import React, { useState } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function Streak() {
  const [year, setYear] = useState("2023");
  const [problemSolvingCount, setProblemSolvingCount] = useState(0);
  const [developmentCount, setDevelopmentCount] = useState(0);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "problemSolvingCount") {
//       setProblemSolvingCount(value);
//     } else if (name === "developmentCount") {
//       setDevelopmentCount(value);
//     }
//   };

  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);
  const values = [];
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    values.push({ date: date.toISOString().slice(0, 10), problemSolvingCount: 0, developmentCount: 0 });
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i].date === "2023-01-01") {
      values[i].problemSolvingCount = 2;
      values[i].developmentCount = 3;
      break; 
    }
  }

  const yearOptions = [
    "2020",
    "2021",
    "2022",
    "2023"
  ];

  const titleForValue = (value) => {
    return `Date: ${value.date}, Problem Solving: ${value.problemSolvingCount}h, Development: ${value.developmentCount}h`;
  };

  const classForValue = (value) => {
    if (value.problemSolvingCount === 0 && value.developmentCount === 0) {
      return "color-github-0";
    } else if (value.problemSolvingCount >= 1 || value.developmentCount >= 1) {
      return "color-github-3";
    } else {
      return "";
    }
  };
  
  

  return (
    <div className="w-full">
      <div className="flex flex-row-reverse">
        <select className="text-black dark:text-white dark:bg-slate-600" id="year" value={year} onChange={handleYearChange}>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <ReactCalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
        showWeekdayLabels={true}
        titleForValue={titleForValue}
        classForValue={classForValue}
      />
    </div>
  );
}  

export default Streak;
