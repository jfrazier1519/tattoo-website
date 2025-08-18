import React from "react";
import { useNavigate } from "react-router-dom";
import { Palette, Sparkles, Heart, Zap } from "lucide-react";
import Button from "../shared/Button";

const services = [
  {
    title: "Custom Tattoo Designs",
    description:
      "Unique artwork created specifically for you, blending your ideas with my signature dark and cute aesthetic.",
    icon: <Palette className="w-10 h-10 text-cottage-teal-primary" />,
    sectionId: "custom-tattoos",
  },
  {
    title: "Flash Art Collection",
    description:
      "Pre-designed pieces in my signature style, ready to bring to life on your skin with precision and care.",
    icon: <Zap className="w-10 h-10 text-cottage-green-light" />,
    sectionId: "flash-art",
  },
  {
    title: "Cover-up Transformations",
    description:
      "Transform old tattoos into beautiful new pieces that you'll love, using advanced techniques and artistic vision.",
    icon: <Sparkles className="w-10 h-10 text-cottage-green-hover" />,
    sectionId: "cover-ups",
  },
  {
    title: "Consultation & Design",
    description:
      "Personal consultation to discuss your vision, with custom sketches and design development for your perfect piece.",
    icon: <Heart className="w-10 h-10 text-cottage-green-primary" />,
    sectionId: "consultation",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (sectionId) => {
    navigate("/gallery");
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-20 bg-cottage-bg-primary relative">
      {/* Decorative elements for manor library feel */}
      <div className="absolute inset-0 bg-wood-texture opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cottage-green-primary via-cottage-teal-primary to-cottage-green-secondary"></div>

      {/* Library atmosphere elements */}
      <div className="absolute top-20 left-8 w-12 h-12 bg-cottage-teal-primary rounded-full opacity-20 animate-glow animate-float animate-flicker blur-sm"></div>
      <div className="absolute top-40 right-12 w-10 h-10 bg-cottage-green-primary rounded-full opacity-15 animate-glow animate-float animate-flicker blur-sm"></div>
      <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-cottage-green-secondary rounded-full opacity-25 animate-glow animate-float animate-flicker blur-sm"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6 md:px-12">
        <div className="text-center mb-16">
          {/* Decorative library icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-victorian">
            <span className="text-cottage-cream-primary text-3xl">📚</span>
          </div>

          <p className="text-sm text-cottage-cream-secondary mb-2 font-semibold font-elegant">
            The Artist's Library
          </p>
          <h2 className="text-4xl md:text-5xl font-gothic font-bold mb-4 text-cottage-cream-primary">
            My Services
          </h2>
          <p className="text-xl text-cottage-cream-secondary max-w-2xl mx-auto font-elegant">
            From concept to completion, every piece is crafted with passion and
            precision
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, description, icon, sectionId }, idx) => (
            <div
              key={idx}
              className={`group h-full min-h-[380px] p-8 rounded-lg text-left flex flex-col justify-between shadow-cottage hover:shadow-gothic bg-cottage-bg-paper/90 backdrop-blur-sm border-2 border-cottage-green-primary/30 hover:border-cottage-teal-primary/60 relative transition-all duration-300 hover:-translate-y-2
                ${idx % 2 === 1 ? "md:-mt-8" : ""} ${
                idx % 2 === 0 ? "md:mt-8" : ""
              }`}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-cottage-teal-primary/20 group-hover:border-t-cottage-teal-primary/40 transition-colors duration-300"></div>

              <div>
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-xl shadow-victorian bg-gradient-to-r from-cottage-bg-leather to-cottage-bg-velvet border border-cottage-green-primary/30 mx-auto md:mx-0 group-hover:animate-glow">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug text-cottage-cream-primary font-gothic">
                  {title}
                </h3>
                <p className="text-base text-cottage-cream-secondary leading-relaxed font-elegant">
                  {description}
                </p>
              </div>

              <Button
                onClick={() => handleLearnMore(sectionId)}
                size="sm"
                className="bg-gradient-to-r from-cottage-green-secondary to-cottage-green-primary hover:from-cottage-green-hover hover:to-cottage-green-secondary text-white font-bold shadow-victorian border border-cottage-teal-primary/30"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Library catalog reference */}
        <div className="text-center mt-16">
          <p className="text-cottage-cream-secondary font-elegant mb-4">
            "Every great library contains the knowledge of ages, and every great
            tattoo tells a story worth preserving."
          </p>
          <Button
            to="/gallery"
            size="lg"
            className="bg-gradient-to-r from-cottage-green-secondary to-cottage-green-primary hover:from-cottage-green-hover hover:to-cottage-green-secondary text-white font-bold px-8 py-4 text-lg shadow-victorian border border-cottage-teal-primary/30"
          >
            Browse the Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
