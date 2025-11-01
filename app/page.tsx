import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import OfficeLocation from "@/components/OfficeLocation";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // We use <main> here. You can also use a simple <> fragment.
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <OfficeLocation />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}