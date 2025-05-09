// hooks/useSkips.ts

import { useState, useEffect } from "react";
import { Skip } from "../types/Skip";



export const useSkips = (postcode: string, area: string) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);
        if (!response.ok) throw new Error("Failed to fetch skips data");
        const data = await response.json();
        setSkips(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};
