/**
 * Green: Navbar logo + primary buttons (same gradient/hover as nav “Book”).
 * Headlines: solid stone/off-white so the hero isn’t “all green” next to green CTAs.
 */

const display = "font-light tracking-tight";

/** Hero headline — same tone as section titles; green reads on buttons + nav */
export const homeHeroTitle =
  `${display} text-4xl sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] text-stone-100`;

export const homeHeroSubtitle =
  "text-lg sm:text-xl md:text-2xl text-stone-400 font-light leading-relaxed";

/** Section headings — solid type (green stays on nav + buttons) */
export const homeSectionTitle =
  `${display} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-stone-100`;

export const homeFeaturedTitle =
  `${display} text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-stone-100`;

export const homeAccentHeading =
  `${display} text-2xl md:text-3xl text-stone-200`;

export const homeStepTitle =
  "text-xl md:text-2xl font-normal text-stone-200 leading-snug";

export const homeStepNum =
  "text-sm md:text-base font-medium tabular-nums text-cottage-green-primary";

export const homeBody =
  "text-base md:text-[17px] text-stone-400 leading-[1.65] text-balance";

export const homeIntro =
  "text-lg md:text-xl text-stone-300 font-light leading-relaxed";

export const homeSubtitle =
  "text-base md:text-lg text-stone-400 leading-relaxed max-w-2xl";

export const homeCaption =
  "text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-cottage-green-primary/55";

/** Editorial button paint — applied by `components/shared/Button.jsx` (`variant` primary / secondary). */
export const homeButtonPrimary =
  "bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover shadow-cottage text-white font-medium border-0 focus:!ring-cottage-green-primary focus:ring-offset-2 focus:ring-offset-stone-950";

export const homeButtonSecondary =
  "border border-cottage-green-primary/40 text-stone-200 hover:bg-cottage-green-primary/10 hover:border-cottage-green-primary/70 hover:text-cottage-green-primary font-medium focus:!ring-cottage-green-primary/50 focus:ring-offset-2 focus:ring-offset-stone-950";
