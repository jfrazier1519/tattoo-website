import React from "react";
import QuoteForm from "../contact/QuoteForm";

const RequestQuoteSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-start">
        {/* Left: Heading and Description */}
        <div className="space-y-8 text-left max-w-xs flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-black">
              Request a Quote
            </h2>
          </div>
          <p className="text-xl text-black/80">
            Starting your business journey? We're here to build your brand,
            design your site, and bring your vision to life. Progress starts
            with a single step, take it with us.
          </p>
        </div>
        {/* Right: Quote Form (includes contact info) */}
        <div className="flex-1 flex flex-col justify-center">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
