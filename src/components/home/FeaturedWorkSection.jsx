import React, { forwardRef } from "react";
import Button from "../shared/Button";
import HomeSection from "./HomeSection";
import { useSiteContent } from "../../hooks/useSiteContent.js";
import {
  homeAccentHeading,
  homeCaption,
  homeFeaturedTitle,
  homeSubtitle,
} from "./homeTypography.js";

const FeaturedWorkSection = forwardRef((_, ref) => {
  const { home } = useSiteContent();
  const fw = home.featuredWork;

  const supporting = fw.supporting?.length
    ? fw.supporting
    : (fw.items ?? []).map(({ image, label }) => ({ image, label }));

  const lead = fw.lead ?? {
    image: fw.items?.[0]?.image,
    alt: fw.items?.[0]?.label ?? "Featured tattoo work",
    label: fw.items?.[0]?.label ?? "Featured",
  };

  return (
    <section
      ref={ref}
      id="featured-work"
      className="relative scroll-mt-20 overflow-hidden pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-10 lg:pb-12"
    >
      <HomeSection wide>
        <header className="mb-12 md:mb-16 lg:mb-20 max-w-4xl">
          <h2 className={`${homeFeaturedTitle} mb-5 md:mb-6`}>{fw.title}</h2>
          <p className={`${homeSubtitle} max-w-2xl`}>{fw.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start mb-16 md:mb-20">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-950">
                <img
                  src={lead.image}
                  alt={lead.alt ?? lead.label}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {lead.label ? (
                <p className={`mt-4 ${homeCaption}`}>{lead.label}</p>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center gap-8 md:gap-10 pt-0 lg:pt-4">
            <p className="text-lg md:text-xl text-stone-300/95 leading-snug font-light">
              {fw.leadBlurb ??
                "One big, then a grid—gallery has the rest if you’re still scrolling."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                to="/gallery"
                variant="primary"
                size="lg"
                className="justify-center sm:min-w-[10rem]"
              >
                {fw.galleryCta}
              </Button>
              <Button
                to={fw.eventsPath}
                variant="secondary"
                size="lg"
                className="justify-center sm:min-w-[10rem]"
              >
                {fw.eventsCta}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-20 md:mb-24">
          {supporting.map((item) => (
            <figure key={item.image} className="group relative">
              <div className="aspect-square overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className={`mt-2 ${homeCaption}`}>
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {(fw.lifestyle ?? []).length > 0 ? (
          <div className="border-t border-white/[0.07] pt-14 md:pt-16">
            <div className="mb-10 md:mb-12 max-w-2xl">
              <h3 className={`${homeAccentHeading} mb-3`}>
                {fw.lifestyleHeading ?? "Studio & travel"}
              </h3>
              <p className="text-sm md:text-base text-stone-500 leading-relaxed">
                {fw.lifestyleSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {(fw.lifestyle ?? []).map((shot) => (
                <figure key={shot.image} className="flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
                    <img
                      src={shot.image}
                      alt={shot.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-stone-500">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}
      </HomeSection>
    </section>
  );
});

FeaturedWorkSection.displayName = "FeaturedWorkSection";

export default FeaturedWorkSection;
