import React from "react";
import QuoteForm from "../contact/QuoteForm";

const RequestQuoteSection = () => {
  return (
    <section className="py-20 bg-cottage-bg-warm relative">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cottage-copper-primary via-cottage-amber-primary to-cottage-burgundy-primary"></div>

      {/* Manor atmosphere */}
      <div className="absolute inset-0 bg-wood-texture opacity-5"></div>

      {/* Atmospheric elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-cottage-amber-primary rounded-full animate-flicker opacity-40"></div>
      <div className="absolute bottom-40 right-32 w-3 h-3 bg-cottage-copper-primary rounded-full animate-float opacity-30"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-start px-6 md:px-12 relative z-10">
        {/* Left: Heading and Description */}
        <div className="space-y-8 text-left max-w-md flex-1">
          {/* Decorative icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-cottage-burgundy-primary to-cottage-copper-primary rounded-full flex items-center justify-center mb-6 shadow-victorian">
            <span className="text-cottage-cream-primary text-2xl">✍️</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-gothic font-bold mb-6 text-cottage-cream-primary">
            Request a Quote
          </h2>

          <p className="text-xl text-cottage-cream-secondary font-elegant leading-relaxed">
            Ready to bring your vision to life? Let's discuss your tattoo ideas
            and create something extraordinary together. Every great piece
            begins with a conversation.
          </p>

          {/* Manor wisdom */}
          <div className="bg-cottage-bg-paper/50 backdrop-blur-sm rounded-lg p-6 border border-cottage-copper-primary/30">
            <p className="text-cottage-cream-secondary font-elegant italic">
              "The best tattoos are born from collaboration between artist and
              client. Let's explore your ideas and create something uniquely
              yours."
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex items-center gap-4 mt-8">
            <div className="w-2 h-2 bg-cottage-amber-primary rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-cottage-copper-primary rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-cottage-burgundy-primary rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-cottage-bg-paper/90 backdrop-blur-sm rounded-xl p-8 shadow-cottage border-2 border-cottage-copper-primary/30">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
