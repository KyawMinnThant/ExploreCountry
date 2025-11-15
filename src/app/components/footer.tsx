"use client";
import React from "react";
import { useCountryStore } from "../services/store/useCountryStore";

const Footer = () => {
  const { mode } = useCountryStore();
  return (
    <>
      {mode === "dark" ? (
        <footer className="bg-gray-950 text-white shadow-inner py-10">
          <div className="  px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto">
            {/* Left side: Brand name */}
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Explore
              </span>
              <span className="text-gray-800">Country</span>
            </h1>

            {/* Middle: Links (dummy) */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
              <a href="#" className="hover:text-blue-500 transition">
                About
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Contact
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Terms
              </a>
            </div>

            {/* Right side: Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} ExploreCountry. All rights reserved.
            </p>
          </div>
        </footer>
      ) : (
        <footer className="bg-white shadow-inner mt-10">
          <div className="  px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto">
            {/* Left side: Brand name */}
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Explore
              </span>
              <span className="text-gray-800">Country</span>
            </h1>

            {/* Middle: Links (dummy) */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
              <a href="#" className="hover:text-blue-500 transition">
                About
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Contact
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Terms
              </a>
            </div>

            {/* Right side: Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} ExploreCountry. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
