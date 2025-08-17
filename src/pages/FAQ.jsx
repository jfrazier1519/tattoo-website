import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <section className="bg-accent bg-texture pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-wide text-secondary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-textPrimary max-w-3xl mx-auto text-base md:text-lg mb-12">
            Here you’ll find answers to our most frequently asked questions. If
            you still need help,{" "}
            <Link
              to="/contact"
              className="relative transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-secondary hover:after:w-full"
            >
              contact us
            </Link>{" "}
            — we’re happy to help.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.faq.questions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 border-[2px] border-secondary/50 shadow text-left"
            >
              <h3 className="text-xl font-serif uppercase tracking-wide text-secondary mb-3">
                {item.question}
              </h3>
              <p
                className="text-textPrimary text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="h-[2px] w-full bg-secondary" />
    </>
  );
};

export default FAQ;
