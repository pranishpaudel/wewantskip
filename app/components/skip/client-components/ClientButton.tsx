// app/components/ClientButton.tsx
"use client";
import React from "react";
import { Button } from "@/app/ui/Button";

type ClientButtonProps = {
  onClick: () => void;
  skipSize: number;
};

const ClientButton: React.FC<ClientButtonProps> = ({ onClick, skipSize }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={() => onClick()}
        className="w-3/5 py-2 bg-neutral-900 text-white text-md font-semibold rounded-lg hover:bg-neutral-800 "
      >
        Select {skipSize} Yard Skip
      </Button>
    </div>
  );
};

export default ClientButton;
