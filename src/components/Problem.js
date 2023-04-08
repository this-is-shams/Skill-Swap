import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Problem() {
  const [items, setItems] = useState([]);
  const [problemLink, setProblemLink] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

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
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div style={{ flexDirection: "column" }}>
      <div
        className="bg-white dark:bg-gray-800 h-screen w-full lg:w-1/5"
        style={{ float: "left" }}
      >
        <div className="pt-20 p-6">
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <Link to="/problem">
              <h1>Problem Solving</h1>
            </Link>
          </button>
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <Link to="/development">
              <h1>Development</h1>
            </Link>
          </button>
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <h1>Leaderboard</h1>
          </button>
          <button className="block mb-8 py-2 px-10 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            Profile
          </button>
        </div>
      </div>
      <div
        className="bg-white dark:bg-blue-800 h-screen w-full lg:w-4/5 flex items-center justify-center"
        style={{ float: "right" }}
      >
        <div className="bg-white">
          <div className="flex items-center justify-between">
            <div className="p-3">
              <span>{items.length + 1}.</span>
            </div>
            <div className="p-8">
              <input
                type="text"
                placeholder="Problem Link"
                value={problemLink}
                onChange={(e) => setProblemLink(e.target.value)}
              />
            </div>
            <div className="p-8">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="p-8">
              <input
                type="text"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="p-8">
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="p-8">
              <button  onClick={handleAddItem}>+</button>
            </div>
          </div>
        </div>

        <div >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, index) => (
              <div key={index}>
                <span>{item.serialNo}</span>
                <span>{item.problemLink}</span>
                <span>{item.category}</span>
                <span>{item.time}</span>
                <span>{item.date}</span>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
