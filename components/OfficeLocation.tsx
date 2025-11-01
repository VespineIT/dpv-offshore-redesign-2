"use client";

import AnimatedSection from './AnimatedSection';

const OfficeLocation = () => {
  return (
    <AnimatedSection className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="text-brand-orange font-semibold">OUR OFFICE</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
              Office Location
            </h2>
            
            <ul className="mt-8 space-y-4">
              {['Sri Lanka', 'UAE', 'India'].map((location, index) => (
                <li key={index} className="text-2xl text-brand-dark font-medium">
                  {index + 1}. {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Map Image Placeholder */}
          <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center border-2 border-brand-orange border-dashed">
            <span className="text-gray-500">World Map Placeholder (600x400)</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OfficeLocation;