import React from "react";
import moon from "../assets/moon.png";
import { useState, useEffect } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className=" bg-blue-300 flex float-right pb-5 h-[40px]">
        <button
          id="dbutton"
          className="p-2 rounded-3xl"
          onClick={handleThemeSwitch}
        >
          <img className="w-[20px]" src={moon} alt="button" />
        </button>
      </div>
    </div>
  );
}
