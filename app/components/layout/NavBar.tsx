import React from 'react';
import { Check, MapPin, Trash2, Truck, Shield, CalendarDays, CreditCard } from 'lucide-react';

const NavBar = ({ currentStep = 3 }) => {
  const steps = [
    { id: 1, label: 'Postcode', icon: MapPin },
    { id: 2, label: 'Waste Type', icon: Trash2 },
    { id: 3, label: 'Select Skip', icon: Truck },
    { id: 4, label: 'Permit Check', icon: Shield },
    { id: 5, label: 'Choose Date', icon: CalendarDays },
    { id: 6, label: 'Payment', icon: CreditCard },
  ];

  // Assuming 6 steps, each item takes roughly 1/6th of the width.
  // Adjust 'w-1/6' if the number of steps changes.
  const stepItemWidthClass = `w-1/6`; 

  return (
    <div className="w-full bg-black text-white p-3 sm:p-4 md:p-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isDone = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <React.Fragment key={step.id}>
              {/* Step Item: Icon + Label */}
              <div className={`flex flex-col items-center text-center ${stepItemWidthClass} max-w-[70px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]`}>
                {/* Icon Container */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 mb-1 md:mb-2 transition-all duration-300 ease-in-out
                    ${isActive
                      ? 'bg-blue-500 border-blue-600 shadow-lg animate-pulse'
                      : isDone
                      ? 'bg-blue-400 border-blue-500'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  {isDone ? (
                    <Check size={20} className="text-white" />
                  ) : (
                    <step.icon
                      size={20}
                      className={isActive ? 'text-white' : 'text-gray-400'}
                    />
                  )}
                </div>
                {/* Label */}
                <span
                  className={`text-xs md:text-sm leading-tight transition-colors duration-300 ease-in-out
                    ${isActive
                      ? 'text-white font-semibold'
                      : isDone
                      ? 'text-blue-300'
                      : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector Line (except after last item) */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-grow h-0.5 md:h-1 rounded mx-1 sm:mx-2 transition-colors duration-500 ease-in-out
                    ${step.id < currentStep // Connector is active if the step it follows is passed
                      ? 'bg-blue-400'
                      : 'bg-gray-600'
                    }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;