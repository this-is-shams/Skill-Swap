import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DarkMode from "./components/DarkMode"
import Dashboard from "./components/Dashboard";
import Problem from "./components/Problem";
import Development from "./components/Development";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <DarkMode />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/problem" element={<Problem/>}></Route>
        <Route path="/development" element={<Development/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
