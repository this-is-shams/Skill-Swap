import React, { useState } from "react";
import { Link } from "react-router-dom";
import submit from "../assets/submission.png";
import dev from "../assets/dev.png";
import leader from "../assets/leader.png";
import prof from "../assets/prof.png";

export default function Problem() {
  const [items, setItems] = useState([]);
  const [problemLink, setProblemLink] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [showButton, setShowButton] = useState(false);

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
    <div style={{ flexDirection: "column" }}>
      <div
        className="bg-white dark:bg-gray-800 h-screen w-full lg:w-1/5"
        style={{ float: "left" }}
      >
        <div className="pt-20 p-6">
          <Link to="/problem">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={submit} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Problem Solving</h1>
            </button>
          </Link>
          <Link to="/" className="flex items-center">
            <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
              <img src={dev} alt="" className="w-8 float-left"></img>
              <h1 className="flex-1 pt-1">Development</h1>
            </button>
          </Link>
          <Link to="/" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={leader} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Leaderboard</h1>
          </button>
          </Link>
          <Link to="/" className="flex items-center">
          <button className="mb-8 py-1 px-5 w-52 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 font-semibold whitespace-normal text-center">
            <img src={prof} alt="" className="w-8 float-left"></img>
            <h1 className="flex-1 pt-1">Profile</h1>
          </button>
          </Link>
        </div>
      </div>
      <div
        className="bg-white dark:bg-gray-800 h-screen w-full lg:w-4/5"
        style={{ float: "right", flexDirection: "column" }}
      >
        <div
          className="bg-white dark:bg-gray-800"
          style={{ position: "fixed", top: 56, left: 280, right: 12 }}
        >
          <div className="flex items-center justify-between">
            <div className="p-4 pt-10">
              <span className="dark:text-white">{items.length + 1}.</span>
            </div>
            <div className="p-4 pt-10 dark:text-white">
              <input
                type="text"
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
                <option value="">Select Status</option>
                <option value="Accepted">Accepted</option>
                <option value="Wrong Answer">Wrong Answer</option>
                <option value="Time limit exceed">Time limit exceed</option>
              </select>
            </div>
            <div className="p-4 pt-10 dark:text-white">
              <input
                type="text"
                placeholder="Time (minutes)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="dark:text-white rounded-md py-1 px-3 dark:bg-gray-600"
              />
            </div>
            <div className="p-4 pt-10">
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className=" dark:text-white rounded-md py-1 px-3 dark:bg-gray-600"
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

        <div>
          <div
            className="bg-white m-8 pt-2 pb-2 dark:bg-gray-800 rounded-md shadow-md"
            style={{
              flexDirection: "column",
              position: "fixed",
              top: 120,
              left: 250,
              right: -20,
            }}
          >
            {items.map((item, index) => (
              <div className="p-2" key={index}>
                <span
                  className="pr-10 dark:text-white"
                >
                  {item.serialNo}
                </span>
                {showButton ? (
                  <a
                    href={item.problemLink}
                    className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                ) : (
                  <span className="p-10">{item.problemLink}</span>
                )}
                <span className="p-10 dark:text-white">{item.category}</span>
                <span className="p-10 dark:text-white">{item.time}</span>
                <span className="p-10 dark:text-white">{item.date}</span>
                <button
                  className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
