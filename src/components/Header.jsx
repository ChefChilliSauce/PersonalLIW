import React, { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-gray-100 border-b border-gray-300 dark:bg-[#18191A] dark:border-[#18191A]">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-medium text-lg select-none text-gray-900 dark:text-[#B0B3B8]">
          Abhinav Shukla
        </div>
        <nav className="flex font-semibold">
          {darkMode ? (
            <LightModeIcon
              onClick={() => setDarkMode(false)}
              className="cursor-pointer text-[#B0B3B8]"
            />
          ) : (
            <DarkModeIcon
              onClick={() => setDarkMode(true)}
              className="cursor-pointer text-gray-900"
            />
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
