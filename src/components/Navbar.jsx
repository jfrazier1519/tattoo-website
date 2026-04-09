import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./shared/Button";
import { useSiteContent } from "../hooks/useSiteContent.js";

const Navbar = () => {
  const { nav } = useSiteContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/events") {
      return (
        location.pathname === "/events" ||
        location.pathname.startsWith("/events/")
      );
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cottage-bg-accent/95 backdrop-blur-md shadow-cottage"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-y-2 min-h-16 md:min-h-[4.5rem] py-2 md:py-3">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary shrink-0"
          >
            {nav.logo}
          </Link>

          {/* Desktop Navigation — centered, wraps so EVENTS etc. stay visible */}
          <div className="hidden md:flex flex-1 justify-center items-center flex-wrap gap-x-4 lg:gap-x-6 gap-y-2 px-2 min-w-[40%] order-3 md:order-none w-full md:w-auto basis-full md:basis-auto">
            {nav.links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative pb-1 text-sm lg:text-base whitespace-nowrap transition ${
                  isActive(path)
                    ? "text-cottage-green-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cottage-green-primary"
                    : "text-white/80 hover:text-cottage-green-primary hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-cottage-green-primary/50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
            {/* Right: Book Appointment Button */}
            <Button
              to="/contact"
              size="sm"
              className="hidden md:inline-block bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover shadow-cottage"
            >
              {nav.bookAppointment}
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-cottage-green-primary transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cottage-bg-accent/95 backdrop-blur-md border-t border-cottage-bg-border">
            <div className="px-4 py-6 space-y-4">
              {nav.links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block py-2 transition ${
                    isActive(path)
                      ? "text-cottage-green-primary"
                      : "text-white/80 hover:text-cottage-green-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  to="/contact"
                  size="sm"
                  className="w-full bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover"
                  onClick={() => setIsOpen(false)}
                >
                  {nav.bookAppointment}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
