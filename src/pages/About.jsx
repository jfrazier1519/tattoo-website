import React from "react";
import Button from "../components/shared/Button";

const About = () => {
  return (
    <>
      {/* My Story Section - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <section className="pt-20 md:pt-32 pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-cottage-green-primary">
                    My Story
                  </h1>
                  <p className="text-base sm:text-lg text-cottage-text-muted mb-4 md:mb-6">
                    I've always been drawn to the darker side of art—the mysterious,
                    the edgy, the things that make people look twice. But I also
                    have a soft spot for the cute and adorable, especially when it
                    has a dark twist.
                  </p>
                  <p className="text-base sm:text-lg text-cottage-text-muted">
                    My journey as a tattoo artist began with a passion for creating
                    unique pieces that blend gothic aesthetics with elements that
                    make people smile. I love working with clients to bring their
                    vision to life, whether it's a dark rose with intricate shading
                    or an adorable demon character.
                  </p>
                </div>

                <div className="relative order-1 lg:order-2">
                  <img
                    src="/assets/about/about.jpg"
                    alt="Taylor Jae - Tattoo Artist"
                    className="h-auto w-full max-h-[24rem] md:max-h-[32rem] object-contain rounded-lg border border-cottage-bg-border shadow-cottage mx-auto lg:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Me Section - Charcoal to Black */}
      <div className="bg-gradient-to-b from-[#0c0a09] to-[#0a0a0a]">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-white">
                Why Choose Me?
              </h2>
              <p className="text-lg sm:text-xl text-cottage-text-muted max-w-3xl mx-auto px-4">
                I'm not just a tattoo artist—I'm a collaborator, a creative
                partner, and someone who genuinely cares about your experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Unique Style
                </h3>
                <p className="text-cottage-text-muted text-sm">
                  My dark, edgy, and cute aesthetic is unlike anything else you'll
                  find.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Collaborative
                </h3>
                <p className="text-cottage-text-muted text-sm">
                  I work with you to create exactly what you envision, not just
                  what I want to do.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cottage-gradient from-cottage-green-accent to-cottage-green-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Quality Focus
                </h3>
                <p className="text-cottage-text-muted text-sm">
                  Every piece is created with attention to detail and a commitment
                  to excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💖</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Client Care</h3>
                <p className="text-cottage-text-muted text-sm">
                  Your comfort, safety, and satisfaction are my top priorities
                  throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section - Black */}
      <div className="bg-[#0a0a0a]">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white">
              Ready to Work Together?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                to="/contact"
                size="lg"
                className="bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-cottage"
              >
                Get In Touch
              </Button>
              <Button
                to="/gallery"
                size="lg"
                variant="outline"
                className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-cottage-bg-accent font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
