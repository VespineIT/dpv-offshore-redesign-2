"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 text-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark"
            variants={itemVariants}
          >
            Your Partner At Sea
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mt-2"
            variants={itemVariants}
          >
            For All Your Integrated{' '}
            <span className="text-brand-orange">Marine Engineering</span> Solutions
          </motion.h2>

          {/* Action Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-orange text-white px-8 py-3 rounded-md font-semibold text-lg"
            >
              Get a Quote
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-orange-light text-brand-orange px-8 py-3 rounded-md font-semibold text-lg"
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            className="mt-16 w-full max-w-5xl mx-auto rounded-lg overflow-hidden border-4 border-brand-orange"
            variants={itemVariants}
          >
            {/* Placeholder for the large ship image */}
            <div className="w-full h-[300px] md:h-[500px] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Hero Image Placeholder (1200x600)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;