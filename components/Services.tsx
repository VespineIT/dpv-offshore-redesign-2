"use client";

import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
// Importing icons for services
import { FaLifeRing, FaShip, FaTools, FaGasPump } from 'react-icons/fa';

const services = [
  {
    icon: FaLifeRing,
    title: 'Diving Services',
    highlight: true,
  },
  {
    icon: FaShip,
    title: 'Marine & Offshore Supplies',
    highlight: false,
  },
  {
    icon: FaTools,
    title: 'Ship Repair',
    highlight: false,
  },
  {
    icon: FaGasPump,
    title: 'Oil & Gas Powerplant',
    highlight: false,
  },
];

const Services = () => {
  return (
    <AnimatedSection className="w-full py-16 md:py-24 text-center bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-brand-orange font-semibold">OUR SERVICES</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
          Shipping Services Tailored to Your Needs
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-lg shadow-lg text-center ${
                service.highlight
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-50 text-brand-dark'
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <service.icon className="h-12 w-12 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;