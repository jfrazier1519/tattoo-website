import React from "react";
import Button from "./Button";

/** Centered ornament above headline (full-width band still uses this for rhythm) */
export function SiteCTADivider() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
      <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-cottage-teal-primary/50 to-cottage-teal-primary" />
      <div className="w-1.5 h-1.5 bg-cottage-teal-primary rounded-full" />
      <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-cottage-teal-primary via-cottage-green-primary to-cottage-teal-primary" />
      <div className="w-1.5 h-1.5 bg-cottage-green-primary rounded-full" />
      <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-cottage-green-primary/50 to-cottage-green-primary" />
    </div>
  );
}

function CompactDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mb-5 md:mb-6">
      <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-cottage-teal-primary/50" />
      <div className="w-1.5 h-1.5 bg-cottage-teal-primary rounded-full" />
      <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-cottage-teal-primary/50" />
    </div>
  );
}

const primaryBtnFull =
  "bg-gradient-to-r from-cottage-green-primary to-cottage-teal-primary hover:from-cottage-green-secondary hover:to-cottage-green-primary text-white font-semibold px-6 py-3 md:px-10 md:py-5 text-base md:text-lg shadow-lg border-0";

const secondaryBtnFull =
  "border-2 border-cottage-teal-primary text-cottage-cream-secondary hover:bg-cottage-teal-primary hover:text-white font-semibold px-6 py-3 md:px-10 md:py-5 text-base md:text-lg shadow-lg";

const primaryBtnCompact =
  "bg-gradient-to-r from-cottage-green-primary to-cottage-teal-primary hover:from-cottage-green-secondary hover:to-cottage-green-primary text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-lg border-0";

const secondaryBtnCompact =
  "border-2 border-cottage-teal-primary text-cottage-cream-secondary hover:bg-cottage-teal-primary hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-lg";

const titleFull =
  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover";

const titleCompact =
  "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cottage-teal-primary via-cottage-cream-primary to-cottage-green-hover";

const subtitleFull =
  "text-lg sm:text-xl text-cottage-text-secondary mb-6 md:mb-10 max-w-2xl mx-auto";

const subtitleCompact =
  "text-cottage-text-secondary text-base md:text-lg mb-7 max-w-2xl mx-auto";

/**
 * Full-bleed CTA band: edge-to-edge section, own background — not a floating card.
 *
 * @param {{ to: string, label: string }} primary
 * @param {{ to: string, label: string } | undefined} [secondary]
 */
const SiteCTASection = ({
  variant = "full",
  title,
  subtitle,
  primary,
  secondary,
  className = "",
}) => {
  const full = variant === "full";

  return (
    <section
      className={`relative w-full z-10 border-y border-cottage-teal-primary/25 ${
        full
          ? "py-16 md:py-20 lg:py-28"
          : "py-12 md:py-16 lg:py-20"
      } bg-gradient-to-b from-[#1c1917] via-[#15231f] to-[#1c1917] ${className}`.trim()}
    >
      {/* Horizontal wash so the band reads across the whole viewport */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cottage-green-primary/[0.07] via-transparent to-cottage-teal-primary/[0.08]"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cottage-teal-primary/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cottage-green-primary/35 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div
          className={`mx-auto text-center ${
            full ? "max-w-4xl" : "max-w-3xl"
          }`}
        >
          {full ? <SiteCTADivider /> : <CompactDivider />}
          <h2 className={full ? titleFull : titleCompact}>{title}</h2>
          {subtitle ? (
            <p className={full ? subtitleFull : subtitleCompact}>{subtitle}</p>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              to={primary.to}
              size={full ? "xl" : "lg"}
              className={full ? primaryBtnFull : primaryBtnCompact}
            >
              {primary.label}
            </Button>
            {secondary ? (
              <Button
                to={secondary.to}
                size={full ? "xl" : "lg"}
                variant="outline"
                className={full ? secondaryBtnFull : secondaryBtnCompact}
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteCTASection;
