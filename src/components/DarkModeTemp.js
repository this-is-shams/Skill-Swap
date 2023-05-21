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
    <div className="dark:bg-indigo-100-accent overflow-hidden fixed z-10 top-0">
      <div className="bg-white dark:bg-slate-800 fixed h-14 w-full pl-8 ">
        <a href="/"><img src={logo} className='' style={{ display: 'inline-block' }}></img></a>
        <h1 className="dark:text-white pt-3" style={{ display: 'inline-block', marginLeft: '-245px', fontWeight: 'bold', fontSize: '22px' }}>Skill Swap <span className=" text-sm">V_1.0</span> </h1>
      </div>
      <div className="fixed right-0 flex pt-2 float-right h-[50px]">
        <button className="p-2 mr-2 rounded-full border border-black bg-blue-300 dark:bg-yellow-400" onClick={handleThemeSwitch}>
          <img className="w-[20px]" src={imageSrc} alt="button" />
        </button>
      </div>
    </div>
  );
}
