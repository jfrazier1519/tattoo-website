import React from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";
import FinalCTASection from "../components/home/FinalCTASection";

const FAQ = () => {
  const { faq } = useSiteContent();

  return (
    <>
      {/* Hero Section - Grey */}
      <div className="bg-[#1c1917]">
        <section className="relative py-12 md:py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
              {faq.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-cottage-text-secondary max-w-2xl mx-auto">
              {faq.introBefore}
              <Link
                to="/contact"
                className="text-cottage-green-primary hover:text-cottage-green-secondary transition-colors underline"
              >
                {faq.contactLinkText}
              </Link>
              {faq.introAfter}
            </p>
          </div>
        </section>
      </div>

      {/* FAQ Content - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {faq.questions.map((item, index) => (
                <div
                  key={index}
                  className="bg-cottage-bg-card/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-cottage-bg-border shadow-cottage text-left"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-cottage-green-primary mb-2 md:mb-3">
                    {item.question}
                  </h3>
                  <p
                    className="text-cottage-text-muted text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#0a0a0a]">
        <FinalCTASection />
      </div>
    </>
  );
};

export default FAQ;
