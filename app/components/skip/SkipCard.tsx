import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/app/ui/Card';
import ClientButton from './client-components/ClientButton';
import CheckIcon from '@/public/icons/CheckIcon';
import { SkipCardProps } from '@/app/types/Skip';

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const totalPrice = skip.price_before_vat + skip.vat;
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;
  
  // Separate the classes instead of using template literals with conditional classes
  const cardClasses = `bg-black rounded-2xl shadow-md p-6 max-w-sm border border-[0.5px] transition-all ${
    isDisabled 
      ? 'cursor-not-allowed opacity-70' 
      : 'cursor-pointer hover:shadow-lg hover:shadow-neutral-800'
  }`;

  return (
    <Card className={cardClasses}>
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
        <p className="text-neutral-300 mb-4 font-bold">
          Hire Period: {skip.hire_period_days} Days
        </p>
        
        {/* Features */}
        <div className="flex items-center space-x-4 mb-4">
          {/* Allowed on Road */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                skip.allowed_on_road ? 'bg-gray-800' : 'bg-gray-900 border-2 border-gray-400'
              }`}
            >
              {skip.allowed_on_road && <CheckIcon />}
            </div>
            <p className="text-sm text-neutral-200 ml-2">Allowed on Road</p>
          </div>
          
          {/* Allows Heavy Waste */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                skip.allows_heavy_waste ? 'bg-blue-600' : 'bg-gray-900 border-2 border-gray-400'
              }`}
            >
              {skip.allows_heavy_waste && <CheckIcon />}
            </div>
            <p className="text-sm text-neutral-200 ml-2">Allows Heavy Waste</p>
          </div>
        </div>
        
        {/* Price */}
        <div className="mt-8">
          <p className="text-xl font-bold text-neutral-300">
            £{totalPrice.toFixed(2)} (incl. VAT)
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-0 mt-3">
        <ClientButton skip={skip} />
      </CardFooter>
    </Card>
  );
};

export default SkipCard;