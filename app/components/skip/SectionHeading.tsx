import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center py-4 md:py-6 lg:py-8 bg-black">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 font-poppins">
        {title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 font-opensans max-w-xl mx-auto px-4">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
