"use client"
// app/components/SkipGrid.tsx
import React from "react";
import { useSkips } from "../../hooks/useSkips"; // Adjust the path based on your file structure
import SkipCard from "./SkipCard";
import SkipCardSkeleton from "./SkipCardSkeleton";

type SkipGridProps = {
  postcode: string;
  area: string;
};

const SkipGrid: React.FC<SkipGridProps> = ({ postcode, area }) => {
  const { skips, loading, error } = useSkips(postcode, area);

  if (error) {
    return (
      <div className="w-full text-center py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
          {loading ? (
            // Display skeleton loaders while data is loading
            Array.from({ length: 5 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="w-full">
                <SkipCardSkeleton />
              </div>
            ))
          ) : skips.length > 0 ? (
            // Display actual skip cards
            skips.map((skip) => (
              <div key={skip.id} className="w-full">
                <SkipCard skip={skip} />
              </div>
            ))
          ) : (
            // No skips found
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No skips available for this location.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipGrid;