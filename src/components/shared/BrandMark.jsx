import React from "react";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const variantClass = {
  footer: "h-14 w-14 text-xl",
  nav: "h-10 w-10 text-lg max-[380px]:text-base",
};

export default function BrandMark({ variant = "footer", className = "" }) {
  const { footer } = useSiteContent();

  return (
    <div
      className={`flex shrink-0 items-center justify-center border border-white/[0.12] bg-stone-950/80 ${variantClass[variant]} ${className}`}
      aria-hidden
    >
      <span className="font-light tabular-nums tracking-tight text-stone-100">
        {footer.brandInitial}
      </span>
    </div>
  );
}
