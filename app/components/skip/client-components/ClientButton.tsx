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
        className="w-4/5 py-3 text-base bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800"
      >
        Select {skipSize} Yard Skip
      </Button>
    </div>
  );
};

export default ClientButton;
