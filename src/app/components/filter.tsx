"use client";

import React from "react";
import { useCountryStore } from "../services/store/useCountryStore";

const regions = [
  "All",
  "Asia",
  "Europe",
  "Africa",
  "Oceania",
  "Americas",
  "Polar",
  "Antarctic Ocean",
  "Antarctic",
];

const Filter = () => {
  const { filterCountries, mode } = useCountryStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value;
    filterCountries(selectedRegion);
  };

  return (
    <>
      {mode === "dark" ? (
        <div className="w-full mt-10 flex justify-end pr-8">
          <div className="w-full max-w-xs">
            <select
              onChange={handleChange}
              className="w-full bg-gray-950 shadow-md border border-gray-200 rounded-2xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Filter by Region</option>

              {regions.map((reg, index) => (
                <option key={index} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="w-full mt-10 flex justify-end pr-8">
          <div className="w-full max-w-xs">
            <select
              onChange={handleChange}
              className="w-full bg-white shadow-md border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Filter by Region</option>

              {regions.map((reg, index) => (
                <option key={index} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
