import React from "react";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const ServicesSection = () => {
  const { servicesSection } = useSiteContent();
  const { services } = servicesSection;

  return (
    <section
      id="services"
      className="py-12 md:py-16 lg:py-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 md:px-12">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-cottage-teal-primary/40 to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-teal-primary rounded-full"></div>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-cottage-teal-primary via-cottage-green-primary to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-green-primary rounded-full"></div>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-cottage-green-primary/40 to-cottage-green-primary"></div>
        </div>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover">
            {servicesSection.title}
          </h2>
          <p className="text-lg sm:text-xl text-cottage-text-muted max-w-2xl mx-auto px-4">
            {servicesSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="group h-full p-4 md:p-6 rounded-xl bg-cottage-bg-card/80 backdrop-blur-sm border border-cottage-green-primary/20 hover:border-cottage-teal-primary/50 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cottage-green-primary/20"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cottage-green-primary/0 to-cottage-teal-primary/0 group-hover:from-cottage-green-primary/5 group-hover:to-cottage-teal-primary/5 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-cottage-text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
