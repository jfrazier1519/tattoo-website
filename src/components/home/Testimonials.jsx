import React from "react";

const testimonials = [
  {
    name: "Emma Blackwood",
    title: "Gothic Rose Enthusiast",
    text: "The artist's attention to detail is incredible! My gothic rose tattoo is exactly what I envisioned - dark, elegant, and perfectly executed.",
  },
  {
    name: "Marcus Nightshade",
    title: "Dark Art Collector",
    text: "I've been getting tattoos for years, but this studio is something special. The artistic vision and attention to detail are unmatched.",
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
    title: "Gothic Style Admirer",
    text: "The dark aesthetic and attention to detail make every visit feel special. My tattoos are works of art I'll treasure forever.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 lg:py-20 relative overflow-visible z-10"
    >

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6 md:px-12">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-cottage-teal-primary/40 to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-teal-primary rounded-full"></div>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-cottage-teal-primary via-cottage-green-primary to-cottage-teal-primary"></div>
          <div className="w-1.5 h-1.5 bg-cottage-green-primary rounded-full"></div>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-cottage-green-primary/40 to-cottage-green-primary"></div>
        </div>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover">
            What Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-cottage-text-muted">
            Real ink, real stories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {testimonials.slice(0, 3).map(({ name, title, text }, idx) => (
            <div
              key={idx}
              className="bg-cottage-bg-card/60 backdrop-blur-sm rounded-lg p-4 md:p-5 border-l-2 border-cottage-green-primary/50 hover:border-cottage-teal-primary transition-all duration-300"
            >
              {/* Testimonial text */}
              <p className="text-xs sm:text-sm text-cottage-text-muted mb-3 md:mb-4 leading-relaxed">
                {text}
              </p>

              {/* Client info */}
              <div>
                <p className="text-xs sm:text-sm font-bold text-white font-gothic">
                  {name}
                </p>
                <p className="text-xs text-cottage-text-muted uppercase tracking-wide">
                  {title}
                </p>
              </div>
            </div>
          ))}
          {/* Show remaining testimonials on desktop */}
          {testimonials.slice(3).map(({ name, title, text }, idx) => (
            <div
              key={idx + 3}
              className="hidden md:block bg-cottage-bg-card/60 backdrop-blur-sm rounded-lg p-5 border-l-2 border-cottage-green-primary/50 hover:border-cottage-teal-primary transition-all duration-300"
            >
              {/* Testimonial text */}
              <p className="text-sm text-cottage-text-muted mb-4 leading-relaxed">
                {text}
              </p>

              {/* Client info */}
              <div>
                <p className="text-sm font-bold text-white font-gothic">
                  {name}
                </p>
                <p className="text-xs text-cottage-text-muted uppercase tracking-wide">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
