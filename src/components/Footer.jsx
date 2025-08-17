import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#214045] text-white font-sans pt-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 items-start">
        {/* Logo, Mission, Contact */}
        <div className="flex flex-col gap-5 md:pr-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4 mb-1">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-[#1a2a2e]">L</span>
            </div>
            <span className="text-2xl font-extrabold tracking-wide">
              Tattoo Studio
            </span>
          </div>
          <p className="text-white/80 text-base leading-relaxed mb-2">
            Empowering startups with tailored digital solutions for immediate
            impact and sustainable growth.
          </p>
          <div className="flex flex-col gap-2 text-white/80 text-sm mb-2 mt-2">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-teal-400" />{" "}
              support@launchdigitalservices.com
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-teal-400" /> +1 (800) 999-9999
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-400" /> 456 Awesome Blvd, San
              Francisco, CA
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-2">
          <h4 className="text-base font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="mt-2">
          <h4 className="text-base font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/services">Website Development</Link>
            </li>
            <li>
              <Link to="/services">Branding & Design</Link>
            </li>
            <li>
              <Link to="/services">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/services">MVP Development</Link>
            </li>
            <li>
              <Link to="/website-market">Website Templates</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mt-2 flex flex-col gap-4">
          <h4 className="text-base font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-white/80 mb-2">
            Join our newsletter to stay informed about updates and new features.
          </p>
          <form className="flex max-w-md mb-2">
            <input
              type="email"
              placeholder="Your Email Here"
              className="flex-1 px-4 py-2 rounded-l-full text-sm text-black"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-white text-black font-bold rounded-r-full text-sm hover:bg-gray-200 transition"
            >
              Join
            </button>
          </form>
          <p className="text-[11px] mt-2 text-white/50">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-4" />

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 text-white/60 text-xs pb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-row items-center gap-4 flex-wrap">
            <span>
              &copy; {new Date().getFullYear()} Tattoo Studio. All rights
              reserved.
            </span>
            <span className="hidden md:inline">|</span>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-teal-400 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-teal-400 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-teal-400 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-teal-400 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-teal-400 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
