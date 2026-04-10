import React from "react";
import { FairyGlowField } from "./ambientGlow";

/**
 * Full-page home backdrop: vertical color wash + texture + fairy-light glow.
 */
const HomeBackground = () => (
  <div
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    aria-hidden
  >
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#1c1917_0%,#151311_28%,#0f0e0c_58%,#0c0a09_82%,#0a0a0a_100%)]" />
    <div className="absolute inset-0 bg-wood-texture opacity-[0.1]" />

    <FairyGlowField count={16} />
  </div>
);

export default HomeBackground;
