import React from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";
import FinalCTASection from "../components/home/FinalCTASection";
import {
  homeBody,
  homeSectionTitle,
  editorialInPageLink,
  editorialPanelPadded,
} from "../components/home/homeTypography.js";

const FAQ = () => {
  const { faq } = useSiteContent();

  return (
    <>
      <div className="bg-stone-950">
        <section className="border-b border-white/10 pb-12 pt-24 md:py-20">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className={`${homeSectionTitle} mb-4 md:mb-6`}>
              {faq.heroTitle}
            </h1>
            <p className={`${homeBody} mx-auto max-w-2xl`}>
              {faq.introBefore}
              <Link to="/contact" className={editorialInPageLink}>
                {faq.contactLinkText}
              </Link>
              {faq.introAfter}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-stone-950">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              {faq.questions.map((item, index) => (
                <div
                  key={index}
                  className={`${editorialPanelPadded} text-left`}
                >
                  <h3 className="mb-2 text-lg font-medium text-stone-200 md:mb-3 md:text-xl">
                    {item.question}
                  </h3>
                  <div
                    className={`${homeBody} text-sm sm:text-base [&_a]:text-cottage-green-primary/90 [&_a]:underline-offset-4 hover:[&_a]:text-cottage-green-primary`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10 bg-stone-950">
        <FinalCTASection />
      </div>
    </>
  );
};

export default FAQ;
