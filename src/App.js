import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import Problem from "./components/Problem";
import Development from "./components/Development";
import Dashboard from "./components/Dashboard";
import Streak from "./components/Streak";
import User from "./components/Profile";
import MenDash from "./components/mentor/MentorDash";
import Task from "./components/mentor/Task";
import DarkModeTemp from "./components/DarkModeTemp";
import Lead from "./components/Leader";
import UserProfile from "./components/UserProfile";
import TaskUser from "./components/taskView";
import Forum from "./components/Forum";
import MenLead from "./components/mentor/MentorLeader";
import UserProfileMen from "./components/mentor/UserProfileMen";
import MentorProfile from "./components/mentor/MentorProfile";
import ZZZ from "./components/ZZZ";

function App() {
  const [shouldShowDarkMode, setShouldShowDarkMode] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setShouldShowDarkMode(!["/", "/signup"].includes(currentPath));
  }, []);

  useEffect(() => {
    document.title = 'Skill Swap';
  }, []);

  return (
    <Router>
      {shouldShowDarkMode ? <DarkMode /> : <DarkModeTemp />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/development" element={<Development />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/streak" element={<Streak />} />
        <Route path="/profile" element={<User />} />
        <Route path="/men_dash" element={<MenDash />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/leaderboard" element={<Lead />} />
        <Route path="/user/:userId" element={<UserProfile/>} />
        <Route path="/userMen/:userId" element={<UserProfileMen/>} />
        <Route path="/userzzz/:userId" element={<ZZZ/>} />
        <Route path="/taskview" element={<TaskUser />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/mentorLeader" element={<MenLead />} />
        <Route path="/mentorProfile" element={<MentorProfile />} />
        
      </Routes>
    </Router>
  );
}

export default App;
