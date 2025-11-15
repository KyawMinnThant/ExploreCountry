"use client";
import Link from "next/link";
import React from "react";
import { useCountryStore } from "../services/store/useCountryStore";

interface CountryProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const CountryCard = ({ country }: { country: CountryProps }) => {
  const { mode } = useCountryStore();
  return (
    <>
      {mode === "dark" ? (
        <Link href={`/countryDetail/${country?.name}`}>
          <div
            className="
          bg-gray-900
          text-white 
          shadow-md 
          rounded-2xl 
          overflow-hidden 
          cursor-pointer
          transform 
          transition 
          duration-300 
          ease-in-out
          hover:shadow-lg 
          hover:-translate-y-2 
          hover:scale-[1.03]
          will-change-transform
        "
          >
            {/* Flag */}
            <div className="relative w-full h-44 bg-gray-950">
              <img
                src={country?.flag}
                alt={`${country?.name} Flag`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4 tracking-wide">
                {country?.name}
              </h2>

              <div className="space-y-2 text-white text-sm">
                <p>
                  <span className="font-medium text-white">Population:</span>{" "}
                  {country?.population?.toLocaleString() || "N/A"}
                </p>
                <p>
                  <span className="font-medium text-white">Region:</span>{" "}
                  {country?.region || "Unknown"}
                </p>
                <p>
                  <span className="font-medium text-white">Capital:</span>{" "}
                  {country?.capital || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={`/countryDetail/${country?.name}`}>
          <div
            className="
          bg-white 
          shadow-md 
          rounded-2xl 
          overflow-hidden 
          cursor-pointer
          transform 
          transition 
          duration-300 
          ease-in-out
          hover:shadow-lg 
          hover:-translate-y-2 
          hover:scale-[1.03]
          will-change-transform
        "
          >
            {/* Flag */}
            <div className="relative w-full h-44 bg-gray-100">
              <img
                src={country?.flag}
                alt={`${country?.name} Flag`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">
                {country?.name}
              </h2>

              <div className="space-y-2 text-gray-700 text-sm">
                <p>
                  <span className="font-medium text-gray-800">Population:</span>{" "}
                  {country?.population?.toLocaleString() || "N/A"}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Region:</span>{" "}
                  {country?.region || "Unknown"}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Capital:</span>{" "}
                  {country?.capital || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CountryCard;
