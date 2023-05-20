/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import moon from "../assets/moon-outline.svg";
import sun from "../assets/sunny-outline.svg";
import logo from "../assets/skill.png";

export default function DarkMode() {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDivClick = () => {
    setShowDropdown(!showDropdown);
  };

  const logOut = () => {
    window.location.href = "/";
  };

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
    <div className="dark:bg-slate-800 m-0 overflow-hidden fixed z-50">
      <div className="bg-white dark:bg-slate-800 fixed h-14 w-full pt-2 pl-8 mt-2">
        <img src={logo} className='top-0' style={{ display: 'inline-block' }}></img>
        <h1 className="dark:text-white" style={{ display: 'inline-block', marginLeft: '-245px', fontWeight: 'bold', fontSize: '22px' }}>Skill Swap</h1>
      </div>
      <div className="fixed right-0 flex pt-2 float-right h-[50px]">
        <div className="pr-10 mr-4 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" onClick={handleDivClick}>
          <div className="flex justify-center items-center h-full">
            <div className="overflow-hidden">
              <div className="float-left"><h1 className="text-center m-4 dark:text-white font-semibold font">Shams </h1></div>
              <div className="float-right dark:text-white"><h1 className="pt-3 float-right">⌄</h1></div>
            </div>
          </div>
          {showDropdown && (
            <div className="absolute bg-white dark:bg-slate-800 mt-2 rounded-full shadow-md">
              <ul className="py-2 px-8 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
                <li className="cursor-pointer dark:text-white" onClick={logOut}>Log out</li>
              </ul>
            </div>
          )}
        </div>

        <button className="p-2 mr-2 rounded-full border border-black bg-blue-300 dark:bg-yellow-400" onClick={handleThemeSwitch}>
          <img className="w-[20px]" src={imageSrc} alt="button" />
        </button>
      </div>
    </div>
  );
}
