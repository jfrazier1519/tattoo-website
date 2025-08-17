import React from "react";
import { Star } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import Button from "../shared/Button";

const testimonials = [
  {
    name: "Emma Blackwood",
    title: "Gothic Rose Enthusiast",
    text: "The artist's attention to detail is incredible! My gothic rose tattoo is exactly what I envisioned - dark, elegant, and perfectly executed.",
  },
  {
    name: "Marcus Nightshade",
    title: "Dark Art Collector",
    text: "I've been getting tattoos for years, but this studio is something special. The manor atmosphere and artistic vision are unmatched.",
  },
  {
    name: "Luna Moon",
    title: "Cute Demon Lover",
    text: "My adorable demon tattoo is perfect! It's edgy but cute, exactly the style I was looking for. The artist really understood my vision.",
  },
  {
    name: "Raven Storm",
    title: "Cover-up Success Story",
    text: "Transformed my old tattoo into a beautiful new piece that I absolutely love. The artist's skill with cover-ups is remarkable.",
  },
  {
    name: "Shadow Phoenix",
    title: "Custom Design Client",
    text: "From the initial consultation to the final result, every step was perfect. My custom design tells my story beautifully.",
  },
  {
    name: "Violet Thorn",
    title: "Victorian Style Admirer",
    text: "The manor aesthetic and attention to detail make every visit feel special. My tattoos are works of art I'll treasure forever.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-cottage-bg-leather relative overflow-visible"
    >
      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cottage-amber-primary via-cottage-copper-primary to-cottage-burgundy-primary"></div>

      {/* Manor atmosphere */}
      <div className="absolute inset-0 bg-wood-texture opacity-5"></div>

      {/* Large faint quote icon accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 text-cottage-amber-primary/20 text-[10rem] z-0 select-none pointer-events-none font-gothic">
        "
      </div>

      {/* Atmospheric elements */}
      <div className="absolute top-16 left-8 w-8 h-8 bg-cottage-amber-primary rounded-full opacity-25 animate-flicker"></div>
      <div className="absolute top-32 right-12 w-5 h-5 bg-cottage-copper-primary rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-1/3 w-6 h-6 bg-cottage-burgundy-primary rounded-full opacity-20 animate-glow"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 md:px-12">
        <div className="text-center mb-16">
          {/* Decorative icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-cottage-burgundy-primary to-cottage-copper-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-victorian">
            <FaRegHeart className="w-8 h-8 text-cottage-cream-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-cottage-cream-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-cottage-cream-secondary max-w-2xl mx-auto font-elegant">
            Hear from those who have experienced the magic of the manor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map(({ name, title, text }, idx) => (
            <div
              key={idx}
              className={`bg-cottage-bg-paper/90 backdrop-blur-sm rounded-xl p-8 shadow-cottage hover:shadow-gothic border-2 border-cottage-copper-primary/30 hover:border-cottage-amber-primary/50 min-h-[220px] flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2
                ${idx % 3 === 1 ? "md:-rotate-1 md:-translate-y-1" : ""} ${
                idx % 3 === 2 ? "md:rotate-1 md:translate-y-1" : ""
              }`}
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 text-cottage-amber-primary/30 text-4xl font-gothic select-none pointer-events-none">
                "
              </div>

              {/* Star rating */}
              <div className="flex text-cottage-amber-primary mb-4 z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-cottage-amber-primary"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-lg text-cottage-cream-secondary mb-6 leading-relaxed z-10 font-elegant flex-grow">
                "{text}"
              </p>

              {/* Client info */}
              <div className="z-10">
                <p className="text-base font-bold text-cottage-cream-primary font-gothic">
                  {name}
                </p>
                <p className="text-sm text-cottage-cream-secondary font-elegant">
                  {title}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-cottage-amber-primary/20"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            to="/contact"
            size="lg"
            className="bg-gradient-to-r from-cottage-burgundy-primary to-cottage-copper-primary hover:from-cottage-burgundy-hover hover:to-cottage-copper-secondary text-white font-bold px-8 py-4 text-lg shadow-victorian border border-cottage-amber-primary/30"
          >
            Join the Manor Family
          </Button>
        </div>

        {/* Manor wisdom */}
        <div className="text-center mt-16">
          <p className="text-cottage-cream-secondary/80 font-elegant italic text-lg">
            "The greatest compliment an artist can receive is not just praise
            for their work, but the trust of those who choose to wear their art
            forever."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
