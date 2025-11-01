import AnimatedSection from './AnimatedSection';
import AnimatedStat from './AnimatedStat';

const AboutUs = () => {
  return (
    <AnimatedSection className="w-full py-16 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-80 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Worker Image Placeholder (600x600)</span>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-brand-orange font-semibold">ABOUT US</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
              Navigating the Seas of Excellence in Maritime Services
            </h2>
            <p className="mt-4 text-brand-gray">
              {/* Using "Some Details" from the design as a placeholder */}
              Some Details - Our commitment to quality and efficiency has made us a trusted partner in the maritime industry.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <span className="text-4xl font-bold text-brand-orange">
                  <AnimatedStat target={2} suffix="M+" />
                </span>
                <p className="text-brand-gray mt-1">Shipments Delivered</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-brand-orange">
                  <AnimatedStat target={120} suffix="+" />
                </span>
                <p className="text-brand-gray mt-1">Clients Worldwide</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-brand-orange">
                  <AnimatedStat target={99.8} suffix="%" precision={1} />
                </span>
                <p className="text-brand-gray mt-1">On Time Delivery Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutUs;