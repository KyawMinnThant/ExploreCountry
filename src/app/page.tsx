"use client";

import { useEffect, useState } from "react";
import CountryCard from "./components/countrycard";
import SearchBar from "./components/searchbar";
import Filter from "./components/filter";
import Loading from "./loading";
import { useCountryStore } from "./services/store/useCountryStore";
import Pagination from "./components/paginatrion";

const ITEMS_PER_PAGE = 20;

export default function Home() {
  const countries = useCountryStore((state) => state.countries);
  const fetchCountries = useCountryStore((state) => state.fetchCountries);
  const loading = useCountryStore((state) => state.loading);
  const mode = useCountryStore((state) => state.mode);

  const [region, setRegion] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch on mount
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  // Extract unique regions
  useEffect(() => {
    if (!countries?.length) return;

    const uniqueRegions = Array.from(
      new Set(countries.map((country: any) => country.region).filter(Boolean))
    );

    setRegion(uniqueRegions);
    setCurrentPage(1);
  }, [countries]);

  // Reset page when countries change
  // useEffect(() => {
  // }, [countries]);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCountries = countries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className={`min-h-screen transition-all duration-300 
        ${
          mode === "dark"
            ? "bg-gray-950 text-white"
            : "bg-gray-50 text-gray-900"
        }
      `}
    >
      {/* Search + Filter */}
      <section
        id="SearchAndFilter"
        className="flex flex-col sm:flex-row justify-between items-center px-6 py-8 gap-6"
      >
        {countries.length > 0 && <SearchBar />}
        {countries.length > 0 && <Filter />}
      </section>

      {/* Country Listing */}
      <section id="countryCard" className="px-6 py-10">
        {loading ? (
          <Loading />
        ) : (
          <div
            className={`grid mt-10 gap-8 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:${mode === "dark" ? "grid-cols-4" : "grid-cols-4"}
            `}
          >
            {currentCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      {countries.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center pb-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </main>
  );
}
