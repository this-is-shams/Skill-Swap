import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        style={{ float: "right", flexDirection: "column" }}
      >
        <div
          className="bg-white"
          style={{ position: "fixed", top: 55, left: 280, right: 12 }}
        >
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
                <option value="">Select Status</option>
                <option value="Accepted">Accepted</option>
                <option value="Wrong Answer">Wrong Answer</option>
                <option value="Time limit exceed">Time limit exceed</option>
              </select>
            </div>
            <div className="p-8">
              <input
                type="text"
                placeholder="Time (minutes)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="p-8">
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="p-8">
              <button
                className="bg-blue-800 text-white w-20"
                onClick={handleAddItem}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className="bg-white m-8 pt-2 pb-2"
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
                <span className="pr-10 " style={{ width: "25%" }}>
                  {item.serialNo}
                </span>
                {showButton ? (
                  <a
                    href={item.problemLink}
                    className="p-10 bg-blue-500 text-white rounded-md py-1 px-3"
                    target="_blank" // Add target="_blank" to open the link in a new tab
                    rel="noopener noreferrer" // Add rel="noopener noreferrer" for security reasons
                  >
                    Link
                  </a>
                ) : (
                  <span className="p-10">{item.problemLink}</span>
                )}
                <span className="p-10">{item.category}</span>
                <span className="p-10">{item.time}</span>
                <span className="p-10">{item.date}</span>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}