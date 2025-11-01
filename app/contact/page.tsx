import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* Page Header */}
      <AnimatedSection className="w-full bg-brand-dark py-20 md:py-32 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-300">
          We're here to help. Get in touch with our team.
        </p>
      </AnimatedSection>

      {/* Contact Details & Form */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Column 1: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Contact Information
              </h2>
              <p className="text-brand-gray mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <FiPhone className="text-brand-orange h-6 w-6 mr-4" />
                  <span className="text-lg text-brand-dark">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-brand-orange h-6 w-6 mr-4" />
                  <span className="text-lg text-brand-dark">info@dpvoffshore.com</span>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-brand-orange h-6 w-6 mr-4 mt-1" />
                  <span className="text-lg text-brand-dark">
                    123 Maritime Ave, Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Form Component */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}