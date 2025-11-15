"use client";

import React from "react";
import { useCountryStore } from "../services/store/useCountryStore";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const mode = useCountryStore((state) => state.mode);

  const createPages = () => {
    const pages: (number | string)[] = [];

    // Show all if total is small
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  const pages = createPages();

  const isDark = mode === "dark";

  return (
    <nav
      className="inline-flex items-center gap-2 flex-wrap"
      aria-label="Pagination"
    >
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border text-sm transition-all
          ${
            isDark
              ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        Previous
      </button>

      {/* Page List */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className={`px-3 py-1 text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={`page-${page}-${index}`}
            onClick={() => onPageChange(page as number)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`px-3 py-1 rounded-md border text-sm transition-all
              ${
                page === currentPage
                  ? "bg-blue-600 text-white border-blue-600"
                  : isDark
                  ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border text-sm transition-all
          ${
            isDark
              ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        Next
      </button>
    </nav>
  );
}
