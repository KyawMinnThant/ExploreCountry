"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useCountryStore } from "../services/store/useCountryStore";

const Navbar = () => {
  const mode = useCountryStore((state) => state.mode);
  const changeMode = useCountryStore((state) => state.changeMode);

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`w-full p-6 sm:p-8 shadow-md flex items-center justify-between transition-all duration-300
        ${mode === "dark" ? "bg-gray-950 text-white" : "bg-white text-gray-800"}
      `}
    >
      {/* Logo / Website Name */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold whitespace-nowrap">
        <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Explore
        </span>
        <span className={mode === "dark" ? "text-white" : "text-gray-800"}>
          Country
        </span>
      </h1>

      {/* Toggle Button */}
      <button
        onClick={toggleMode}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl border 
          transition-all duration-200 shadow-sm text-sm sm:text-base
          ${
            mode === "dark"
              ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
              : "border-gray-300 bg-white hover:bg-gray-100"
          }
        `}
      >
        {mode === "dark" ? (
          <>
            <BsSun size={18} className="text-yellow-400" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <BsMoon size={18} className="text-gray-700" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
