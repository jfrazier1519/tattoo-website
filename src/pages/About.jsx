import React from "react";
import Button from "../components/shared/Button";
import { useSiteContent } from "../hooks/useSiteContent.js";

const About = () => {
  const { about } = useSiteContent();

  return (
    <>
      {/* My Story Section - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <section className="pt-20 md:pt-32 pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-cottage-green-primary">
                    {about.storyTitle}
                  </h1>
                  {about.storyParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-lg text-cottage-text-muted mb-4 md:mb-6 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="relative order-1 lg:order-2">
                  <img
                    src="/assets/about/about.jpg"
                    alt={about.portraitAlt}
                    className="h-auto w-full max-h-[24rem] md:max-h-[32rem] object-contain rounded-lg border border-cottage-bg-border shadow-cottage mx-auto lg:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Me Section - Charcoal to Black */}
      <div className="bg-gradient-to-b from-[#0c0a09] to-[#0a0a0a]">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-white">
                {about.whyTitle}
              </h2>
              <p className="text-lg sm:text-xl text-cottage-text-muted max-w-3xl mx-auto px-4">
                {about.whyIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {about.pillars.map((pillar, idx) => (
                <div key={pillar.title} className="text-center">
                  <div
                    className={`w-16 h-16 bg-cottage-gradient rounded-full flex items-center justify-center mx-auto mb-4 ${
                      idx === 0
                        ? "from-cottage-green-primary to-cottage-green-secondary"
                        : idx === 1
                          ? "from-cottage-green-secondary to-cottage-green-primary"
                          : idx === 2
                            ? "from-cottage-green-accent to-cottage-green-secondary"
                            : "from-cottage-green-secondary to-cottage-green-primary"
                    }`}
                  >
                    <span className="text-white text-2xl">{pillar.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-cottage-text-muted text-sm">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section - Black */}
      <div className="bg-[#0a0a0a]">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white">
              {about.ctaTitle}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                to="/contact"
                size="lg"
                className="bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-cottage"
              >
                {about.getInTouch}
              </Button>
              <Button
                to="/gallery"
                size="lg"
                variant="outline"
                className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-cottage-bg-accent font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
              >
                {about.viewGallery}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
