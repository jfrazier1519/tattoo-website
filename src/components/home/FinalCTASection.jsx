import React from "react";
import Button from "../shared/Button";

const FinalCTASection = () => {
  return (
    <section
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden z-10"
    >

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-cottage-teal-primary/40 to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-teal-primary rounded-full"></div>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-cottage-teal-primary via-cottage-green-primary to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-green-primary rounded-full"></div>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-cottage-green-primary/40 to-cottage-green-primary"></div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover">
            Ready to Get Inked?
          </h2>
          <p className="text-lg sm:text-xl text-cottage-text-muted mb-6 md:mb-10 max-w-2xl mx-auto">
            Let's make your vision permanent
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              to="/contact"
              size="xl"
              className="bg-gradient-to-r from-cottage-green-primary to-cottage-teal-primary hover:from-cottage-green-secondary hover:to-cottage-green-primary text-white font-semibold px-6 py-3 md:px-10 md:py-5 text-base md:text-lg shadow-lg border-0"
            >
              Book Your Session
            </Button>
            <Button
              to="/gallery"
              size="xl"
              variant="outline"
              className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-white font-semibold px-6 py-3 md:px-10 md:py-5 text-base md:text-lg shadow-lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
