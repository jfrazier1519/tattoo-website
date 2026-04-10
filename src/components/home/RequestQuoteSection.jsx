import React from "react";
import QuoteForm from "../contact/QuoteForm";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const RequestQuoteSection = () => {
  const { requestQuoteSection } = useSiteContent();

  return (
    <section className="py-12 md:py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 md:px-12">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-cottage-teal-primary/40 to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-teal-primary rounded-full"></div>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-cottage-teal-primary via-cottage-green-primary to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-green-primary rounded-full"></div>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-cottage-green-primary/40 to-cottage-green-primary"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-start md:items-start">
          {/* Left: Heading and Description */}
          <div className="space-y-6 md:space-y-8 text-left max-w-md flex-1 order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover">
              {requestQuoteSection.title}
            </h2>

          <p className="text-lg md:text-xl text-cottage-text-muted leading-relaxed">
            {requestQuoteSection.intro}
          </p>

          {/* Quote box */}
          <div className="bg-cottage-bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-cottage-green-primary/15">
            <p className="text-cottage-text-muted italic">
              {requestQuoteSection.quote}
            </p>
          </div>
        </div>

          {/* Right: Quote Form */}
          <div className="flex-1 flex flex-col justify-center order-1 md:order-2 w-full">
            <div className="bg-cottage-bg-card/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-cottage-green-primary/15">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
