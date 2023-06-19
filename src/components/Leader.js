import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

export default function Leader() {
  const [CleaderboardData, setCLeaderboardData] = useState([]);
  const [DleaderboardData, setDLeaderboardData] = useState([]);
  const [activeButton, setActiveButton] = useState('');
  const [activeButton1, setActiveButton1] = useState('');

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const devLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboard/devleaderboard"
      );
      const cpLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboard/cpleaderboard"
      );

      const devLeaderboardData = devLeaderboardResponse.data;
      const cpLeaderboardData = cpLeaderboardResponse.data;
      setCLeaderboardData(cpLeaderboardData);
      setDLeaderboardData(devLeaderboardData);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };

  const handleWeekClickCP = async () => {
    try {
      const cpLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboardcp/cpleaderboardweek"
      );
      const cpLeaderboardData = cpLeaderboardResponse.data;
      setCLeaderboardData(cpLeaderboardData);
      setActiveButton('weekCP');
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };

  const handleMonthClickCP = async () => {
    try {
      const cpLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboardcp/cpleaderboardmonth"
      );
      const cpLeaderboardData = cpLeaderboardResponse.data;
      setCLeaderboardData(cpLeaderboardData);
      setActiveButton('monthCP');
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };

  const handleTotalClickCP = async () => {
    try {
      const cpLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboard/cpleaderboard"
      );
      const cpLeaderboardData = cpLeaderboardResponse.data;
      setCLeaderboardData(cpLeaderboardData);
      setActiveButton('totalCP');
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };

  const handleWeekClickDev = async () => {
    try {
      const devLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboarddev/devleaderboardweek"
      );
      const devLeaderboardData = devLeaderboardResponse.data;
      setDLeaderboardData(devLeaderboardData);
      setActiveButton1('weekDev');
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };

  const handleMonthClickDev = async () => {
    try {
      const devLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboarddev/devleaderboardmonth"
      );
      const devLeaderboardData = devLeaderboardResponse.data;
      setDLeaderboardData(devLeaderboardData);
      setActiveButton1('monthDev');
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };

  const handleTotalClickDev = async () => {
    try {
      const devLeaderboardResponse = await axios.get(
        "https://localhost:5000/leaderboard/devleaderboard"
      );
      const devLeaderboardData = devLeaderboardResponse.data;
      setDLeaderboardData(devLeaderboardData);
      setActiveButton1('totalDev');
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      // Handle error state or display error message
    }
  };




  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="h-screen dark:bg-slate-800 dark:text-white pl-60 pt-20 flex">
        <div className="pt-30 pl-50 m-10 text-center  w-1/2">
          <h1 className="text-3xl font-bold mb-4">Problem Solving</h1>
          <div className="mb-4">
            <button
              className={`bg-${activeButton === 'weekCP' ? 'gray-500' : 'blue-500'} hover:bg-blue-700  text-white font-bold py-2 px-4 rounded mr-2`}
              onClick={handleWeekClickCP}
            >
              Current Week
            </button>
            <button
              className={`bg-${activeButton === 'monthCP' ? 'gray-500' : 'blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
              onClick={handleMonthClickCP}
            >
              Current Month
            </button>
            <button
              className={`bg-${activeButton === 'totalCP' ? 'gray-500' : 'blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={handleTotalClickCP}
            >
              Total
            </button>
          </div>
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2">Total Time</th>
              </tr>
            </thead>
            <tbody className="">
              {CleaderboardData.map((person, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2"><Link to={`/user/${person.user}`}>{person.name}</Link></td>
                  <td className="border px-4 py-2">{person.user}</td>
                  <td className="border px-4 py-2">{person.totalCpTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-30 pl-50 m-10 text-center w-1/2">
          <h1 className="text-3xl font-bold mb-4">Development</h1>
          <div className="mb-4">
            <button
              className={`bg-${activeButton1 === 'weekDev' ? 'gray-500' : 'blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
              onClick={handleWeekClickDev}
            >
              Current Week
            </button>
            <button
              className={`bg-${activeButton1 === 'monthDev' ? 'gray-500' : 'blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
              onClick={handleMonthClickDev}
            >
              Current Month
            </button>
            <button
              className={`bg-${activeButton1 === 'totalDev' ? 'gray-500' : 'blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={handleTotalClickDev}
            >
              Total
            </button>
          </div>
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2">Total Time</th>
              </tr>
            </thead>
            <tbody className="">
              {DleaderboardData.map((person, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2"><Link to={`/user/${person.user}`}>{person.name}</Link></td>
                  <td className="border px-4 py-2">{person.user}</td>
                  <td className="border px-4 py-2">{person.totalDevTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
