import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center py-4 md:py-6 lg:py-8 bg-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-300 mb-3 md:mb-4 font-poppins">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 font-opensans max-w-xl mx-auto px-4">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
