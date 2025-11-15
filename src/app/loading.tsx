"use client";

import { useCountryStore } from "./services/store/useCountryStore";
import { FaGlobe } from "react-icons/fa";

export default function Loading() {
  const { mode } = useCountryStore();

  const isDark = mode === "dark";

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen 
        ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}
      `}
    >
      {/* Globe Icon Spinner */}
      <FaGlobe
        className="animate-spin"
        size={60}
        color={isDark ? "#3b82f6" : "#3b82f6"} // blue-500
      />

      <p className="mt-4 text-blue-600 text-lg font-semibold animate-pulse">
        Loading Countries, please wait...
      </p>
    </div>
  );
}
