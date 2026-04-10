import React from "react";
import QuoteForm from "../contact/QuoteForm";
import { useSiteContent } from "../../hooks/useSiteContent.js";
import HomeSection from "./HomeSection";
import { homeBody, homeSectionTitle } from "./homeTypography.js";

const RequestQuoteSection = () => {
  const { requestQuoteSection } = useSiteContent();

  return (
    <section
      id="quote"
      className="scroll-mt-20 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-28 relative z-10"
    >
      <HomeSection wide>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-start">
          <div className="space-y-8 md:space-y-10 text-left max-w-md flex-1 order-2 md:order-1">
            <h2 className={`${homeSectionTitle} mb-2 md:mb-3`}>
              {requestQuoteSection.title}
            </h2>

            <p className={`${homeBody} text-lg md:text-xl`}>
              {requestQuoteSection.intro}
            </p>

            <div className="rounded-lg border border-white/10 bg-stone-950/35 p-6 md:p-8">
              <p className="text-base italic leading-relaxed text-stone-500 md:text-[17px]">
                {requestQuoteSection.quote}
              </p>
            </div>
          </div>

          <div className="order-1 flex min-w-0 w-full flex-1 flex-col justify-center md:order-2">
            <div className="rounded-lg border border-cottage-green-primary/20 bg-stone-950/40 p-5 sm:p-6 md:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </HomeSection>
    </section>
  );
};

export default RequestQuoteSection;
