import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Problem() {
  const [items, setItems] = useState([]);
  const [problemLink, setProblemLink] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [showButton, setShowButton] = useState(true);

  const handleAddItem = () => {
    const newItem = {
      serialNo: items.length + 1,
      problemLink: problemLink,
      category: category,
      time: time,
      date: date,
    };
    setItems([...items, newItem]);
    setProblemLink("");
    setCategory("");
    setTime("");
    setDate("");
    setShowButton(true);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="dark:bg-gray-800 h-screen" style={{ flexDirection: "column" }}>
      <Sidebar />
      <div
        className="dark:bg-gray-800"
      >
        <div
          className="bg-white dark:bg-gray-800 z-10"
          style={{ position: "fixed", top: 40, left: 280, right: 12 }}
        >
          <div className="flex items-center justify-between">
            <div className="p-4 pt-10">
              <span className="dark:text-white">{items.length + 1}.</span>
            </div>
            <div className="p-4 pt-10 dark:text-white">
              <input
                type="integer"
                placeholder="Problem Link"
                value={problemLink}
                onChange={(e) => setProblemLink(e.target.value)}
                className="dark:text-white rounded-md py-1 px-3 dark:bg-gray-600"
              />
            </div>
            <div className="p-4 pt-10 dark:text-white">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="dark:text-white rounded-md py-1 px-3 dark:bg-gray-600"
              >
                <option value="null">Select Status</option>
                <option value="AC">AC</option>
                <option value="WA">WA</option>
                <option value="TLE">TLE</option>
                <option value="RE">RE</option>
              </select>
            </div>
            <div className="p-4 pt-10 dark:text-white">
              <input
                type="number"
                placeholder="Time (minutes)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="dark:text-white rounded-md py-1 px-3 dark:bg-gray-600"
              />
            </div>
            <div className="p-4 pt-10">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="dark:text-white rounded-md py-1 px-3 dark:bg-gray-600"
              />
            </div>

            <div className="p-4 pt-10">
              <button
                className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                onClick={handleAddItem}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-white m-10 pt-2 pb-2 dark:bg-gray-800 rounded-md shadow-md z-0"
          style={{
            flexDirection: "column",
            position: "absolute",
            top: 130,
            left: 250,
            right: -20,
            display: "flex",
            float: "right",
          }}
        >
          {items.map((item, index) => (
            <div className="p-2 dark:bg-gray-800" key={index} style={{ flexDirection: "row" }}>

              <div className="float-left w-1/6 dark:text-white">{item.serialNo}</div>

              <div className="float-left w-1/6">

                <a
                  href={item.problemLink}
                  className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textAlign: "center" }}
                >
                  Link
                </a>

              </div>

              <div className="float-left w-1/6 flex justify-center dark:text-white">{item.category}</div>

              <div className="float-left w-1/6 flex justify-center dark:text-white">{item.time}</div>

              <div className="float-left w-1/6 flex justify-center dark:text-white">{item.date}</div>

              <div className="float-left w-1/6 flex justify-center dark:text-white">
                <button
                  className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                  onClick={() => handleDeleteItem(index)}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
