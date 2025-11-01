"use client";

import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <AnimatedSection className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-orange-light rounded-lg p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Ready to Get <span className="text-brand-orange">Smarter and Faster</span> Service?
          </h2>
          <motion.a
            href="#chat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-brand-orange text-white px-8 py-3 rounded-md font-semibold text-lg"
          >
            Start Chat Now
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTA;