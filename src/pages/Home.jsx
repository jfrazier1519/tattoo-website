import React, { useEffect, useRef } from "react";
import Button from "../components/shared/Button";
import HomeBackground from "../components/home/HomeBackground";
import HomeSection from "../components/home/HomeSection";
import HomeImageBand from "../components/home/HomeImageBand";
import FeaturedWorkSection from "../components/home/FeaturedWorkSection";
import ServicesSection from "../components/home/ServicesSection";
import FinalCTASection from "../components/home/FinalCTASection";
import RequestQuoteSection from "../components/home/RequestQuoteSection";
import Testimonials from "../components/home/Testimonials";
import { useSiteContent } from "../hooks/useSiteContent.js";
import {
  homeBody,
  homeHeroSubtitle,
  homeHeroTitle,
  homeSectionTitle,
  homeStepNum,
  homeStepTitle,
} from "../components/home/homeTypography.js";

const Home = () => {
  const { home } = useSiteContent();
  const visionRef = useRef(null);
  const consultationRef = useRef(null);
  const studioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (visionRef.current) {
        const rect = visionRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          visionRef.current.style.opacity = "1";
        }
      }

      if (consultationRef.current) {
        const rect = consultationRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          consultationRef.current.style.opacity = "1";
        }
      }

      if (studioRef.current) {
        const rect = studioRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          studioRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative isolate overflow-x-hidden">
      <HomeBackground />

      <div className="relative z-10">
        {/* Hero — content + image stack; base color comes from HomeBackground */}
        <div>
          <section
            ref={visionRef}
            className="relative flex min-h-[100dvh] items-center overflow-hidden pb-14 pt-28 transition-opacity duration-1000 md:min-h-screen md:py-0 md:pb-0"
          >
            <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
              <img
                src="/assets/home/hero.jpg"
                alt={home.hero.imageAlt}
                className="h-full w-full object-cover opacity-30 grayscale md:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-stone-950/55 via-stone-950/25 to-stone-950/70 md:bg-gradient-to-l md:from-black/30 md:via-transparent md:to-transparent" />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-wood-texture opacity-[0.08] md:opacity-20" />

            {/* max-md: translucent panel over full-bleed image; md+ split layout, no panel */}
            <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-5 md:w-1/2 md:px-8">
              <div className="mx-auto w-full max-w-2xl text-center max-md:border max-md:border-white/15 max-md:bg-stone-950/72 max-md:px-5 max-md:py-9 max-md:shadow-[0_12px_40px_rgba(0,0,0,0.35)] max-md:backdrop-blur-md md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none">
                <h1 className={`${homeHeroTitle} mb-5 md:mb-7`}>
                  {home.hero.title}
                </h1>

                <p
                  className={`${homeHeroSubtitle} mx-auto mb-8 max-w-xl text-balance whitespace-pre-line md:mb-10`}
                >
                  {home.hero.subtitle}
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="lg"
                  >
                    {home.hero.primaryCta}
                  </Button>
                  <Button
                    to="/gallery"
                    variant="secondary"
                    size="lg"
                  >
                    {home.hero.secondaryCta}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section
            id="how-it-works"
            ref={consultationRef}
            className="relative scroll-mt-20 pt-24 md:pt-32 lg:pt-36 pb-20 md:pb-28 lg:pb-32 overflow-hidden transition-opacity duration-1000"
          >
            <HomeSection>
              <div className="text-center md:text-left mb-14 md:mb-20 max-w-2xl mx-auto md:mx-0">
                <h2 className={`${homeSectionTitle} mb-0`}>
                  {home.process.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 lg:gap-16">
                {home.process.steps.map((step) => (
                  <div
                    key={step.title}
                    className="min-w-0 w-full text-center md:text-left px-0 sm:px-1"
                  >
                    <h3
                      className={`${homeStepTitle} mb-4 md:mb-5 flex flex-wrap items-baseline justify-center md:justify-start gap-x-2 md:gap-x-2.5 gap-y-1`}
                    >
                      <span className={homeStepNum}>
                        {String(step.number).padStart(2, "0")}
                      </span>
                      <span
                        className="text-stone-600 font-light select-none"
                        aria-hidden
                      >
                        —
                      </span>
                      <span>{step.title}</span>
                    </h3>
                    <p className={`${homeBody} max-w-none`}>{step.body}</p>
                  </div>
                ))}
              </div>
            </HomeSection>
          </section>
        </div>

        {home.interstitials?.[0] ? (
          <HomeImageBand {...home.interstitials[0]} />
        ) : null}

        <FeaturedWorkSection ref={studioRef} />

        {home.interstitials?.[1] ? (
          <HomeImageBand {...home.interstitials[1]} />
        ) : null}

        <ServicesSection />

        <div className="hidden md:block">
          <RequestQuoteSection />
        </div>

        {home.beforeTestimonialsVisual ? (
          <HomeImageBand {...home.beforeTestimonialsVisual} />
        ) : null}

        <Testimonials />

        <FinalCTASection />
      </div>
    </div>
  );
};

export default Home;
