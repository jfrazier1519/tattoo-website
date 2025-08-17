import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Button from "./shared/Button";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: "/", label: "HOME PAGE" },
    { path: "/services", label: "SERVICES" },
    { path: "/about", label: "ABOUT US" },
    { path: "/contact", label: "CONTACT US" }, // Will expand in future
  ];

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === "/";

  useEffect(() => {
    const checkScroll = () => {
      const hasScrolledPastHero = window.scrollY > window.innerHeight * 0.9;
      setScrolled(hasScrolledPastHero);
    };

    if (isHome) {
      const raf = requestAnimationFrame(checkScroll);
      window.addEventListener("scroll", checkScroll);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", checkScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-sans text-white transition-colors duration-300 ${
        isHome && !scrolled
          ? "bg-transparent"
          : "bg-black/60 backdrop-blur-sm shadow"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Left: Dummy Logo */}
        <Link
          to="/"
          className="text-xl font-medium tracking-wider uppercase text-white"
        >
          L
        </Link>

        {/* Center: Nav Items */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 uppercase text-sm tracking-wide font-medium">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative pb-1 transition ${
                isActive(path)
                  ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
                  : "text-white/80 hover:text-white hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white/50"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Get Started Button */}
        <Button to="/contact" size="sm" className="hidden md:inline-block">
          Get Started
        </Button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-secondary text-white md:hidden px-6 py-4 space-y-4">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block uppercase text-base tracking-wide py-2 ${
                isActive(path) ? "font-bold underline" : "text-white/80"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Button
            to="/contact"
            size="sm"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
