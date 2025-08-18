import React from "react";
import Button from "../shared/Button";

const DecorativeBorder = () => (
  <svg
    height="20"
    width="200"
    viewBox="0 0 200 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-1/2 -translate-x-1/2 top-0"
  >
    <path
      d="M0 10 Q 50 0 100 10 T 200 10"
      stroke="#d97706"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0 10 Q 50 20 100 10 T 200 10"
      stroke="#7f1d1d"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cottage-bg-accent via-cottage-bg-velvet to-cottage-bg-accent relative">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cottage-teal-primary via-cottage-sage-primary to-cottage-green-hover"></div>

      {/* Manor grand hall atmosphere */}
      <div className="absolute inset-0 bg-wood-texture opacity-5"></div>

      {/* Candlelight effects */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-cottage-teal-primary rounded-full animate-flicker opacity-60"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-cottage-teal-secondary rounded-full animate-flicker opacity-50"></div>
      <div className="absolute bottom-40 left-32 w-2.5 h-2.5 bg-cottage-amber-warm rounded-full animate-flicker opacity-70"></div>
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-cottage-teal-primary rounded-full animate-flicker opacity-40"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-cottage-bg-paper/90 backdrop-blur-sm rounded-2xl shadow-gothic border-2 border-cottage-sage-primary/30 p-12 text-center relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-cottage-teal-primary/30"></div>
          <div className="absolute top-0 right-0 w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-cottage-green-hover/30"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-cottage-sage-primary/30"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] border-b-cottage-teal-primary/30"></div>

          {/* Decorative border */}
          <div className="relative mb-8">
            <DecorativeBorder />
          </div>

          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-gothic font-bold text-cottage-cream-primary mb-4 relative z-10">
              Ready to Begin Your{" "}
              <span className="relative inline-block pb-2">
                Artistic Journey?
                <span className="block relative h-4">
                  <div className="w-full h-1 bg-gradient-to-r from-cottage-teal-primary via-cottage-sage-primary to-cottage-green-hover rounded-full"></div>
                </span>
              </span>
            </h2>
          </div>

          <p className="text-xl text-cottage-cream-secondary max-w-2xl mx-auto mb-10 font-elegant leading-relaxed">
            Step into the manor and let's create something extraordinary
            together. Every great piece of art begins with a single moment of
            inspiration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              to="/contact"
              size="xl"
              className="bg-gradient-to-r from-cottage-green-hover to-cottage-sage-primary hover:from-cottage-burgundy-hover hover:to-cottage-sage-secondary text-white font-bold px-10 py-5 text-lg shadow-victorian border border-cottage-teal-primary/30"
            >
              Book Your Session
            </Button>
            <Button
              to="/gallery"
              size="xl"
              variant="outline"
              className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-cottage-bg-accent font-bold px-10 py-5 text-lg shadow-gothic"
            >
              View Portfolio
            </Button>
          </div>

          <div className="border-t border-cottage-sage-primary/30 pt-6">
            <Button
              to="/about"
              variant="ghost"
              size="sm"
              className="text-cottage-cream-secondary hover:text-cottage-teal-primary font-elegant"
            >
              Want to know more about the artist? Visit my studio
            </Button>
          </div>
        </div>

        {/* Manor quote */}
        <div className="text-center mt-12">
          <p className="text-cottage-cream-secondary/80 font-elegant italic text-lg">
            "In every stroke of ink lies a story waiting to be told, and in
            every design, a piece of the soul revealed."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
