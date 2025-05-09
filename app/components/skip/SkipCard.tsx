// app/components/SkipCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/app/ui/Card";
import ClientButton from "./client-components/ClientButton";


type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

type SkipCardProps = {
  skip: Skip;
};

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const totalPrice = skip.price_before_vat + skip.vat;

  const handleClick = () => {
    alert(`Skip ${skip.size} Yard selected`);
  };

  return (
    <Card className="bg-black rounded-2xl shadow-md p-6 max-w-sm border-1 border-gray-800 ">
    <CardContent className="p-0 bg-black">

        {/* Image */}
        <Image
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
         alt={`Skip ${skip.size} Yard`}
  width={200}
  height={200}
  className="w-full h-48 object-cover rounded-xl mb-4"
/>

        {/* Size and Yard Info */}
        <div className="flex items-center space-x-2 mb-4">
          <p className="text-3xl font-bold text-blue-600">{skip.size}</p>
          <p className="text-xl font-medium text-neutral-300">Yard Skip</p>
        </div>

        {/* Hire Period */}
        <p className="text-neutral-300 mb-4 font-bold ">Hire Period: {skip.hire_period_days} Days</p>

        {/* Features */}
        <div className="flex items-center space-x-4 mb-4 ">
          {/* Allowed on Road */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${skip.allowed_on_road ? "bg-gray-800 glow" : "bg-gray-900 border-2 border-gray-400"}`}
            >
              {skip.allowed_on_road && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-sm text-neutral-200 ml-2">Allowed on Road</p>
          </div>

          {/* Allows Heavy Waste */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${skip.allows_heavy_waste ? "bg-blue-600 glow" : "bg-gray-900 border-2 border-gray-400"}`}
            >
              {skip.allows_heavy_waste && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-sm text-neutral-200 ml-2">Allows Heavy Waste</p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-8">
          <p className="text-xl font-bold text-neutral-300">£{totalPrice.toFixed(2)} (incl. VAT)</p>
        </div>
      </CardContent>

      <CardFooter className="p-0 mt-3">
        <ClientButton onClick={handleClick} skipSize={skip.size} />
      </CardFooter>
    </Card>
  );
};

export default SkipCard;
