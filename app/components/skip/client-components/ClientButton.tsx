"use client";
import React from "react";
import { Button } from "@/app/ui/Button";
import { useSkipStore } from "@/app/store/skipStore";
import { SkipCardProps } from "@/app/types/Skip";

type ClientButtonProps = {
  skip: SkipCardProps['skip'];
};

const ClientButton: React.FC<ClientButtonProps> = ({ skip }) => {
  const selectSkip = useSkipStore((state) => state.selectSkip);
  const selectedSkip = useSkipStore((state) => state.selectedSkip);

  const isSelected = selectedSkip?.id === skip.id;
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;

  const handleClick = () => {
    if (!isDisabled) {
      selectSkip(skip);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={handleClick}
        disabled={isDisabled}
        className={`w-4/5 py-3 text-base font-semibold rounded-xl transition-colors ${
          isSelected
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-neutral-900 hover:bg-neutral-800 text-white"
        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isSelected ? "Selected" : isDisabled ? "Not Selectable" : "Select Skip"}
      </Button>
    </div>
  );
};

export default ClientButton;
