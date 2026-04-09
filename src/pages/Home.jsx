import React, { useEffect, useRef } from "react";
import Button from "../components/shared/Button";
import ServicesSection from "../components/home/ServicesSection";
import FinalCTASection from "../components/home/FinalCTASection";
import RequestQuoteSection from "../components/home/RequestQuoteSection";
import Testimonials from "../components/home/Testimonials";
import { useSiteContent } from "../hooks/useSiteContent.js";

const Home = () => {
  const { home } = useSiteContent();
  const visionRef = useRef(null);
  const consultationRef = useRef(null);
  const studioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Vision section (hero)
      if (visionRef.current) {
        const rect = visionRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          visionRef.current.style.opacity = "1";
        }
      }

      // My Process section
      if (consultationRef.current) {
        const rect = consultationRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          consultationRef.current.style.opacity = "1";
        }
      }

      // Gallery Showcase section
      if (studioRef.current) {
        const rect = studioRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          studioRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section - Gray */}
      <div className="bg-[#1c1917]">
        <section
          ref={visionRef}
          className="relative min-h-screen flex items-center overflow-hidden transition-opacity duration-1000 py-20 md:py-0"
        >
          {/* Hero background image - right side */}
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
            <img
              src="/assets/home/hero.jpg"
              alt={home.hero.imageAlt}
              className="w-full h-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Wood texture overlay */}
          <div className="absolute inset-0 bg-wood-texture opacity-20"></div>

          {/* Artistic inspiration overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cottage-bg-accent/20 via-transparent to-cottage-green-hover/20"></div>

          {/* Content - left side */}
          <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center text-white px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover">
                {home.hero.title}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-cottage-cream-secondary mb-6 md:mb-8 max-w-2xl mx-auto font-elegant">
                {home.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  to="/contact"
                  size="lg"
                  className="bg-gradient-to-r from-cottage-green-primary to-cottage-teal-primary hover:from-cottage-green-secondary hover:to-cottage-green-primary text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-lg border-0"
                >
                  {home.hero.primaryCta}
                </Button>
                <Button
                  to="/gallery"
                  size="lg"
                  variant="outline"
                  className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-lg"
                >
                  {home.hero.secondaryCta}
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cottage-teal-primary animate-bounce">
            <div className="w-6 h-10 border-2 border-cottage-teal-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cottage-teal-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>
      </div>

      {/* My Process Section - Gray */}
      <div className="bg-[#1c1917]">
        <section
          ref={consultationRef}
          className="relative pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 overflow-hidden transition-opacity duration-1000"
        >
          {/* Wood texture overlay */}
          <div className="absolute inset-0 bg-wood-texture opacity-20"></div>

          {/* Atmospheric particles */}
          <div className="absolute top-20 left-8 w-12 h-12 bg-cottage-teal-primary rounded-full opacity-20 animate-glow animate-float animate-flicker blur-sm"></div>
          <div className="absolute top-40 right-12 w-10 h-10 bg-cottage-sage-primary rounded-full opacity-15 animate-glow animate-float animate-flicker blur-sm"></div>
          <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-cottage-green-hover rounded-full opacity-25 animate-glow animate-float animate-flicker blur-sm"></div>

          <div className="relative z-10 container mx-auto px-4 md:px-8">
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
                {home.process.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {home.process.steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="group h-full p-4 md:p-6 rounded-xl bg-cottage-bg-card/80 backdrop-blur-sm border border-cottage-green-primary/20 hover:border-cottage-teal-primary/50 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cottage-green-primary/20"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cottage-green-primary/0 to-cottage-teal-primary/0 group-hover:from-cottage-green-primary/5 group-hover:to-cottage-teal-primary/5 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="relative z-10 text-center">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                        idx === 0
                          ? "bg-gradient-to-r from-cottage-teal-primary to-cottage-sage-primary"
                          : idx === 1
                            ? "bg-gradient-to-r from-cottage-green-hover to-cottage-sage-primary"
                            : "bg-gradient-to-r from-cottage-sage-primary to-cottage-teal-primary"
                      }`}
                    >
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-cottage-text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Featured Work - Gray to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <section
          ref={studioRef}
          className="relative py-12 md:py-16 lg:py-20 overflow-hidden transition-opacity duration-1000"
        >
          {/* Wood texture overlay */}
          <div className="absolute inset-0 bg-wood-texture opacity-20"></div>

          {/* Atmospheric particles */}
          <div className="absolute top-20 left-8 w-12 h-12 bg-cottage-teal-primary rounded-full opacity-20 animate-glow animate-float animate-flicker blur-sm"></div>
          <div className="absolute top-40 right-12 w-10 h-10 bg-cottage-sage-primary rounded-full opacity-15 animate-glow animate-float animate-flicker blur-sm"></div>
          <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-cottage-green-hover rounded-full opacity-25 animate-glow animate-float animate-flicker blur-sm"></div>

          <div className="relative z-10 container mx-auto px-4 md:px-8">
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
                {home.featuredWork.title}
              </h2>
              <p className="text-cottage-text-muted text-lg sm:text-xl mt-4 md:mt-6 max-w-3xl mx-auto px-4">
                {home.featuredWork.subtitle}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              {home.featuredWork.items.map((item) => (
                <div
                  key={item.image}
                  className="group relative overflow-hidden rounded-lg shadow-gothic"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full max-h-80 min-h-48 object-contain bg-cottage-bg-card"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-cottage-cream-primary text-lg font-semibold">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to Full Gallery */}
            <div className="text-center px-4">
              <Button
                to="/gallery"
                size="lg"
                className="bg-gradient-to-r from-cottage-green-primary to-cottage-teal-primary hover:from-cottage-green-secondary hover:to-cottage-green-primary text-white font-semibold px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl shadow-lg border-0"
              >
                {home.featuredWork.cta}
              </Button>
              <p className="text-cottage-text-muted mt-4 text-base md:text-lg">
                {home.featuredWork.ctaSubtext}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* My Services - Charcoal to Black */}
      <div className="bg-gradient-to-b from-[#0c0a09] to-[#0a0a0a]">
        <ServicesSection />
      </div>

      {/* Request Quote - Black (continues from Services) - Hidden on mobile */}
      <div className="bg-[#0a0a0a] hidden md:block">
        <RequestQuoteSection />
      </div>

      {/* Mobile CTA - Show on mobile only, directs to contact */}
      <div className="bg-[#0a0a0a] md:hidden">
        <section className="py-12 px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {home.mobileCta.title}
            </h2>
            <p className="text-cottage-text-muted mb-6 text-sm">
              {home.mobileCta.body}
            </p>
            <Button
              to="/contact"
              size="lg"
              className="w-full bg-gradient-to-r from-cottage-green-primary to-cottage-teal-primary hover:from-cottage-green-secondary hover:to-cottage-green-primary text-white font-semibold px-6 py-3 text-base shadow-lg border-0"
            >
              {home.mobileCta.button}
            </Button>
          </div>
        </section>
      </div>

      {/* Testimonials - Black (continues) */}
      <div className="bg-[#0a0a0a]">
        <Testimonials />
      </div>

      {/* Final CTA - Black (stays dark) */}
      <div className="bg-[#0a0a0a]">
        <FinalCTASection />
      </div>
    </>
  );
};

export default Home;
