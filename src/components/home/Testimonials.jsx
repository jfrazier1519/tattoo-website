import React from "react";
import { Star } from "lucide-react";
import Button from "../shared/Button";

const testimonials = [
  {
    name: "Jessica White",
    title: "Lead, Innovate Now",
    text: "They helped us navigate the complexities of launching our product with ease!",
  },
  {
    name: "Kevin Brown",
    title: "CTO, Future Tech",
    text: "The results speak for themselves; we couldn't be happier with their services!",
  },
  {
    name: "Laura Green",
    title: "VP, Growth Solutions",
    text: "Tattoo Studio is a game changer for startups looking to make an impact!",
  },
  {
    name: "Mark Thompson",
    title: "Founder, SmartStart",
    text: "Their team is responsive, knowledgeable, and truly invested in our success!",
  },
  {
    name: "Sarah Lee",
    title: "CMO, Creative Co.",
    text: "We achieved our goals faster than we ever thought possible, thanks to Launch Digital!",
  },
  {
    name: "John Smith",
    title: "Founder, Vision Co.",
    text: "The support and guidance we received were invaluable in our launch process!",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-6 md:px-12 relative overflow-visible"
    >
      {/* Large faint quote icon accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 text-teal-100 text-[10rem] opacity-20 z-0 select-none pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="0" y="100" fontSize="120" fontFamily="serif">
            "
          </text>
        </svg>
      </div>
      {/* Accent dots */}
      <span className="absolute top-16 left-8 w-8 h-8 bg-teal-400 rounded-full opacity-25 z-0"></span>
      <span className="absolute top-32 right-12 w-5 h-5 bg-teal-300 rounded-full opacity-30 z-0"></span>
      <span className="absolute bottom-20 left-1/3 w-6 h-6 bg-teal-200 rounded-full opacity-20 z-0"></span>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-black">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map(({ name, title, text }, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 shadow-xl border-0 min-h-[180px] flex flex-col justify-between relative
                ${idx % 3 === 1 ? "md:-rotate-2 md:-translate-y-2" : ""} ${
                idx % 3 === 2 ? "md:rotate-2 md:translate-y-2" : ""
              }`}
            >
              <div className="absolute -top-6 -left-6 text-teal-100 text-6xl opacity-30 z-0 select-none pointer-events-none">
                "
              </div>
              <div className="flex text-yellow-400 mb-2 z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-black/80 mb-4 leading-relaxed z-10">
                "{text}"
              </p>
              <p className="text-base font-semibold text-black z-10">
                {name}
                <br />
                <span className="font-normal">{title}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button to="/contact" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
