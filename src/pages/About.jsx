import React from "react";
import Button from "../components/shared/Button";

const About = () => {
  return (
    <div className="min-h-screen bg-cottage-bg-primary text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cottage-gradient from-cottage-bg-accent via-cottage-bg-secondary to-cottage-bg-accent">
        <div className="absolute inset-0 bg-cottage-bg-accent/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
            About Me
          </h1>
          <p className="text-xl text-cottage-text-secondary max-w-2xl mx-auto">
            The artist behind the dark, edgy, and cute artwork that tells your
            story.
          </p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-cottage-green-primary">
                My Story
              </h2>
              <p className="text-lg text-cottage-text-muted mb-6">
                I've always been drawn to the darker side of art—the mysterious,
                the edgy, the things that make people look twice. But I also
                have a soft spot for the cute and adorable, especially when it
                has a dark twist.
              </p>
              <p className="text-lg text-cottage-text-muted mb-6">
                My journey as a tattoo artist began with a passion for creating
                unique pieces that blend gothic aesthetics with elements that
                make people smile. I love working with clients to bring their
                vision to life, whether it's a dark rose with intricate shading
                or an adorable demon character.
              </p>
              <p className="text-lg text-cottage-text-muted mb-8">
                I currently rent a booth at a local shop, which gives me the
                freedom to create custom designs while maintaining the
                professional environment my clients deserve. Every tattoo I
                create is a collaboration, a piece of art that tells your story.
              </p>
            </div>

            <div className="relative">
              <img
                src="/src/assets/about/about.jpg"
                alt="Taylor Jae - Tattoo Artist"
                className="h-[32rem] w-auto max-w-full object-contain rounded-lg border border-cottage-bg-border shadow-cottage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Style Section */}
      <section className="py-20 bg-cottage-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              My Artistic Style
            </h2>
            <p className="text-xl text-cottage-text-muted max-w-3xl mx-auto">
              I specialize in creating artwork that balances darkness with
              beauty, edge with elegance, and mystery with charm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dark & Gothic */}
            <div className="bg-cottage-bg-card rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 border border-cottage-bg-border">
              <div className="w-16 h-16 bg-cottage-gradient from-cottage-bg-border to-cottage-bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🖤</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Dark & Gothic
              </h3>
              <p className="text-cottage-text-muted">
                Intricate blackwork, gothic elements, and deep shading that
                creates dramatic, eye-catching pieces.
              </p>
            </div>

            {/* Edgy & Bold */}
            <div className="bg-cottage-bg-card rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 border border-cottage-bg-border">
              <div className="w-16 h-16 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Edgy & Bold
              </h3>
              <p className="text-cottage-text-muted">
                Strong lines, bold designs, and striking imagery that makes a
                statement and shows your personality.
              </p>
            </div>

            {/* Cute with a Twist */}
            <div className="bg-cottage-bg-card rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 border border-cottage-bg-border">
              <div className="w-16 h-16 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌸</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Cute with a Twist
              </h3>
              <p className="text-cottage-text-muted">
                Adorable characters and elements with a dark edge—think cute
                demons, gothic flowers, and sweet skulls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-20 bg-cottage-bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">What I Offer</h2>
            <p className="text-xl text-cottage-text-muted max-w-3xl mx-auto">
              From custom designs to flash art, I create unique pieces that
              reflect your style and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Tattoos */}
            <div className="bg-cottage-bg-card rounded-lg p-8 border-l-4 border-cottage-green-primary border border-cottage-bg-border">
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Tattoos
              </h3>
              <p className="text-cottage-text-muted mb-6">
                Unique designs created specifically for you. I'll work with you
                to develop a concept that perfectly captures your idea and fits
                your style.
              </p>
              <ul className="text-cottage-text-subtle space-y-2">
                <li>• Personalized consultation</li>
                <li>• Custom artwork creation</li>
                <li>• Multiple design options</li>
                <li>• Revisions until you're happy</li>
              </ul>
            </div>

            {/* Flash Art */}
            <div className="bg-cottage-bg-card rounded-lg p-8 border-l-4 border-cottage-green-secondary border border-cottage-bg-border">
              <h3 className="text-2xl font-bold text-white mb-4">Flash Art</h3>
              <p className="text-cottage-text-muted mb-6">
                Pre-designed pieces in my signature style. These are perfect if
                you love my aesthetic and want something ready to go.
              </p>
              <ul className="text-cottage-text-subtle space-y-2">
                <li>• Ready-to-ink designs</li>
                <li>• My signature style</li>
                <li>• Quick appointments</li>
                <li>• Great for first tattoos</li>
              </ul>
            </div>

            {/* Cover-ups */}
            <div className="bg-cottage-bg-card rounded-lg p-8 border-l-4 border-cottage-green-accent border border-cottage-bg-border">
              <h3 className="text-2xl font-bold text-white mb-4">Cover-ups</h3>
              <p className="text-cottage-text-muted mb-6">
                Transform old tattoos into beautiful new pieces. I'll work with
                you to create a design that covers what you don't want while
                giving you something you love.
              </p>
              <ul className="text-cottage-text-subtle space-y-2">
                <li>• Professional assessment</li>
                <li>• Strategic design planning</li>
                <li>• Complete transformation</li>
                <li>• New lease on life</li>
              </ul>
            </div>

            {/* Consultations */}
            <div className="bg-cottage-bg-card rounded-lg p-8 border-l-4 border-cottage-teal-primary border border-cottage-bg-border">
              <h3 className="text-2xl font-bold text-white mb-4">
                Consultations
              </h3>
              <p className="text-cottage-text-muted mb-6">
                Not sure what you want? Let's talk! I offer consultations to
                help you figure out the perfect design, placement, and style for
                your tattoo.
              </p>
              <ul className="text-cottage-text-subtle space-y-2">
                <li>• Design brainstorming</li>
                <li>• Placement advice</li>
                <li>• Style recommendations</li>
                <li>• No pressure, just guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-cottage-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Why Choose Me?
            </h2>
            <p className="text-xl text-cottage-text-muted max-w-3xl mx-auto">
              I'm not just a tattoo artist—I'm a collaborator, a creative
              partner, and someone who genuinely cares about your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-cottage-gradient from-cottage-bg-accent via-cottage-bg-secondary to-cottage-bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Start Your Tattoo Journey?
          </h2>
          <p className="text-xl text-cottage-text-secondary mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Book your consultation
            and let's discuss your ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contact"
              size="lg"
              className="bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover text-white font-bold px-8 py-4 text-lg shadow-cottage"
            >
              Book Consultation
            </Button>
            <Button
              to="/gallery"
              size="lg"
              variant="outline"
              className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-cottage-bg-accent font-bold px-8 py-4 text-lg"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
