"use client";

import AnimatedSection from './AnimatedSection';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <AnimatedSection className="w-full py-16 md:py-24 bg-brand-orange-light" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold">TESTIMONIALS</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Quote */}
          <div>
            <FaQuoteLeft className="text-brand-orange text-4xl mb-4" />
            <blockquote className="text-2xl italic text-brand-dark font-medium">
              “The real time tracking feature gives us peace of mind. Our team and our
              customers always know where their packages are.”
            </blockquote>
            <p className="mt-6 text-xl font-semibold text-brand-dark">
              Daniel R.
            </p>
            <p className="text-brand-gray">
              Logistics Manager at UrbanBox
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
            <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Testimonial Image (400x400)</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;