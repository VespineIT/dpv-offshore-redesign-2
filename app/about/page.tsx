"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import { FiTarget, FiEye, FiCheckCircle } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      <AnimatedSection className="w-full bg-brand-dark py-20 md:py-32 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About DPV Offshore</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          We are your dedicated partner at sea, committed to excellence
          in all integrated marine engineering solutions.
        </p>
      </AnimatedSection>

      {/* Our Story Section */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold">OUR STORY</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
                Navigating the Seas of Excellence
              </h2>
              <p className="mt-4 text-lg text-brand-gray">
                Founded with a vision to revolutionize maritime support, DPV Offshore has grown from a small local provider to an internationally recognized partner. Our journey is built on a foundation of reliability, expertise, and an unwavering commitment to our clients' success.
              </p>
              <p className="mt-4 text-lg text-brand-gray">
                We blend traditional seafaring values with modern technology to deliver solutions that are not only effective but also efficient and sustainable.
              </p>
            </div>
            <div className="w-full h-80 md:h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Company Image (600x500)</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision Section */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-brand-orange-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiTarget className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark">Our Mission</h3>
              <p className="mt-4 text-brand-gray">
                To provide safe, reliable, and innovative marine engineering solutions that exceed client expectations, ensure vessel integrity, and protect the marine environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiEye className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark">Our Vision</h3>
              <p className="mt-4 text-brand-gray">
                To be the most trusted and sought-after maritime partner globally, renowned for our technical excellence, operational integrity, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <CTA />
      <Footer />
    </main>
  );
};

export default AboutPage;