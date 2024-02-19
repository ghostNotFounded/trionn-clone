"use client";

import Magnetic from "@/components/Magnetic";
import { useEffect, useState } from "react";

interface ControlProps {
  children: React.ReactNode;
  onclick: "themeSwitch" | "volumeSwitch";
}

const Control = ({ children, onclick }: ControlProps) => {
  const [theme, setTheme] = useState("dark");

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
    <Magnetic>
      <button
        className="bg-neutral-300 dark:bg-neutral-700/50 p-2 rounded-full"
        onClick={
          onclick === "themeSwitch"
            ? handleThemeSwitch
            : () => console.log("Volume up")
        }
      >
        {children}
      </button>
    </Magnetic>
  );
};

export default Control;
