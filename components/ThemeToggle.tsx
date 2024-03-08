import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const storedTheme = window.localStorage.getItem("myTheme");

  const checkTheme = () => {
    if (storedTheme === "darkTheme") {
      return false;
    }
    return true;
  };

  const [isLight, setIsLight] = useState(checkTheme);

  function setLightTheme() {
    setIsLight(true);
    window.localStorage.setItem("myTheme", "lightTheme");
  }

  function setDarkTheme() {
    setIsLight(false);
    window.localStorage.setItem("myTheme", "darkTheme");
  }

  useEffect(() => {
    const setTheme = () => {
      const root = window.document.documentElement;
      const operatingSystemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      if (storedTheme === "darkTheme" && operatingSystemThemeDark.matches) {
        root.classList.add("dark");
      }

      if (storedTheme === "darkTheme") {
        root.classList.add("dark");
      }

      if (storedTheme === "lightTheme") {
        root.classList.remove("dark");
      }
    };
    setTheme();

    // console.log(`${storedTheme} selected`);
  }, [storedTheme]);

  return (
    <div className="theme-switcher flex items-center ml-4">
      <button
        type="button"
        className={`dark-mode-switch cursor-pointer mr-1 w-[42px] h-[42px] p-[11px] rounded-[100%]
        border ${!isLight && "hidden"}`}
        onClick={setDarkTheme}
      >
        <BsFillMoonStarsFill size={18} />
      </button>
      <button
        type="button"
        className={`light-mode-switch cursor-pointer mr-2 w-[40px] h-[40px] p-[10px] rounded-[100%]
        border ${isLight && "hidden"}`}
        onClick={setLightTheme}
      >
        <BsSun size={18} />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
