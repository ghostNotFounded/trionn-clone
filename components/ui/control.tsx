"use client";

import Magnetic from "@/components/Magnetic";
import { useEffect, useState } from "react";

interface ControlProps {
  activeIcon: JSX.Element;
  inactiveIcon: JSX.Element;
  onclick: "themeSwitch" | "volumeSwitch";
}

const Control = ({ onclick, activeIcon, inactiveIcon }: ControlProps) => {
  const [theme, setTheme] = useState("dark");
  const [volume, setVolume] = useState(false);

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

  const handleVolumeSwitch = () => {
    setVolume((prev) => !prev);
  };

  return (
    <Magnetic>
      {onclick === "themeSwitch" ? (
        <button
          className="bg-gray/5 dark:bg-neutral-700/50 p-2 rounded-full"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? activeIcon : inactiveIcon}
        </button>
      ) : (
        <button
          className="bg-gray/5 dark:bg-neutral-700/50 p-2 rounded-full"
          onClick={handleVolumeSwitch}
        >
          {volume ? activeIcon : inactiveIcon}
        </button>
      )}
    </Magnetic>
  );
};

export default Control;
