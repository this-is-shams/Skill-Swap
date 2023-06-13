import React, { useState } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function Streak({ devRecords, cpRecords }) {
  const [year, setYear] = useState("2023");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const startDate = new Date(`${parseInt(year, 10) - 1}-12-31`);
  const endDate = new Date(`${year}-12-31`);
  const values = [];
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    values.push({
      date: date.toISOString().slice(0, 10),
      problemSolvingCount: 0,
      developmentCount: 0,
    });
  }

  ///  // Function to format time in hours and minutes
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
  /////////////////////////

  // Update counts in values array based on devRecords and cpRecords
  [...devRecords].forEach((record) => {
    const matchingValue = values.find((value) => value.date === record.date);
    if (matchingValue) {
      matchingValue.developmentCount = formatTime(record.time);
    }
  });

  [...cpRecords].forEach((record) => {
    const matchingValue = values.find((value) => value.date === record.date);
    if (matchingValue) {
      matchingValue.problemSolvingCount = formatTime(record.time);
    }
  });

  // for (let i = 0; i < values.length; i++) {
  //   if (values[i].date === "2023-01-03") {
  //     values[i].problemSolvingCount = 2;
  //     values[i].developmentCount = 3;
  //     break;
  //   }
  // }

  const yearOptions = ["2020", "2021", "2022", "2023"];

  const titleForValue = (value) => {
    return `Date: ${value.date}, Problem Solving: ${value.problemSolvingCount}, Development: ${value.developmentCount}`;
  };

  const classForValue = (value) => {
    if (value.problemSolvingCount === 0 && value.developmentCount === 0) {
      return "color-github-0";
    } else if (
      value.problemSolvingCount !== 0 ||
      value.developmentCount !== 0
    ) {
      return "color-github-3";
    } else {
      return "";
    }
  };

  return (
    <div className="dark:bg-slate-800 flex flex-col items-center">
      <div className="mb-auto pb-10">
        <l>Heatmap of: </l>
        <select
          className="text-black dark:text-white dark:bg-slate-800"
          id="year"
          value={year}
          onChange={handleYearChange}
        >
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
