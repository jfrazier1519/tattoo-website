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
      <section className="bg-cottage-bg-accent pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-gothic uppercase tracking-wide text-cottage-cream-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-cottage-cream-secondary max-w-3xl mx-auto text-base md:text-lg mb-12">
            Here you’ll find answers to our most frequently asked questions. If
            you still need help,{" "}
            <Link
              to="/contact"
              className="relative transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cottage-amber-primary hover:after:w-full"
            >
              contact us
            </Link>{" "}
            — we’re happy to help.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.faq.questions.map((item, index) => (
            <div
              key={index}
              className="bg-cottage-bg-card p-6 border-[2px] border-cottage-amber-primary/50 shadow-cottage text-left"
            >
              <h3 className="text-xl font-gothic uppercase tracking-wide text-cottage-amber-primary mb-3">
                {item.question}
              </h3>
              <p
                className="text-cottage-cream-secondary text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="h-[2px] w-full bg-cottage-amber-primary" />
    </>
  );
};

export default FAQ;
