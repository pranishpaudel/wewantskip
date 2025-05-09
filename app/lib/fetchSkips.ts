// lib/fetchSkips.ts
import { Skip } from '@/app/types/Skip';

export async function fetchSkips(postcode: string, area: string): Promise<Skip[]> {
  const response = await fetch(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`,
    {
      cache: 'no-store', // Optional: disable caching
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch skips data');
  }

  const data: Skip[] = await response.json();
  return data;
}
