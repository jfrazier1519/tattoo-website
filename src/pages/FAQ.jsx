import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  // FAQ data - moved from external data file
  const faqData = {
    faq: {
      questions: [
        {
          question: "What is your tattoo style?",
          answer:
            "I specialize in gothic, dark, and adorable artwork. My style combines Victorian elegance with modern edge, creating unique pieces that are both beautiful and meaningful.",
        },
        {
          question: "How do I book a consultation?",
          answer:
            "You can book a consultation through our contact form or by calling the studio directly. We'll discuss your vision, placement, and design ideas to create the perfect piece for you.",
        },
        {
          question: "What should I bring to my appointment?",
          answer:
            "Please bring a valid ID, any reference images you have, and wear comfortable clothing that allows easy access to the tattoo area. We'll provide everything else you need.",
        },
        {
          question: "How long does a tattoo session take?",
          answer:
            "Session length varies depending on the size and complexity of your design. Small pieces might take 1-2 hours, while larger pieces can take multiple sessions. We'll give you a time estimate during consultation.",
        },
        {
          question: "Do you do cover-up tattoos?",
          answer:
            "Yes! I specialize in transforming old tattoos into beautiful new pieces. During consultation, we'll discuss your options and create a design that works with your existing ink.",
        },
        {
          question: "What are your rates?",
          answer:
            "Pricing varies based on size, complexity, and session time. I offer competitive rates and will provide a detailed quote during your consultation. No two pieces are exactly alike, so pricing is customized to your specific design.",
        },
      ],
    },
  };

  return (
    <>
      {/* Hero Section - Grey */}
      <div className="bg-[#1c1917]">
        <section className="relative py-12 md:py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-cottage-text-secondary max-w-2xl mx-auto">
              Here you'll find answers to our most frequently asked questions. If
              you still need help,{" "}
              <Link
                to="/contact"
                className="text-cottage-green-primary hover:text-cottage-green-secondary transition-colors underline"
              >
                contact us
              </Link>{" "}
              — we're happy to help.
            </p>
          </div>
        </section>
      </div>

      {/* FAQ Content - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {faqData.faq.questions.map((item, index) => (
                <div
                  key={index}
                  className="bg-cottage-bg-card/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-cottage-bg-border shadow-cottage text-left"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-cottage-green-primary mb-2 md:mb-3">
                    {item.question}
                  </h3>
                  <p
                    className="text-cottage-text-muted text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
