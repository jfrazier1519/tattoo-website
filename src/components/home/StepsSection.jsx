import React from "react";
import { SearchCheck, Settings2, TrendingUp } from "lucide-react";
import Button from "../shared/Button";

const steps = [
  {
    title: "Step 1: Discover Your Unique Needs",
    description: "We begin by understanding your vision and goals.",
    icon: <SearchCheck className="w-10 h-10 text-teal-600" />,
    iconBg: "bg-teal-100",
  },
  {
    title: "Step 2: Tailored Strategy Development",
    description: "Our team crafts a personalized roadmap for success.",
    icon: <Settings2 className="w-10 h-10 text-teal-600" />,
    iconBg: "bg-teal-100",
  },
  {
    title: "Step 3: Implementation and Launch",
    description: "We execute your strategy with precision and care.",
    icon: <TrendingUp className="w-10 h-10 text-teal-600" />,
    iconBg: "bg-teal-100",
  },
];

const StepsSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 px-6 md:px-12 text-white font-sans relative"
    >
      {/* Accent dots */}
      <span className="absolute top-16 left-12 w-10 h-10 bg-teal-400 rounded-full opacity-20 z-0"></span>
      <span className="absolute top-32 right-8 w-6 h-6 bg-teal-300 rounded-full opacity-30 z-0"></span>
      <span className="absolute bottom-24 left-1/4 w-8 h-8 bg-teal-200 rounded-full opacity-25 z-0"></span>

      <div className="max-w-7xl mx-auto w-full text-left relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
          <p className="text-lg text-white/60 font-semibold">Get Started</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-10 text-white">
          Your Journey to Digital Success Starts Here
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mb-12">
          At Tattoo Studio, we empower startups and entrepreneurs to thrive in
          the digital landscape. Our comprehensive approach ensures you have the
          right tools and support to generate revenue from day one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group p-10 rounded-3xl bg-white/10 shadow-xl flex flex-col items-center text-center min-h-[340px] border-0 relative transition duration-200
                ${idx === 1 ? "md:-mt-8" : ""} ${idx === 2 ? "md:mt-8" : ""}`}
            >
              <div
                className={`mb-6 w-16 h-16 flex items-center justify-center rounded-full shadow-md ${step.iconBg}`}
              >
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Tattoo Studio?
              </h3>
              <p className="text-lg text-white/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-start gap-4">
          <Button to="/contact" size="lg">
            Get Started
          </Button>
          <Button to="/about" variant="outline" size="lg">
            Why Launch Digital Services?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
