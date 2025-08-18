import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Button from "../components/shared/Button";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cottage-bg-primary text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cottage-gradient from-cottage-bg-accent via-cottage-bg-secondary to-cottage-bg-accent">
        <div className="absolute inset-0 bg-cottage-bg-accent/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
            Get In Touch
          </h1>
          <p className="text-xl text-cottage-text-secondary max-w-2xl mx-auto">
            Ready to start your tattoo journey? Let's discuss your ideas and
            create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-cottage-green-primary">
                Let's Connect
              </h2>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Location
                    </h3>
                    <p className="text-cottage-text-muted">
                      I rent a booth at a local tattoo shop. The exact location
                      will be provided when you book your appointment.
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Hours
                    </h3>
                    <p className="text-cottage-text-muted">
                      By appointment only. I'm flexible with scheduling and can
                      work around your availability.
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cottage-gradient from-cottage-green-accent to-cottage-green-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Follow My Work
                    </h3>
                    <p className="text-cottage-text-muted mb-4">
                      Check out my latest artwork and behind-the-scenes content.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center hover:from-cottage-green-hover hover:to-cottage-emerald-hover transition-all duration-300"
                      >
                        <FaInstagram className="text-white text-xl" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center hover:from-cottage-emerald-hover hover:to-cottage-green-hover transition-all duration-300"
                      >
                        <FaFacebook className="text-white text-xl" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-cottage-gradient from-cottage-green-accent to-cottage-green-secondary rounded-full flex items-center justify-center hover:from-cottage-green-hover hover:to-cottage-emerald-hover transition-all duration-300"
                      >
                        <FaTiktok className="text-white text-xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      What to Expect
                    </h3>
                    <p className="text-cottage-text-muted">
                      We'll start with a consultation to discuss your ideas,
                      placement, and style preferences. I'll create a custom
                      design just for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-cottage-green-primary">
                Send Me a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cottage-bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Have Questions?
          </h2>
          <p className="text-lg text-cottage-text-muted mb-8 max-w-2xl mx-auto">
            Check out our FAQ section for answers to common questions about the
            tattooing process, aftercare, and what to expect during your
            appointment.
          </p>
          <Button
            to="/faq"
            size="lg"
            className="bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover text-white font-bold"
          >
            View FAQ
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cottage-gradient from-cottage-bg-accent via-cottage-bg-secondary to-cottage-bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cottage-text-secondary mb-8 max-w-2xl mx-auto">
            Don't wait to start your tattoo journey. Book your appointment today
            and let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/gallery"
              size="lg"
              className="bg-white text-cottage-bg-accent hover:bg-cottage-text-primary font-bold px-8 py-4 text-lg"
            >
              Browse Gallery
            </Button>
            <Button
              to="/about"
              size="lg"
              variant="outline"
              className="border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-cottage-bg-accent font-bold px-8 py-4 text-lg"
            >
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
