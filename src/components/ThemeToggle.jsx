import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [themeColor, setThemeColor] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    if (themeColor) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeColor]);
  return (
    <button
      onClick={() => setThemeColor((prev) => !prev)}
      className="relative flex items-center w-10 h-5 sm:w-12 sm:h-6 bg-gray-200 dark:bg-gray-800 rounded-full p-0.5 transition-colors duration-300 border border-gray-300 dark:border-white/10"
    >
      <span
        className={`absolute w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 
                ${themeColor ? " translate-x-5 sm:translate-x-6" : "translate-x-0"}
                `}
      >
        {themeColor ? (
          <svg
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        ) : (
          <svg
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"></path>
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
