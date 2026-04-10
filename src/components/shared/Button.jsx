import React from "react";
import { Link } from "react-router-dom";
import {
  homeButtonPrimary,
  homeButtonSecondary,
} from "../home/homeTypography.js";

/**
 * Editorial site buttons — sharp corners (footer-style blocks), not app-pill UI.
 * Variants: primary, secondary, ghost, chip. `outline` maps to `secondary`.
 */
function normalizeVariant(variant) {
  if (variant === "outline") return "secondary";
  if (variant === "secondary" || variant === "chip" || variant === "ghost") {
    return variant;
  }
  return "primary";
}

const layout =
  "inline-flex items-center justify-center font-medium transition-[color,background-color,border-color,box-shadow,opacity] duration-200 disabled:opacity-45 disabled:cursor-not-allowed";

/** Matches footer monogram / bordered panels — no radius. */
const editorialCorners = "rounded-none";

const sizeMap = {
  sm: "px-4 py-2 text-sm leading-normal",
  md: "px-5 py-2.5 text-sm leading-normal",
  lg: "px-6 py-3 md:px-8 md:py-3.5 text-base md:text-lg leading-snug",
  xl: "px-6 py-3 md:px-10 md:py-4 text-base md:text-lg leading-snug",
};

const ghostSizeMap = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
  xl: "px-4 py-2 text-base",
};

const chipSizeMap = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm md:text-base",
  lg: "px-4 py-3 text-sm md:text-base",
};

const chipOn =
  "border-cottage-green-primary/45 bg-cottage-green-primary/10 text-stone-100";
const chipOff =
  "border-white/[0.1] bg-stone-950/40 text-stone-500 hover:border-white/15 hover:text-stone-300";

const ghostStyles =
  `${layout} ${editorialCorners} border-0 bg-transparent text-stone-400 hover:text-cottage-green-primary underline-offset-4 hover:underline decoration-cottage-green-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cottage-green-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950`;

const chipFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cottage-green-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950";

function buildClassName({ variant, size, selected, className }) {
  if (variant === "chip") {
    return [
      layout,
      `${editorialCorners} border`,
      chipFocus,
      selected ? chipOn : chipOff,
      chipSizeMap[size] ?? chipSizeMap.md,
      className,
    ]
      .filter(Boolean)
      .join(" ");
  }

  if (variant === "ghost") {
    return [ghostStyles, ghostSizeMap[size] ?? ghostSizeMap.md, className]
      .filter(Boolean)
      .join(" ");
  }

  const paint = variant === "secondary" ? homeButtonSecondary : homeButtonPrimary;
  return [
    layout,
    editorialCorners,
    paint,
    sizeMap[size] ?? sizeMap.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  selected = false,
  href,
  to,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  const v = normalizeVariant(variant);
  const classes = buildClassName({
    variant: v,
    size,
    selected,
    className,
  });

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
