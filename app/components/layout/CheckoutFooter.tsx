// app/components/checkout-footer.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { useSkipStore } from "@/app/store/skipStore";

export default function CheckoutFooter() {
  const selectedSkip = useSkipStore((state) => state.selectedSkip);
  const clearSelection = useSkipStore((state) => state.clearSelection);

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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-5 px-6 shadow-lg border-t border-gray-800">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Skip info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          {selectedSkip ? (
            <>
              <span className="text-lg font-medium text-white">
                {selectedSkip.size} Yard Skip
              </span>
              <span className="text-2xl font-bold text-blue-400">
                £{totalPrice}
              </span>
              <span className="text-sm text-gray-400">
                {selectedSkip.hire_period_days} day hire
              </span>
            </>
          ) : (
            <span className="text-gray-400">Select a skip to continue</span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleBack}
            disabled={!selectedSkip}
            className={`px-5 py-2 rounded text-sm font-semibold transition-colors ${
              selectedSkip
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedSkip}
            className={`px-6 py-2 rounded text-sm font-semibold flex items-center transition-colors ${
              selectedSkip
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
            <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
