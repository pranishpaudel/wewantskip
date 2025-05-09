// app/components/ClientButton.tsx
"use client";
import React from "react";
import { Button } from "@/app/ui/Button";

type ClientButtonProps = {
  skip: {
    size: number;
  };
};

const ClientButton: React.FC<ClientButtonProps> = ({ skip }) => {
  const handleClick = () => {
    alert(`Skip ${skip.size} Yard selected`);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={handleClick}
        className="w-4/5 py-3 text-base bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800"
      >
        Select Skip
      </Button>
    </div>
  );
};

export default ClientButton;
