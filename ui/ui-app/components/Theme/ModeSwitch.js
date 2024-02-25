"use client";
import React, { useState } from "react";
import { THEME } from "./themeConstants";
import Moon from "../Icons/Moon/Moon";
import Sun from "../Icons/Moon/Sun";

const ModeSwitch = () => {
  const [mode, setMode] = useState(THEME.MODE.LIGHT);
  return (
    <div className="absolute top-3 xl:top-10 right-5 xl:right-10">
      {mode === THEME.MODE.LIGHT ? (
        <Moon
          onClick={() => {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            setMode(THEME.MODE.DARK);
          }}
          className="color-black z-20 mt-1 cursor-pointer w-6 xl:w-8 h-6 xl:h-8 hover:opacity-40 transition-all duration-1000"
        />
      ) : (
        <Sun
          onClick={() => {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            setMode(THEME.MODE.LIGHT);
          }}
          className="color-white z-10 cursor-pointer mt-1 w-6 xl:w-8 h-6 xl:h-8 hover:opacity-40 transition-all duration-1000"
        />
      )}
    </div>
  );
};

export default ModeSwitch;
