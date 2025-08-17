import React from "react";
import HomePageNav from "../shared/HomePageNav";
import Button from "../shared/Button";

const HeroSection = ({ backgroundImage }) => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Black-to-transparent fade at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 px-4 md:px-6 max-w-5xl mx-auto text-white">
        {/* Accent dots */}
        <span className="absolute top-20 left-10 w-8 h-8 bg-teal-400 rounded-full opacity-20 z-10"></span>
        <span className="absolute top-32 right-16 w-4 h-4 bg-teal-300 rounded-full opacity-30 z-10"></span>
        <span className="absolute bottom-40 left-1/4 w-6 h-6 bg-teal-200 rounded-full opacity-25 z-10"></span>

        {/* Top rating row */}
        <div className="mb-4 flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-white/90">
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span> 5.0
          </span>
          <span>✔ Free Consultation</span>
          <span>✔ 5+ Years of Satisfied Customers</span>
        </div>

        {/* Headline (3 stacked lines) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6">
          Empower Your Startup <br />
          with Tattoo Studio <br />
          Services
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 mb-10 font-light">
          We provide tailored solutions to help startups thrive from day one.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <Button to="/contact" variant="secondary">
            Get Started
          </Button>
          <Button to="/about" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>

      {/* Section Nav Strip */}
      <div className="relative z-20 w-full">
        <HomePageNav />
      </div>
    </section>
  );
};

export default HeroSection;
