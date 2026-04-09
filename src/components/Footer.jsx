import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { useSiteContent } from "../hooks/useSiteContent.js";

const Footer = () => {
  const { footer } = useSiteContent();

  return (
    <footer className="bg-cottage-bg-accent text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {footer.brandInitial}
                </span>
              </div>
              <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
                {footer.brandName}
              </span>
            </div>
            <p className="text-cottage-text-muted mb-6 max-w-md">
              {footer.tagline}
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
              {footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-cottage-text-muted hover:text-cottage-green-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cottage-green-primary">
              {footer.servicesTitle}
            </h3>
            <ul className="space-y-2">
              {footer.services.map((label) => (
                <li key={label}>
                  <span className="text-cottage-text-muted">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cottage-bg-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cottage-text-subtle text-xs sm:text-sm text-center md:text-left">
            {footer.copyright}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <Link
              to="/privacy-policy"
              className="text-xs sm:text-sm text-cottage-text-subtle hover:text-cottage-green-primary transition-colors"
            >
              {footer.privacyPolicy}
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-xs sm:text-sm text-cottage-text-subtle hover:text-cottage-green-primary transition-colors"
            >
              {footer.termsAndConditions}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
