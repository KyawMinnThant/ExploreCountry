// "use client";
import DetailCountry from "@/app/components/detailcountry";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ClientWrapper from "./layout";
import BackBtn from "@/app/components/backbutton";

export default async function CountryDetail({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params; // ⬅️ await the promise

  const res = await fetch(`https://www.apicountries.com/name/${country}`);

  if (!res.ok) {
    return <div className="p-8 text-red-500">Country not found.</div>;
  }

  const data = await res.json();
  console.log(data);

  const countryData = Array.isArray(data) ? data[0] : data;

  return (
    <ClientWrapper>
      <BackBtn />
      <div className=" ">
        <DetailCountry country={countryData} />
      </div>
    </ClientWrapper>
  );
}
