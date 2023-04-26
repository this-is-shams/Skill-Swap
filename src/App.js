import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DarkMode from "./components/DarkMode"
import Sidebar from "./components/Sidebar";
import Problem from "./components/Problem";
import Development from "./components/Development";
import Dashboard from "./components/Dashboard";
import Streak from "./components/Streak";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <DarkMode />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/sidebar" element={<Sidebar/>}></Route>
        <Route path="/problem" element={<Problem/>}></Route>
        <Route path="/development" element={<Development/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/streak" element={<Streak/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
