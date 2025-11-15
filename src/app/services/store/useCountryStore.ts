import { create } from "zustand";

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

interface CountryState {
  countries: Country[];
  allCountries: Country[];
  loading: boolean;
  error: string | null;
  fetchCountries: () => Promise<void>;
  searchCountries: (query: string) => void;
  filterCountries: (query: string) => void;
  changeMode: (query: string) => void;
  mode: string;
}

export const useCountryStore = create<CountryState>((set) => ({
  countries: [],
  allCountries: [],
  loading: false,
  error: null,
  mode: "dark",
  changeMode: (mode: string) => set({ mode }),

  fetchCountries: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/countries");
      if (!res.ok) throw new Error("Failed to fetch countries");

      const data: Country[] = await res.json();
      set({ countries: data, allCountries: data, loading: false });
    } catch (error: any) {
      set({ error: error.message || "Unknown error", loading: false });
    }
  },
  searchCountries: async (name?: string) => {
    set({ loading: true, error: null });

    try {
      const endpoint = name == "" ? `/api/countries` : `/api/countries/${name}`;

      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("Failed to fetch country");

      const data = await res.json();

      set({
        countries: Array.isArray(data) ? data : [data],
        loading: false,
      });
    } catch (error) {
      console.error("Error in searchCountries:", error);
      set({ error: "Failed to fetch countries", loading: false });
    }
  },
  filterCountries: async (region?: string) => {
    set({ loading: true, error: null });

    try {
      const endpoint =
        region == "All" ? `/api/countries` : `/api/region/${region}`;

      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("Failed to fetch country");

      const data = await res.json();

      set({
        countries: Array.isArray(data) ? data : [data],
        loading: false,
      });
    } catch (error) {
      console.error("Error in searchCountries:", error);
      set({ error: "Failed to fetch countries", loading: false });
    }
  },
}));
