"use client"
import { ArrowRight } from "lucide-react";

export default function CheckoutFooter() {

  const product = "6 Yard Skip";
  const price = "£264";
  const duration = "14 day hire";
  
  const handleBack = () => {
    console.log("Back button clicked");
   
  };
  
  const handleContinue = () => {
    console.log("Continue button clicked");
    
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 px-4 flex items-center justify-between">
      {/* Product and price info */}
      <div className="flex items-center space-x-3">
        <span className="text-gray-300">{product}</span>
        <span className="text-blue-400 text-2xl font-bold">{price}</span>
        <span className="text-gray-400 text-sm">{duration}</span>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex space-x-3">
        <button 
          onClick={handleBack}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Back
        </button>
        <button 
          onClick={handleContinue}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center"
        >
          Continue
          <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
}