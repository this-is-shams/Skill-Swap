import React, { useState } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function Streak() {
  const [year, setYear] = useState("2023");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);
  const values = [];
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    values.push({ date: date.toISOString().slice(0, 10), count: 0 });
  }

//   values = [
//     { date: "2022-01-01", count: 1 },
//     { date: "2022-02-14", count: 2 },
//     { date: "2022-03-27", count: 3 },
//     { date: "2023-03-27", count: 3 },
//     { date: "2021-03-27", count: 3 },
//     { date: "2020-03-23", count: 3 },
//     // add more values here
//   ];

for (let i = 0; i < values.length; i++) {
    if (values[i].date === "2023-04-01") {
      values[i].count = 1;
      break; 
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i].date === "2023-04-10") {
      values[i].count = 1;
      break; 
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i].date === "2023-04-11") {
      values[i].count = 2;
      break; 
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i].date === "2023-04-11") {
      values[i].count = 5;
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
    return `Date: ${value.date}, Count: ${value.count}`;
  };



  const classForValue = (value) => {
    if (value.count === 0) {
      return "color-github-0";
    } else if (value.count === 1) {
      return "color-github-2";
    } else if (value.count === 2) {
      return "color-github-3";
    } else if (value.count >= 3) {
      return "color-github-4";
    } else {
      return "";
    }
  };
  

  return (
    <div className="w-full">
      <div className="flex flex-row-reverse">
        <select className=" text-black dark:text-white dark:bg-slate-600" id="year" value={year} onChange={handleYearChange}>
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
