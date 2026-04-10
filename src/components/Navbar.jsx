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

  const linkBase =
    "relative pb-1 text-sm lg:text-[15px] whitespace-nowrap transition-colors";

  const linkInactive = `${linkBase} text-stone-400 hover:text-stone-100`;
  const linkActive = `${linkBase} text-cottage-green-primary`;

  const underlineActive =
    "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-cottage-green-primary";
  const underlineHover =
    "hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:h-px hover:after:w-full hover:after:bg-white/25";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-stone-950/90 shadow-[0_1px_0_0_rgba(0,0,0,0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-y-2 py-2 md:min-h-[4.5rem] md:py-3">
          <Link
            to="/"
            className="shrink-0 font-light tracking-tight text-stone-100 max-[380px]:text-[0.95rem] sm:text-lg md:text-xl"
          >
            {nav.logo}
          </Link>

          <div className="order-3 hidden min-w-[40%] w-full flex-1 basis-full flex-wrap items-center justify-center gap-x-4 gap-y-2 px-2 md:order-none md:flex md:w-auto md:basis-auto">
            {nav.links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={
                  isActive(path)
                    ? `${linkActive} ${underlineActive}`
                    : `${linkInactive} ${underlineHover}`
                }
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              {nav.bookAppointment}
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-300 transition-colors hover:text-cottage-green-primary md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
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

        {isOpen ? (
          <div className="border-t border-white/10 bg-stone-950/95 backdrop-blur-md md:hidden">
            <div className="space-y-1 px-4 py-6">
              {nav.links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block border-l-2 py-2.5 pl-4 text-[15px] transition-colors ${
                    isActive(path)
                      ? "border-cottage-green-primary text-cottage-green-primary"
                      : "border-transparent text-stone-400 hover:border-white/20 hover:text-stone-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  {nav.bookAppointment}
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
