import React from "react";
import heroImage from "../assets/home/hero.jpg";
import team from "../assets/about/team.jpg";
import utah from "../assets/about/utah.jpg";
import QuoteForm from "../components/contact/QuoteForm";
import { Laptop, PenTool, BarChart3, Code } from "lucide-react";
import Button from "../components/shared/Button";

const services = [
  {
    title: "Website Development",
    description:
      "We build professional, easy-to-use websites that help your business look great online.",
    features: [
      "Custom Design",
      "Responsive Build",
      "SEO Optimization",
      "Ongoing Support",
    ],
    img1: heroImage,
    img2: team,
    icon: <Laptop className="w-8 h-8 text-teal-400" />,
  },
  {
    title: "Branding Services",
    description:
      "We help create a unique look and message for your business so people remember you.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Messaging",
      "Creative Support",
    ],
    img1: team,
    img2: utah,
    icon: <PenTool className="w-8 h-8 text-teal-400" />,
  },
  {
    title: "Digital Marketing & Analytics",
    description:
      "We promote your business online and track what's working to get you better results.",
    features: [
      "Campaign Management",
      "Analytics Dashboard",
      "Content Creation",
      "Growth Strategy",
    ],
    img1: utah,
    img2: heroImage,
    icon: <BarChart3 className="w-8 h-8 text-teal-400" />,
  },
  {
    title: "Software & MVP Development",
    description:
      "We turn your ideas into simple, working apps or tools to test and grow your business.",
    features: [
      "MVP Prototyping",
      "Custom Apps",
      "Iterative Launch",
      "Product Support",
    ],
    img1: heroImage,
    img2: team,
    icon: <Code className="w-8 h-8 text-teal-400" />,
  },
];

const steps = [
  {
    title: "Discover Your Unique Needs",
    icon: <Laptop className="w-6 h-6 text-teal-400" />,
  },
  {
    title: "Tailored Strategy Development",
    icon: <PenTool className="w-6 h-6 text-teal-400" />,
  },
  {
    title: "Implementation and Launch",
    icon: <BarChart3 className="w-6 h-6 text-teal-400" />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#214045] to-white text-gray-900">
      {/* Hero/Intro with Steps */}
      <section className="pt-40 pb-12 px-4 max-w-6xl mx-auto relative">
        {/* Large faint teal dot accent */}
        <span className="absolute -top-16 left-0 w-40 h-40 bg-teal-400 rounded-full opacity-15 z-0"></span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
          Our Services
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mb-8 relative z-10">
          We offer a full suite of digital services to help your business grow,
          from branding to launch and beyond.
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-8 relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex-1 flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 shadow-md shadow-teal-400/10"
            >
              <span>{step.icon}</span>
              <span className="text-white font-semibold text-base">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero-style Website Development section */}
      <section
        id="website-development"
        className="max-w-6xl mx-auto py-24 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
      >
        {/* Artistic Overlapping Images - Larger and bolder */}
        <div className="relative flex flex-col items-center md:items-start w-full">
          <div className="relative w-[420px] h-[320px] md:w-[540px] md:h-[400px] mb-8">
            <img
              src={services[0].img1}
              alt="Website Example 1"
              className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded-3xl shadow-2xl border-4 border-white/10 z-10"
              style={{ boxShadow: "0 16px 64px 0 rgba(45,212,191,0.18)" }}
            />
            <img
              src={services[0].img2}
              alt="Website Example 2"
              className="absolute bottom-[-32px] right-[-32px] w-[55%] h-[55%] object-cover rounded-2xl shadow-xl border-4 border-white/20 z-0"
              style={{ boxShadow: "0 8px 32px 0 rgba(45,212,191,0.10)" }}
            />
            {/* Accent dot */}
            <span className="absolute -top-6 -left-6 w-12 h-12 bg-teal-400 rounded-full opacity-30 z-0"></span>
          </div>
        </div>
        {/* Textual Content */}
        <div className="flex flex-col gap-8 md:pl-8 max-w-xl">
          {/* Headline with accent */}
          <div className="flex items-start gap-4 mb-2">
            <span className="mt-2 w-2 h-10 bg-teal-400 rounded-full block" />
            <div>
              <div className="flex items-center gap-3">
                {services[0].icon}
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Website Development
                </h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mt-4 mb-2">
                {services[0].description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 relative">
            <div className="pr-0 sm:pr-8 border-r-0 sm:border-r border-white/10">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Custom Design
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Custom Strategy</li>
                <li>UI/UX</li>
                <li>Information architecture</li>
              </ul>
            </div>
            <div className="pl-0 sm:pl-8 mt-6 sm:mt-0">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Custom Build
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Ruby on Rails</li>
                <li>eCommerce</li>
                <li>Maintenance and Support</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              href="/website-market"
              variant="white"
              size="lg"
              className="relative"
            >
              See more
            </Button>
            <Button to="/contact" size="lg" className="relative">
              Get Started
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-300 rounded-full inline-block shadow-md"></span>
            </Button>
          </div>
        </div>
      </section>

      {/* Artistic Branding Services section */}
      <section
        id="branding-services"
        className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative md:flex-row-reverse"
      >
        {/* Artistic Overlapping Images - Unique arrangement (right side) */}
        <div className="relative flex flex-col items-center md:items-end w-full md:order-2">
          <div className="relative w-[400px] h-[340px] md:w-[500px] md:h-[420px] mb-8">
            <img
              src={services[1].img1}
              alt="Branding Example 1"
              className="absolute top-0 right-0 w-[70%] h-[70%] object-cover rounded-3xl shadow-2xl border-4 border-white/10 z-10"
              style={{ boxShadow: "0 16px 64px 0 rgba(45,212,191,0.14)" }}
            />
            <img
              src={services[1].img2}
              alt="Branding Example 2"
              className="absolute bottom-[-36px] left-[-36px] w-[60%] h-[60%] object-cover rounded-2xl shadow-xl border-4 border-white/20 z-0"
              style={{ boxShadow: "0 8px 32px 0 rgba(45,212,191,0.10)" }}
            />
            {/* Unique accent dot */}
            <span className="absolute top-1/2 -left-8 w-10 h-10 bg-teal-300 rounded-full opacity-30 z-0"></span>
          </div>
        </div>
        {/* Textual Content (left side) */}
        <div className="flex flex-col gap-8 md:pl-8 max-w-xl md:order-1">
          {/* Headline with unique accent */}
          <div className="mb-2 relative">
            <div className="flex items-center gap-3">
              {services[1].icon}
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight relative">
                Branding Services
                <span className="absolute left-0 -bottom-2 w-10 h-1 bg-teal-300 rounded-full opacity-70"></span>
              </h2>
            </div>
          </div>
          <p className="text-white/70 text-lg leading-relaxed mt-2 mb-2">
            {services[1].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 relative">
            <div className="pr-0 sm:pr-8 border-r-0 sm:border-r border-white/10">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Identity
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Logo Design</li>
                <li>Brand Guidelines</li>
              </ul>
            </div>
            <div className="pl-0 sm:pl-8 mt-6 sm:mt-0">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Messaging
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Messaging</li>
                <li>Creative Support</li>
              </ul>
            </div>
          </div>
          <Button to="/contact" size="lg" className="relative">
            Get Started
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-300 rounded-full inline-block shadow-md"></span>
          </Button>
          {/* Unique floating accent */}
          <span className="absolute right-0 -bottom-8 w-16 h-16 bg-teal-200 rounded-full opacity-20 z-0"></span>
        </div>
      </section>

      {/* Artistic Digital Marketing & Analytics section */}
      <section
        id="digital-marketing"
        className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
      >
        {/* Artistic Overlapping Images - Unique arrangement (left side) */}
        <div className="relative flex flex-col items-center md:items-start w-full">
          <div className="relative w-[420px] h-[320px] md:w-[540px] md:h-[400px] mb-8">
            <img
              src={services[2].img1}
              alt="Marketing Example 1"
              className="absolute top-0 left-0 w-[75%] h-[75%] object-cover rounded-3xl shadow-2xl border-4 border-white/10 z-10"
              style={{ boxShadow: "0 16px 64px 0 rgba(45,212,191,0.13)" }}
            />
            <img
              src={services[2].img2}
              alt="Marketing Example 2"
              className="absolute bottom-[-32px] right-[-32px] w-[55%] h-[55%] object-cover rounded-2xl shadow-xl border-4 border-white/20 z-0"
              style={{ boxShadow: "0 8px 32px 0 rgba(45,212,191,0.09)" }}
            />
            {/* Unique accent dot */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-teal-400 rounded-full opacity-25 z-0"></span>
          </div>
        </div>
        {/* Textual Content (right side) */}
        <div className="flex flex-col gap-8 md:pl-8 max-w-xl">
          {/* Headline with unique accent */}
          <div className="mb-2 relative flex items-center gap-3">
            {services[2].icon}
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight relative">
              Digital Marketing & Analytics
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full opacity-60"></span>
            </h2>
          </div>
          <p className="text-white/70 text-lg leading-relaxed mt-2 mb-2">
            {services[2].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 relative">
            <div className="pr-0 sm:pr-8 border-r-0 sm:border-r border-white/10">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Campaigns
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Campaign Management</li>
                <li>Content Creation</li>
              </ul>
            </div>
            <div className="pl-0 sm:pl-8 mt-6 sm:mt-0">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Analytics
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Analytics Dashboard</li>
                <li>Growth Strategy</li>
              </ul>
            </div>
          </div>
          <Button to="/contact" size="lg" className="relative">
            Get Started
            <span className="absolute left-[-28px] top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full inline-block shadow-md"></span>
          </Button>
          {/* Unique floating accent */}
          <span className="absolute left-0 -bottom-8 w-16 h-16 bg-teal-200 rounded-full opacity-20 z-0"></span>
        </div>
      </section>

      {/* Artistic Software & MVP Development section */}
      <section
        id="software-mvp"
        className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative md:flex-row-reverse"
      >
        {/* Artistic Overlapping Images - Unique arrangement (right side) */}
        <div className="relative flex flex-col items-center md:items-end w-full md:order-2">
          <div className="relative w-[420px] h-[320px] md:w-[540px] md:h-[400px] mb-8">
            <img
              src={services[3].img1}
              alt="MVP Example 1"
              className="absolute top-0 right-0 w-[80%] h-[80%] object-cover rounded-3xl shadow-2xl border-4 border-white/10 z-10"
              style={{ boxShadow: "0 16px 64px 0 rgba(45,212,191,0.13)" }}
            />
            <img
              src={services[3].img2}
              alt="MVP Example 2"
              className="absolute bottom-[-32px] left-[-32px] w-[55%] h-[55%] object-cover rounded-2xl shadow-xl border-4 border-white/20 z-0"
              style={{ boxShadow: "0 8px 32px 0 rgba(45,212,191,0.09)" }}
            />
            {/* Unique accent dot */}
            <span className="absolute bottom-0 right-0 w-10 h-10 bg-teal-400 rounded-full opacity-25 z-0 translate-x-1/2 translate-y-1/2"></span>
          </div>
        </div>
        {/* Textual Content (left side) */}
        <div className="flex flex-col gap-8 md:pl-8 max-w-xl md:order-1">
          {/* Headline with unique accent */}
          <div className="mb-2 relative flex items-center gap-3">
            {services[3].icon}
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight relative">
              Software & MVP Development
              <span className="absolute left-0 -top-4 w-1 h-8 bg-teal-400 rounded-full opacity-70"></span>
            </h2>
          </div>
          <p className="text-white/70 text-lg leading-relaxed mt-2 mb-2">
            {services[3].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 relative">
            <div className="pr-0 sm:pr-8 border-r-0 sm:border-r border-white/10">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Prototyping
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>MVP Prototyping</li>
                <li>Custom Apps</li>
              </ul>
            </div>
            <div className="pl-0 sm:pl-8 mt-6 sm:mt-0">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Launch & Support
              </h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1 text-base font-light">
                <li>Iterative Launch</li>
                <li>Product Support</li>
              </ul>
            </div>
          </div>
          <Button to="/contact" size="lg" className="relative">
            Get Started
            <span className="absolute right-[-28px] top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full inline-block shadow-md"></span>
          </Button>
          {/* Unique floating accent */}
          <span className="absolute left-0 -bottom-8 w-16 h-16 bg-teal-200 rounded-full opacity-20 z-0"></span>
        </div>
      </section>

      {/* Request a Quote Section */}
      <section
        id="quote"
        className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start relative"
      >
        {/* Playful accent dot */}
        <span className="absolute -top-8 left-0 w-14 h-14 bg-teal-200 rounded-full opacity-30 z-0"></span>
        <div className="md:w-1/3 flex flex-col gap-6 z-10 min-w-[220px] max-w-sm">
          <div className="flex items-center gap-3 mb-2 relative">
            <h2 className="text-3xl font-extrabold text-gray-900 relative">
              Request a Quote
              <span className="absolute left-0 -bottom-2 w-10 h-1 bg-teal-400 rounded-full opacity-70"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Ready to get started? Fill out the form and our team will reach out
            to help you launch your next project.
          </p>
        </div>
        <div className="md:w-2/3 w-full z-10">
          <QuoteForm cardMode />
        </div>
      </section>
    </div>
  );
};

export default Services;
