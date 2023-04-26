/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import moon from "../assets/moon-outline.svg";
import sun from "../assets/sunny-outline.svg";
import logo from "../assets/skill.png";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");
  const [imageSrc, setImageSrc] = useState(moon);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setImageSrc(theme === "dark" ? moon : sun);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    handleClick();
  };

  return (
    <div className="dark:bg-indigo-100-accent pl-5">
      <div className="bg-white dark:bg-gray-800 fixed top-0 left-4 w-full pt-2">
        <img src={logo} style={{ display: 'inline-block' }}></img>
        <h1 className="dark:text-white" style={{ display: 'inline-block', marginLeft: '-245px', fontWeight:'bold', fontSize: '22px'}}>Skill Swap</h1>
      </div>
      <div className="fixed right-0 flex float-right h-[40px] bg-blue-300  dark:bg-yellow-400">
        <button className="p-2 rounded-3xl" onClick={handleThemeSwitch}>
          <img className="w-[20px]" src={imageSrc} alt="button" />
        </button>
      </div>
    </div>
  );
}
