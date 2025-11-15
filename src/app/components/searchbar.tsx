"use client";

import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useCountryStore } from "../services/store/useCountryStore";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { searchCountries, mode } = useCountryStore();

  // Optional: debounce to reduce calls while typing
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchCountries) {
        searchCountries(query);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(handler);
  }, [query, searchCountries]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {mode === "dark" ? (
        <div className="w-full mx-8 mt-10">
          <div className="flex items-center w-full max-w-xl bg-gray-900 shadow-md rounded-2xl px-4 py-3 border border-gray-200">
            <FiSearch size={20} className="text-gray-500" />
            <input
              value={query}
              onChange={handleChange}
              type="text"
              placeholder="Search for a country..."
              className="ml-3 w-full outline-none text-white placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>
      ) : (
        <div className="w-full mx-8 mt-10">
          <div className="flex items-center w-full max-w-xl bg-white shadow-md rounded-2xl px-4 py-3 border border-gray-200">
            <FiSearch size={20} className="text-gray-500" />
            <input
              value={query}
              onChange={handleChange}
              type="text"
              placeholder="Search for a country..."
              className="ml-3 w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
