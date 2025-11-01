"use client";

import AnimatedSection from './AnimatedSection';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for checklist

const features = [
  'Fast & On Time Delivery',
  'Real Time Tracking',
  '24/7 Customer Support',
  'Secure & Insured Shipments',
  'Global Network',
];

const WhyChooseUs = () => {
  return (
    <AnimatedSection className="w-full py-16 md:py-24 bg-brand-orange-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <span className="text-brand-orange font-semibold">WHY CHOOSE US</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
              Why Thousands Trust Us With Their Shipments
            </h2>
            
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FiCheckCircle className="text-brand-orange h-6 w-6 mr-3" />
                  <span className="text-lg text-brand-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 md:order-2 w-full h-80 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Ship Image Placeholder (600x600)</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;