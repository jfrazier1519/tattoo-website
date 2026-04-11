import React from "react";
import SiteCTASection from "../components/shared/SiteCTASection";
import { useSiteContent } from "../hooks/useSiteContent.js";
import {
  homeAccentHeading,
  homeBody,
  homeSectionTitle,
  editorialIconTile,
  editorialPanel,
  editorialPanelPadded,
} from "../components/home/homeTypography.js";

const About = () => {
  const { about } = useSiteContent();

  return (
    <>
      <div className="bg-stone-950">
        <section className="border-b border-white/10 pb-12 pt-24 md:pb-20 md:pt-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2">
                <div className="order-2 text-center lg:order-1 lg:text-left">
                  <h1 className={`${homeSectionTitle} mb-6 md:mb-8`}>
                    {about.storyTitle}
                  </h1>
                  {about.storyParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`${homeBody} mb-4 md:mb-6 last:mb-0`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="order-1 lg:order-2">
                  <div
                    className={`mx-auto max-w-md overflow-hidden lg:mx-0 lg:max-w-none ${editorialPanel}`}
                  >
                    <img
                      src="/assets/about/about.jpg"
                      alt={about.portraitAlt}
                      className="h-auto w-full max-h-[24rem] object-contain md:max-h-[32rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10 bg-stone-950">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center md:mb-16">
              <h2 className={`${homeAccentHeading} mb-4 md:mb-5`}>
                {about.whyTitle}
              </h2>
              <p className={`${homeBody} mx-auto max-w-3xl px-4`}>
                {about.whyIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {about.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`${editorialPanelPadded} flex flex-col items-center text-center`}
                >
                  <div className={`${editorialIconTile} mb-4 h-14 w-14 text-2xl`}>
                    <span aria-hidden>{pillar.emoji}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-stone-200">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-500">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10 bg-stone-950">
        <SiteCTASection
          variant="full"
          tone="editorial"
          showDivider={false}
          title={about.ctaTitle}
          subtitle={about.ctaSubtitle}
          primary={{ to: "/contact", label: about.getInTouch }}
          secondary={{ to: "/gallery", label: about.viewGallery }}
        />
      </div>
    </>
  );
};

export default About;
