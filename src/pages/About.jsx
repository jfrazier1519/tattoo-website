import React from "react";
import team from "../assets/about/team.jpg";
import utah from "../assets/about/utah.jpg";
import heroImage from "../assets/home/hero.jpg";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Button from "../components/shared/Button";

const teamMembers = [
  { name: "Jane Doe", role: "CEO", img: team },
  { name: "John Smith", role: "CTO", img: utah },
  { name: "Alex Lee", role: "Lead Designer", img: team },
  { name: "Sam Patel", role: "Developer", img: utah },
];

const WaveUnderline = () => (
  <svg
    height="16"
    width="100"
    viewBox="0 0 100 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-1/2 -translate-x-1/2 bottom-0"
  >
    <path
      d="M0 8 Q 25 16 50 8 T 100 8"
      stroke="#2dd4bf"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#214045] to-white text-gray-900">
      {/* Artistic Hero/Intro Section */}
      <section className="relative pt-32 pb-8 px-4 max-w-6xl mx-auto">
        {/* Accent dots */}
        <span className="absolute top-20 left-8 w-12 h-12 bg-teal-400 rounded-full opacity-15 z-0"></span>
        <span className="absolute top-40 right-12 w-8 h-8 bg-teal-300 rounded-full opacity-25 z-0"></span>
        <span className="absolute bottom-20 left-1/4 w-10 h-10 bg-teal-200 rounded-full opacity-20 z-0"></span>

        <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
          {/* Headline and values, left-aligned, flowing */}
          <div className="col-span-2 flex flex-col gap-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-0 leading-tight">
              <span className="block">Designers,</span>
              <span className="block md:ml-12">thinkers &</span>
              <span className="block md:ml-24">collaborators</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2">
              <div className="bg-white/10 rounded-xl px-6 py-4 shadow-md w-full md:w-auto">
                <div className="text-teal-400 font-bold text-lg mb-1">
                  Innovative
                </div>
                <div className="text-gray-200 text-sm">
                  Always exploring new ideas and technologies.
                </div>
              </div>
              <div className="bg-white/10 rounded-xl px-6 py-4 shadow-md w-full md:w-auto">
                <div className="text-teal-400 font-bold text-lg mb-1">
                  Dedicated
                </div>
                <div className="text-gray-200 text-sm">
                  Committed to your success, every step of the way.
                </div>
              </div>
              <div className="bg-white/10 rounded-xl px-6 py-4 shadow-md w-full md:w-auto">
                <div className="text-teal-400 font-bold text-lg mb-1">
                  Collaborative
                </div>
                <div className="text-gray-200 text-sm">
                  We work with you, not just for you.
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-xl mt-4">
              We help startups and businesses grow with innovative digital
              solutions, creative design, and a passion for results.
            </p>
            <Button to="/contact" size="sm" className="mt-2">
              Get Started
            </Button>
          </div>
          {/* Artistic image block, overlapping */}
          <div className="relative flex justify-end md:justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <img
                src={team}
                alt="Our team"
                className="rounded-2xl shadow-lg w-full object-cover relative z-10"
              />
              <img
                src={utah}
                alt="Utah landscape"
                className="rounded-2xl shadow-lg w-2/3 object-cover absolute -bottom-8 -left-8 border-4 border-white z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Overlapping images and text */}
      <section className="relative max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Accent dots */}
        <span className="absolute top-16 left-8 w-8 h-8 bg-teal-400 rounded-full opacity-20 z-0"></span>
        <span className="absolute bottom-24 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-30 z-0"></span>
        {/* Overlapping images left */}
        <div className="relative w-full md:w-1/2 flex-shrink-0">
          <img
            src={heroImage}
            alt="Story main"
            className="rounded-xl shadow-xl w-4/5 md:w-3/4 object-cover relative z-10"
          />
          <img
            src={utah}
            alt="Story accent"
            className="rounded-xl shadow-lg w-1/2 object-cover absolute -bottom-8 -right-8 border-4 border-white z-0"
          />
        </div>
        {/* Text right, flowing around images */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white mb-2">Our story</h2>
          <p className="text-gray-200 mb-2">
            We’re a team of passionate creators, strategists, and technologists
            dedicated to helping you achieve your vision. Our journey began with
            a simple idea: empower others to succeed in the digital world.
          </p>
          <p className="text-gray-300 mb-2">
            We believe in the power of collaboration, innovation, and
            dedication. Every project is a new opportunity to create something
            meaningful and impactful.
          </p>
          <Button to="/contact" size="sm" className="mt-2">
            Get Started
          </Button>
        </div>
      </section>

      {/* Our Work - 1 large left, 2 stacked right */}
      <section className="max-w-6xl mx-auto py-16 px-4 relative">
        {/* Accent dots */}
        <span className="absolute top-8 left-12 w-10 h-10 bg-teal-400 rounded-full opacity-15 z-0"></span>
        <span className="absolute bottom-16 right-8 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Our Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Large image left */}
          <div className="md:row-span-2 md:col-span-1">
            <img
              src={heroImage}
              alt="Project 1"
              className="rounded-xl shadow-md object-cover w-full h-full min-h-[300px] max-h-[500px]"
            />
          </div>
          {/* Two stacked images right */}
          <div className="flex flex-col gap-8 md:col-span-2">
            <img
              src={team}
              alt="Project 2"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
            <img
              src={utah}
              alt="Project 3"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
          </div>
        </div>
      </section>

      {/* Artistic Team Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Our Team
        </h2>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center relative z-10
                ${i % 2 === 0 ? "md:-mt-6" : "md:mt-6"}
              `}
            >
              <div
                className={`w-28 h-28 rounded-full flex items-center justify-center mb-3 relative shadow-lg
                ${
                  i % 3 === 0
                    ? "bg-teal-100"
                    : i % 3 === 1
                    ? "bg-white"
                    : "bg-teal-50"
                }
                border-4 border-white overflow-visible`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-teal-300"
                />
                {/* Overlap accent circle */}
                {i === 1 && (
                  <span className="absolute -right-4 -bottom-2 w-6 h-6 bg-teal-400 rounded-full opacity-60 z-0"></span>
                )}
                {i === 2 && (
                  <span className="absolute -left-3 -top-3 w-5 h-5 bg-teal-200 rounded-full opacity-70 z-0"></span>
                )}
              </div>
              <div className="text-lg font-semibold text-white">
                {member.name}
              </div>
              <div className="text-teal-300 text-sm">{member.role}</div>
            </div>
          ))}
          {/* Decorative floating accent */}
          <span className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-teal-200 text-7xl opacity-30 z-0 select-none pointer-events-none">
            • • •
          </span>
        </div>
      </section>

      {/* Combined Blog + Get Started CTA */}
      <footer className="py-16 px-4 text-center relative overflow-hidden">
        {/* Accent dots */}
        <span className="absolute top-12 left-8 w-8 h-8 bg-teal-400 rounded-full opacity-20 z-0"></span>
        <span className="absolute bottom-20 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
        <div className="max-w-2xl mx-auto mb-12 rounded-2xl bg-[#1a2a2e] px-8 py-10 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Want to Learn How We Help Founders Succeed?
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            Get tips, stories, and startup wisdom in our Startup Insights
            Blog—or get in touch to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/blog" variant="outline" size="lg">
              Read Startup Insights
            </Button>
            <Button to="/contact" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
