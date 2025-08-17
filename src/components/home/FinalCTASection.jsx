import React from "react";
import Button from "../shared/Button";

const WavyUnderline = () => (
  <svg
    height="16"
    width="100"
    viewBox="0 0 100 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-1/2 -translate-x-1/2 bottom-0"
  >
    <path
      d="M0 8 Q 25 16 50 8 T 100 8"
      stroke="#2dd4bf"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

const FinalCTASection = () => {
  return (
    <section className="py-16 px-6 md:px-12 font-sans flex justify-center items-center relative">
      {/* Accent dots */}
      <span className="absolute top-8 left-8 w-10 h-10 bg-teal-400 rounded-full opacity-20 z-0"></span>
      <span className="absolute top-24 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
      <span className="absolute bottom-16 left-1/4 w-8 h-8 bg-teal-200 rounded-full opacity-30 z-0"></span>

      <div className="inline-block bg-white/90 rounded-[2.5rem] shadow-xl px-10 py-12 max-w-2xl w-full text-center relative z-10">
        <div className="relative inline-block mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10">
            Start Your Digital Journey{" "}
            <span className="relative inline-block pb-2">
              Today
              <span className="block relative h-4">
                <WavyUnderline />
              </span>
            </span>
          </h2>
        </div>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          Ready to elevate your business? Our expert team is here to provide the
          tools and support you need to thrive in the digital landscape.
        </p>
        <Button to="/contact" size="xl">
          Get Started
        </Button>
        <div className="mt-4">
          <Button to="/blog" variant="ghost" size="sm" className="text-base">
            Not sure yet? Learn more in our Startup Insights Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
