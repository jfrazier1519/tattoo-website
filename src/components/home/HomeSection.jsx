import React from "react";

/**
 * Home page content width — no panel chrome, just max-width + padding so
 * sections sit on the page background (Bang Bang–style breathing room).
 */
const HomeSection = ({ children, className = "", wide = false }) => (
  <div
    className={`${wide ? "max-w-7xl" : "max-w-6xl"} mx-auto w-full px-4 sm:px-6 lg:px-10 ${className}`.trim()}
  >
    {children}
  </div>
);

export default HomeSection;
