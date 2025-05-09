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
    <Button
      onClick={() => onClick()}
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Select {skipSize} Yard Skip
    </Button>
  );
};

export default ClientButton;
