// app/components/SkipGrid.tsx
import ClientSkipCardWrapper from "./client-components/CardClickWrapper";
import SkipCard from "./SkipCard";

import { fetchSkips } from "@/lib/fetchSkips";

type SkipGridProps = {
  postcode: string;
  area: string;
};

const SkipGrid = async ({ postcode, area }: SkipGridProps) => {
  let skips = [];

  try {
    skips = await fetchSkips(postcode, area);
  } catch (error) {
    return (
      <div className="w-full text-center py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">
            {error instanceof Error ? error.message : "Unknown error"}
          </span>
        </div>
      </div>
    );
  }

  if (skips.length === 0) {
    return (
      <div className="col-span-full text-center py-8">
        <p className="text-gray-600">No skips available for this location.</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-25">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
          {skips.map((skip) => (
            <ClientSkipCardWrapper key={skip.id} skip={skip}>
              <SkipCard skip={skip} />
            </ClientSkipCardWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkipGrid;