"use client";
import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useCountryStore } from "../services/store/useCountryStore";

const BackBtn = () => {
  const { mode } = useCountryStore();
  return (
    <div
      className={`${
        mode == "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } p-8`}
    >
      {" "}
      {mode == "dark" ? (
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2  bg-white text-gray-950 font-semibold shadow-md rounded-lg hover:bg-gray-100 transition"
        >
          <FiArrowLeft size={20} />
          Back To Home
        </Link>
      ) : (
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 font-semibold bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
        >
          <FiArrowLeft size={20} />
          Back To Home
        </Link>
      )}
    </div>
  );
};

export default BackBtn;
