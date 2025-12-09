import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      {/* Hero Section - Grey */}
      <div className="bg-[#1c1917]">
        <section className="relative py-12 md:py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-cottage-text-secondary max-w-2xl mx-auto">
            Ready to start your tattoo journey? Let's discuss your ideas and
            create something beautiful together.
          </p>
        </div>
        </section>
      </div>

      {/* Contact Information - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Details */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-cottage-green-primary">
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
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-cottage-green-primary">
                Send Me a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
