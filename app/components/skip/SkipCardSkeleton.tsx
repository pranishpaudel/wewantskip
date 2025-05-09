// components/SkipCardSkeleton.tsx
import React from "react";

const SkipCardSkeleton: React.FC = () => {
  return (
    <div className="bg-neutral-900 rounded-2xl shadow-md p-6 max-w-sm border border-gray-100 animate-pulse">
      <div className="w-full h-40 bg-gray-800 rounded-xl mb-4" />
      <div className="h-6 bg-gray-700 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-1/4 mb-4" />
      <div className="h-4 bg-gray-700 rounded w-2/3 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-4" />
      <div className="h-6 bg-gray-700 rounded w-1/2 mb-4" />
      <div className="h-10 bg-gray-800 rounded w-full" />
    </div>
  );
};

export default SkipCardSkeleton;
