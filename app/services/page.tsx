import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA"; // Re-using the CTA component
import { FaLifeRing, FaShip, FaTools, FaGasPump } from 'react-icons/fa';

// Expanded service data
const services = [
  {
    icon: FaLifeRing,
    title: 'Diving Services',
    description: 'Comprehensive underwater solutions including hull inspection, cleaning, and repair, conducted by certified and experienced divers.',
    imageUrl: '/placeholder-service-1.jpg',
  },
  {
    icon: FaShip,
    title: 'Marine & Offshore Supplies',
    description: 'A complete range of supplies for your vessel, from deck and engine consumables to safety equipment and provisions.',
    imageUrl: '/placeholder-service-2.jpg',
  },
  {
    icon: FaTools,
    title: 'Ship Repair',
    description: '24/7 afloat and dry-dock repair services for all types of vessels, including steel fabrication, engine overhauls, and electrical work.',
    imageUrl: '/placeholder-service-3.jpg',
  },
  {
    icon: FaGasPump,
    title: 'Oil & Gas Powerplant',
    description: 'Specialized support for the oil and gas industry, including powerplant maintenance, parts supply, and offshore logistics.',
    imageUrl: '/placeholder-service-4.jpg',
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      <AnimatedSection className="w-full bg-brand-dark py-20 md:py-32 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Providing a full spectrum of integrated marine engineering solutions
          tailored to your vessel's needs.
        </p>
      </AnimatedSection>

      {/* Services List */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-row-dense' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className={`w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}>
                  <span className="text-gray-500">Service Image (600x450)</span>
                </div>
                
                {/* Text Content */}
                <div className={`${
                  index % 2 === 1 ? 'md:col-start-1' : ''
                }`}>
                  <service.icon className="h-12 w-12 text-brand-orange mb-4" />
                  <h2 className="text-3xl font-bold text-brand-dark">{service.title}</h2>
                  <p className="mt-4 text-lg text-brand-gray">{service.description}</p>
                  <a
                    href="/contact"
                    className="mt-6 inline-block font-semibold text-brand-orange hover:text-orange-700"
                  >
                    Get a Quote &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <CTA /> 
      <Footer />
    </main>
  );
}