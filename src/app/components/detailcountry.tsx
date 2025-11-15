"use client";

import React from "react";
import { useCountryStore } from "../services/store/useCountryStore";

interface CountryDetailProps {
  country: any;
}

const DetailCountry = ({ country }: CountryDetailProps) => {
  const { mode } = useCountryStore();
  if (!country) return null;

  return (
    <>
      {mode === "dark" ? (
        <div className="w-full min-h-screen bg-gray-950 px-10 py-16 flex items-center flex-col lg:flex-row gap-16">
          {/* LEFT: Flag */}
          <div className="w-full lg:w-1/2">
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold mb-4">{country.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population?.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              {country.subregion ? (
                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
              ) : null}
              {country.capital ? (
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </p>
              ) : null}

              {country.currencies ? (
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {country?.currencies[0]?.name}
                  <span className="font-semibold">
                    ({country?.currencies[0]?.symbol})
                  </span>{" "}
                </p>
              ) : null}

              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {country.languages.map((lan: any, i: number) => {
                  return lan.name + " ";
                })}
              </p>
            </div>

            {/* Border Countries */}
            {country.borders?.length > 0 && (
              <div className="mt-6">
                <h2 className="font-semibold text-xl mb-2">
                  Border Countries:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map((border: string, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-2 border-2 rounded-md shadow"
                    >
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen px-10 py-16 flex items-center flex-col lg:flex-row gap-16">
          {/* LEFT: Flag */}
          <div className="w-full lg:w-1/2">
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold mb-4">{country.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population?.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              {country.subregion ? (
                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
              ) : null}
              {country.capital ? (
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </p>
              ) : null}

              {country.currencies ? (
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {country?.currencies[0]?.name}
                  <span className="font-semibold">
                    ({country?.currencies[0]?.symbol})
                  </span>{" "}
                </p>
              ) : null}

              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {country.languages.map((lan: any, i: number) => {
                  return lan.name + " ";
                })}
              </p>
            </div>

            {/* Border Countries */}
            {country.borders?.length > 0 && (
              <div className="mt-6">
                <h2 className="font-semibold text-xl mb-2">
                  Border Countries:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map((border: string, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-2 border-2 rounded-md shadow"
                    >
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCountry;
