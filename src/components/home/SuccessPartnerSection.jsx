import React from "react";
import { Link } from "react-router-dom";
import homeImage1 from "../../assets/home/homeImage1.jpg"; // replace with your final image

const SuccessPartnerSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 text-white font-sans relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
        {/* Left Text Side */}
        <div className="space-y-8 text-left relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
            <p className="text-xs uppercase text-white/60 tracking-widest font-semibold">
              What we do
            </p>
          </div>
          <h3 className="text-4xl md:text-5xl font-sans font-bold flex items-center gap-4">
            <span>Your Partner for Success in the Digital Realm</span>
          </h3>
          <p className="text-lg text-white/80">
            As your digital co-founder, we streamline your startup journey by
            integrating essential services. Our comprehensive approach minimizes
            time to market and maximizes your potential for success.
          </p>

          {/* 2 bullets, offset for organic feel */}
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:items-stretch">
            <div className="bg-white/10 rounded-2xl shadow-lg p-6 md:mr-4 md:self-end">
              <h4 className="font-bold mb-2 text-white">Faster Launch</h4>
              <p className="text-white/80">
                Reduce time to market with our all-in-one digital solutions
                tailored for startups.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl shadow-lg p-6 md:ml-4 md:self-start mt-4 md:mt-0">
              <h4 className="font-bold mb-2 text-white">Achieve Goals</h4>
              <p className="text-white/80">
                Accelerate your growth trajectory and reach revenue targets
                faster with our expert support.
              </p>
            </div>
          </div>
          {/* Blog CTA */}
          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-block border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-semibold py-3 px-8 rounded-full shadow transition"
            >
              Explore Startup Resources
            </Link>
          </div>
        </div>

        {/* Right Image Side, overlapping the text on large screens */}
        <div className="flex justify-center items-center relative md:-ml-16">
          <img
            src={homeImage1}
            alt="Launch Digital Team"
            className="w-full max-w-lg rounded-[2.5rem] object-cover shadow-2xl border-4 border-white/10 md:-mt-12 md:mb-8"
            style={{ boxShadow: "0 12px 48px 0 rgba(45,212,191,0.15)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessPartnerSection;
