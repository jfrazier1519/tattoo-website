import React from "react";

/**
 * Full-page home backdrop: one base color edge-to-edge (no bottom “band”),
 * soft light from the top only, plus subtle wood grain.
 */
const HomeBackground = () => (
  <div
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    aria-hidden
  >
    <div className="absolute inset-0 bg-[#0c0a09]" />
    <div
      className="absolute inset-x-0 top-0 h-[min(90vh,1280px)] bg-gradient-to-b from-stone-800/35 via-stone-900/15 to-transparent"
      aria-hidden
    />
    <div className="absolute inset-0 bg-wood-texture opacity-[0.07]" />
  </div>
);

export default HomeBackground;
