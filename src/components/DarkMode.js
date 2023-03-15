import React, { useState, useEffect } from "react";
import moon from "../assets/moon-outline.svg";
import sun from "../assets/sunny-outline.svg";

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
    <div>
      <div className="flex float-right pb-5 h-[40px]">
        <button className="p-2 rounded-3xl" onClick={handleThemeSwitch}>
          <img className="w-[20px]" src={imageSrc} alt="button" />
        </button>
      </div>
    </div>
  );
}
