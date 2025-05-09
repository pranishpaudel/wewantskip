// app/components/client-components/ClientButton.tsx
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

  const handleClick = () => {
    selectSkip(skip);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={handleClick}
        className={`w-4/5 py-3 text-base font-semibold rounded-xl transition-colors ${
          isSelected 
            ? "bg-blue-600 hover:bg-blue-700 text-white" 
            : "bg-neutral-900 hover:bg-neutral-800 text-white"
        }`}
      >
        {isSelected ? "Selected" : "Select Skip"}
      </Button>
    </div>
  );
};

export default ClientButton;