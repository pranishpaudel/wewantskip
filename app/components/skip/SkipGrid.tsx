"use client";
import React from "react";
import SkipCard from "./SkipCard";

import { useSkips } from "../../hooks/useSkips";
import SkipCardSkeleton from "./SkipCardSkeleton";

type SkipGridProps = {
  postcode: string;
  area: string;
};

const SkipGrid: React.FC<SkipGridProps> = ({ postcode, area }) => {
  const { skips, loading, error } = useSkips(postcode, area);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkipCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{`Error: ${error}`}</p>;
  }

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4 sm:px-6">

      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
  );
};

export default SkipGrid;
