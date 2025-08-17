import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cottage-bg-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">T</span>
              </div>
              <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
                Tattoo Studio
              </span>
            </div>
            <p className="text-cottage-text-muted mb-6 max-w-md">
              Creating unique, dark, and edgy artwork that tells your story.
              Specializing in gothic aesthetics with a cute twist.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center hover:from-cottage-green-hover hover:to-cottage-emerald-hover transition-all duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center hover:from-cottage-emerald-hover hover:to-cottage-green-hover transition-all duration-300"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cottage-gradient from-cottage-green-accent to-cottage-green-secondary rounded-full flex items-center justify-center hover:from-cottage-green-hover hover:to-cottage-emerald-hover transition-all duration-300"
              >
                <FaTiktok className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cottage-green-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-cottage-text-muted hover:text-cottage-green-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-cottage-text-muted hover:text-cottage-green-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-cottage-text-muted hover:text-cottage-green-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cottage-text-muted hover:text-cottage-green-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cottage-green-primary">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-cottage-text-muted">Custom Tattoos</span>
              </li>
              <li>
                <span className="text-cottage-text-muted">Flash Art</span>
              </li>
              <li>
                <span className="text-cottage-text-muted">Cover-ups</span>
              </li>
              <li>
                <span className="text-cottage-text-muted">Consultations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-cottage-bg-border mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <p className="text-sm text-cottage-text-subtle">Email</p>
                <p className="text-cottage-text-secondary">
                  contact@tattoostudio.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-primary rounded-full flex items-center justify-center">
                <span className="text-white text-lg">📍</span>
              </div>
              <div>
                <p className="text-sm text-cottage-text-subtle">Location</p>
                <p className="text-cottage-text-secondary">
                  Booth Rental • By Appointment
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cottage-gradient from-cottage-green-accent to-cottage-green-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🕐</span>
              </div>
              <div>
                <p className="text-sm text-cottage-text-subtle">Hours</p>
                <p className="text-cottage-text-secondary">
                  By Appointment Only
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cottage-bg-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cottage-text-subtle text-sm">
            © 2024 Tattoo Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-sm text-cottage-text-subtle hover:text-cottage-green-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-cottage-text-subtle hover:text-cottage-green-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
