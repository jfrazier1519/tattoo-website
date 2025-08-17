import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Button from "../components/shared/Button";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCogs,
  FaLightbulb,
  FaChartBar,
} from "react-icons/fa";

const iconWrapper =
  "mb-3 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border-2 border-teal-100";
const iconClass = "text-4xl text-teal-500";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-[#214045] to-white">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto w-full mt-32 md:mt-40 px-4 gap-12 relative">
        {/* Accent dots */}
        <span className="absolute top-8 left-8 w-10 h-10 bg-teal-400 rounded-full opacity-20 z-0"></span>
        <span className="absolute top-24 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
        <span className="absolute bottom-16 left-1/4 w-8 h-8 bg-teal-200 rounded-full opacity-30 z-0"></span>
        {/* Contact Details */}
        <div className="md:w-1/2 w-full flex flex-col justify-center text-white space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
            <p className="text-lg text-gray-300 mb-6">
              Empowering startups with tailored digital solutions for immediate
              impact and sustainable growth.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400 text-xl" />
              <span>hello@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-teal-400 text-xl" />
              <span>+1 (800) 999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-400 text-xl" />
              <span>456 Awesome Blvd, San Francisco, CA 94105</span>
            </div>
          </div>
        </div>
        {/* Contact Form as white card */}
        <div className="md:w-1/2 w-full flex items-center">
          <div className="w-full bg-white rounded-xl shadow-lg p-8">
            <ContactForm cardMode />
          </div>
        </div>
      </div>
      {/* Features Row Section - horizontal on desktop, vertical on mobile, with wave accent */}
      <div className="relative mt-24 mb-20 px-4 overflow-hidden">
        {/* Accent dots */}
        <span className="absolute top-16 left-8 w-8 h-8 bg-teal-400 rounded-full opacity-20 z-0"></span>
        <span className="absolute bottom-24 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
        {/* Wave SVG background accent */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[160px] pointer-events-none z-0 opacity-30">
          <svg
            viewBox="0 0 600 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0,60 Q150,120 300,60 T600,60 V160 H0 Z"
              fill="#2dd4bf"
              fillOpacity="0.18"
            />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-8 items-start justify-between relative z-10">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className={iconWrapper}>
              <FaCogs className={iconClass} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Comprehensive Digital Solutions
            </h3>
            <p className="text-gray-700">
              Turn your vision into effective solutions via experience and
              data-driven strategies. Start your digital journey today.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className={iconWrapper}>
              <FaLightbulb className={iconClass} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Expert Branding Services
            </h3>
            <p className="text-gray-700">
              Build a memorable, compelling identity with our strategic
              creativity & brand support services.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className={iconWrapper}>
              <FaChartBar className={iconClass} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Data-Driven Marketing
            </h3>
            <p className="text-gray-700">
              Integrate our proven services to supercharge marketing strategies
              and accelerate measurable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
