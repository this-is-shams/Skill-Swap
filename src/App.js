import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DarkMode from "./components/DarkMode"
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <DarkMode />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
