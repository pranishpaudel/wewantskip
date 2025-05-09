// app/components/checkout-footer.tsx
"use client"
import { ArrowRight } from "lucide-react";
import { useSkipStore } from "@/app/store/skipStore";


export default function CheckoutFooter() {
 
  const selectedSkip = useSkipStore((state) => state.selectedSkip);
  const clearSelection = useSkipStore((state) => state.clearSelection);
  
  // Calculate total price with VAT
  const totalPrice = selectedSkip 
    ? (selectedSkip.price_before_vat + selectedSkip.vat).toFixed(2) 
    : "0.00";
  
  const handleBack = () => {
    clearSelection();
    console.log("Back button clicked");
  };
  
  const handleContinue = () => {
    if (!selectedSkip) return;
    alert(`You have selected a ${selectedSkip.size} Yard Skip for £${totalPrice}`);
    console.log("Continue button clicked with skip:", selectedSkip);
  };

  // If no skip is selected, show minimal footer or return null
  if (!selectedSkip) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 px-4 flex items-center justify-between">
        <div className="text-gray-300">Select a skip to continue</div>
        <button 
          disabled
          className="px-4 py-2 bg-gray-800 text-gray-400 rounded cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 px-4 flex items-center justify-between">
      {/* Product and price info */}
      <div className="flex items-center space-x-3">
        <span className="text-gray-300">{selectedSkip.size} Yard Skip</span>
        <span className="text-blue-400 text-2xl font-bold">£{totalPrice}</span>
        <span className="text-gray-400 text-sm">{selectedSkip.hire_period_days} day hire</span>
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