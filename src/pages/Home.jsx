import React, { useEffect, useRef } from "react";
import Button from "../components/shared/Button";
import ServicesSection from "../components/home/ServicesSection";
import FinalCTASection from "../components/home/FinalCTASection";
import RequestQuoteSection from "../components/home/RequestQuoteSection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  const visionRef = useRef(null);
  const consultationRef = useRef(null);
  const studioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Vision section (hero)
      if (visionRef.current) {
        const rect = visionRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          visionRef.current.style.opacity = "1";
        }
      }

      // My Process section
      if (consultationRef.current) {
        const rect = consultationRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          consultationRef.current.style.opacity = "1";
        }
      }

      // Gallery Showcase section
      if (studioRef.current) {
        const rect = studioRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          studioRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cottage-bg-primary">
      {/* Hero Section - The Vision */}
      <section
        ref={visionRef}
        className="relative h-screen flex items-center overflow-hidden transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(135deg, #0c0a09 0%, #1c1917 25%, #292524 50%, #1c1917 75%, #0c0a09 100%)",
        }}
      >
        {/* Hero background image - right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="/src/assets/home/hero.jpg"
            alt="Taylor Jae Tattoo"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Wood texture overlay */}
        <div className="absolute inset-0 bg-wood-texture opacity-20"></div>

        {/* Artistic inspiration overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cottage-bg-accent/20 via-transparent to-cottage-burgundy-primary/20"></div>

        {/* Content - left side */}
        <div className="relative z-10 w-1/2 flex items-center justify-center text-white">
          <div className="text-center max-w-2xl mx-auto px-8">
            <div className="mb-8 mx-auto w-32 h-1 bg-gradient-to-r from-cottage-amber-primary via-cottage-burgundy-primary to-cottage-copper-primary rounded-full"></div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-amber-primary via-cottage-cream-primary to-cottage-burgundy-primary">
              Taylor Jae Tattoo
            </h1>

            <p className="text-xl md:text-2xl text-cottage-cream-secondary mb-8 max-w-2xl mx-auto font-elegant">
              Where your tattoo vision becomes reality. Gothic, dark, and
              adorable artwork brought to life on your skin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/contact"
                size="lg"
                className="bg-gradient-to-r from-cottage-burgundy-primary to-cottage-copper-primary hover:from-cottage-burgundy-hover hover:to-cottage-copper-secondary text-white font-bold px-8 py-4 text-lg shadow-victorian border border-cottage-amber-primary/30"
              >
                Book Your Session
              </Button>
              <Button
                to="/gallery"
                size="lg"
                variant="outline"
                className="border-2 border-cottage-amber-primary text-cottage-amber-primary hover:bg-cottage-amber-primary hover:text-cottage-bg-accent font-bold px-8 py-4 text-lg shadow-gothic"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cottage-amber-primary animate-bounce">
          <div className="w-6 h-10 border-2 border-cottage-amber-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cottage-amber-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* My Process Section */}
      <section
        ref={consultationRef}
        className="relative min-h-screen flex items-center overflow-hidden transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(135deg, #0c0a09 0%, #1c1917 25%, #292524 50%, #1c1917 75%, #0c0a09 100%)",
        }}
      >
        {/* Wood texture overlay */}
        <div className="absolute inset-0 bg-wood-texture opacity-20"></div>

        {/* Atmospheric particles */}
        <div className="absolute top-20 left-8 w-12 h-12 bg-cottage-amber-primary rounded-full opacity-20 animate-glow animate-float animate-flicker blur-sm"></div>
        <div className="absolute top-40 right-12 w-10 h-10 bg-cottage-copper-primary rounded-full opacity-15 animate-glow animate-float animate-flicker blur-sm"></div>
        <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-cottage-burgundy-primary rounded-full opacity-25 animate-glow animate-float animate-flicker blur-sm"></div>

        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-cottage-cream-primary mb-6">
              My Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cottage-amber-primary via-cottage-burgundy-primary to-cottage-copper-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cottage-amber-primary to-cottage-copper-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-cottage-bg-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cottage-cream-primary mb-4">
                The Vision
              </h3>
              <p className="text-cottage-cream-secondary text-lg">
                We start with your idea, your story, your vision. Every tattoo
                begins with understanding what you want to express.
              </p>
            </div>

            {/* Consultation */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cottage-burgundy-primary to-cottage-copper-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-cottage-bg-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cottage-cream-primary mb-4">
                The Consultation
              </h3>
              <p className="text-cottage-cream-secondary text-lg">
                We discuss placement, size, style, and bring your vision to life
                through sketches and planning.
              </p>
            </div>

            {/* Creation */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cottage-copper-primary to-cottage-amber-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-cottage-bg-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cottage-cream-primary mb-4">
                The Creation
              </h3>
              <p className="text-cottage-cream-secondary text-lg">
                With precision and artistry, I bring your vision to life,
                creating a piece that's uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section
        ref={studioRef}
        className="relative min-h-screen flex items-center overflow-hidden transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(135deg, #0c0a09 0%, #1c1917 25%, #292524 50%, #1c1917 75%, #0c0a09 100%)",
        }}
      >
        {/* Wood texture overlay */}
        <div className="absolute inset-0 bg-wood-texture opacity-20"></div>

        {/* Atmospheric particles */}
        <div className="absolute top-20 left-8 w-12 h-12 bg-cottage-amber-primary rounded-full opacity-20 animate-glow animate-float animate-flicker blur-sm"></div>
        <div className="absolute top-40 right-12 w-10 h-10 bg-cottage-copper-primary rounded-full opacity-15 animate-glow animate-float animate-flicker blur-sm"></div>
        <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-cottage-burgundy-primary rounded-full opacity-25 animate-glow animate-float animate-flicker blur-sm"></div>

        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-cottage-cream-primary mb-6">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cottage-amber-primary via-cottage-burgundy-primary to-cottage-copper-primary rounded-full mx-auto"></div>
            <p className="text-cottage-cream-secondary text-xl mt-6 max-w-3xl mx-auto">
              A glimpse into the dark artistry and gothic elegance that defines
              my work
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Gothic Artwork */}
            <div className="group relative overflow-hidden rounded-lg shadow-gothic">
              <img
                src="/src/assets/gallery/image50.jpeg"
                alt="Gothic Artwork"
                className="w-full max-h-80 min-h-48 object-contain bg-cottage-bg-card"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-cottage-cream-primary text-lg font-semibold">
                  Gothic Artwork
                </span>
              </div>
            </div>

            {/* Dark Elegance */}
            <div className="group relative overflow-hidden rounded-lg shadow-gothic">
              <img
                src="/src/assets/gallery/image51.jpeg"
                alt="Dark Elegance"
                className="w-full max-h-80 min-h-48 object-contain bg-cottage-bg-card"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-cottage-cream-primary text-lg font-semibold">
                  Dark Elegance
                </span>
              </div>
            </div>

            {/* Victorian Style */}
            <div className="group relative overflow-hidden rounded-lg shadow-gothic">
              <img
                src="/src/assets/gallery/image46.jpeg"
                alt="Victorian Style"
                className="w-full max-h-80 min-h-48 object-contain bg-cottage-bg-card"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-cottage-cream-primary text-lg font-semibold">
                  Victorian Style
                </span>
              </div>
            </div>
          </div>

          {/* CTA to Full Gallery */}
          <div className="text-center">
            <Button
              to="/gallery"
              size="lg"
              className="bg-gradient-to-r from-cottage-burgundy-primary to-cottage-copper-primary hover:from-cottage-burgundy-hover hover:to-cottage-copper-secondary text-white font-bold px-12 py-4 text-xl shadow-victorian border border-cottage-amber-primary/30"
            >
              View Full Gallery
            </Button>
            <p className="text-cottage-cream-secondary mt-4 text-lg">
              Discover more of my dark artistry and gothic masterpieces
            </p>
          </div>
        </div>
      </section>

      {/* Traditional sections with manor theming */}
      <ServicesSection />
      <RequestQuoteSection />
      <Testimonials />
      <FinalCTASection />
    </div>
  );
};

export default Home;
