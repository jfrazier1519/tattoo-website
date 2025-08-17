import React from "react";
import { useNavigate } from "react-router-dom";
import { Laptop, PenTool, BarChart3, Code } from "lucide-react";
import Button from "../shared/Button";

const services = [
  {
    title: "Website Development by Experts",
    description:
      "We build professional, easy-to-use websites that help your business look great online.",
    icon: <Laptop className="w-10 h-10 text-teal-400" />,
    sectionId: "website-development",
  },
  {
    title: "Branding services",
    description:
      "We help create a unique look and message for your business so people remember you.",
    icon: <PenTool className="w-10 h-10 text-teal-400" />,
    sectionId: "branding-services",
  },
  {
    title: "Digital Marketing & Analytics",
    description:
      "We promote your business online and track what's working to get you better results.",
    icon: <BarChart3 className="w-10 h-10 text-teal-400" />,
    sectionId: "digital-marketing",
  },
  {
    title: "Software & MVP Development",
    description:
      "We turn your ideas into simple, working apps or tools to test and grow your business.",
    icon: <Code className="w-10 h-10 text-teal-400" />,
    sectionId: "software-mvp",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (sectionId) => {
    navigate("/services");
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-16 px-6 md:px-12 text-white font-sans">
      {/* Accent dots */}
      <span className="absolute top-20 left-8 w-12 h-12 bg-teal-400 rounded-full opacity-15 z-0"></span>
      <span className="absolute top-40 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
      <span className="absolute bottom-20 left-1/3 w-8 h-8 bg-teal-200 rounded-full opacity-20 z-0"></span>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <p className="text-sm text-white/70 mb-2 font-semibold">
          We fit your needs
        </p>
        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-white">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, description, icon, sectionId }, idx) => (
            <div
              key={idx}
              className={`group h-full min-h-[340px] p-8 rounded-2xl text-left flex flex-col justify-between shadow-xl bg-white/10 border-0 relative transition duration-200
                ${idx % 2 === 1 ? "md:-mt-8" : ""} ${
                idx % 2 === 0 ? "md:mt-8" : ""
              }`}
            >
              <div>
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-xl shadow-md bg-white/5 mx-auto md:mx-0">
                  {icon}
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug text-white">
                  {title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed">
                  {description}
                </p>
              </div>

              <Button onClick={() => handleLearnMore(sectionId)} size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
