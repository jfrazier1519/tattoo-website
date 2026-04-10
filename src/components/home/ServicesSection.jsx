import React from "react";
import { useSiteContent } from "../../hooks/useSiteContent.js";
import HomeSection from "./HomeSection";
import { homeBody, homeSectionTitle, homeSubtitle } from "./homeTypography.js";

const ServicesSection = () => {
  const { servicesSection } = useSiteContent();
  const { services } = servicesSection;

  return (
    <section
      id="services"
      className="scroll-mt-20 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-28 relative z-10"
    >
      <HomeSection wide>
        <div className="text-center md:text-left mb-12 md:mb-16 max-w-2xl mx-auto md:mx-0">
          <h2 className={`${homeSectionTitle} mb-4 md:mb-5`}>
            {servicesSection.title}
          </h2>
          <p className={`${homeSubtitle} mx-auto md:mx-0 px-4 md:px-0`}>
            {servicesSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-16">
          {services.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left px-1"
            >
              <h3 className="text-lg md:text-xl font-normal text-stone-200 mb-3 md:mb-4 tracking-tight">
                {title}
              </h3>
              <p className={`${homeBody} text-sm md:text-base`}>{description}</p>
            </div>
          ))}
        </div>
      </HomeSection>
    </section>
  );
};

export default ServicesSection;
