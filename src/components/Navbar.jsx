import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./shared/Button";

const Navbar = () => {
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

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cottage-bg-accent/95 backdrop-blur-md shadow-cottage"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary"
          >
            TATTOO STUDIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative pb-1 transition ${
                isActive("/")
                  ? "text-cottage-green-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cottage-green-primary"
                  : "text-white/80 hover:text-cottage-green-primary hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-cottage-green-primary/50"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`relative pb-1 transition ${
                isActive("/about")
                  ? "text-cottage-green-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cottage-green-primary"
                  : "text-white/80 hover:text-cottage-green-primary hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-cottage-green-primary/50"
              }`}
            >
              ABOUT
            </Link>
            <Link
              to="/gallery"
              className={`relative pb-1 transition ${
                isActive("/gallery")
                  ? "text-cottage-green-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cottage-green-primary"
                  : "text-white/80 hover:text-cottage-green-primary hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-cottage-green-primary/50"
              }`}
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className={`relative pb-1 transition ${
                isActive("/contact")
                  ? "text-cottage-green-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cottage-green-primary"
                  : "text-white/80 hover:text-cottage-green-primary hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-cottage-green-primary/50"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Right: Book Appointment Button */}
          <Button
            to="/contact"
            size="sm"
            className="hidden md:inline-block bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover shadow-cottage"
          >
            Book Appointment
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-cottage-green-primary transition-colors"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cottage-bg-accent/95 backdrop-blur-md border-t border-cottage-bg-border">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className={`block py-2 transition ${
                  isActive("/")
                    ? "text-cottage-green-primary"
                    : "text-white/80 hover:text-cottage-green-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`block py-2 transition ${
                  isActive("/about")
                    ? "text-cottage-green-primary"
                    : "text-white/80 hover:text-cottage-green-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/gallery"
                className={`block py-2 transition ${
                  isActive("/gallery")
                    ? "text-cottage-green-primary"
                    : "text-white/80 hover:text-cottage-green-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                to="/contact"
                className={`block py-2 transition ${
                  isActive("/contact")
                    ? "text-cottage-green-primary"
                    : "text-white/80 hover:text-cottage-green-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <div className="pt-4">
                <Button
                  to="/contact"
                  size="sm"
                  className="w-full bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
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
