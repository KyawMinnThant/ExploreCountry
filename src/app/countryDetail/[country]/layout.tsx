"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useCountryStore } from "@/app/services/store/useCountryStore";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Correct Zustand selector (prevents unnecessary rerenders)
  const mode = useCountryStore((state) => state.mode);

  return (
    <div
      className={
        mode === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      {/* <Navbar /> */}
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
