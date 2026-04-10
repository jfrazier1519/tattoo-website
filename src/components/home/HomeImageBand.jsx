import React from "react";

/**
 * Full-bleed editorial image band (Bang Bang–style breathing room between sections).
 */
const HomeImageBand = ({
  image,
  alt = "",
  caption,
  className = "",
  heightClass = "min-h-[36vh] max-h-[480px] md:min-h-[42vh] md:max-h-[560px]",
}) => (
  <figure
    className={`relative w-screen max-w-[100vw] left-1/2 -translate-x-1/2 my-14 md:my-20 lg:my-24 ${className}`.trim()}
  >
    <div className={`relative w-full overflow-hidden bg-stone-950 ${heightClass}`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        aria-hidden
      />
    </div>
    {caption ? (
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 md:px-12 md:pb-8">
        <p className="max-w-2xl text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-cottage-green-primary/90">
          {caption}
        </p>
      </figcaption>
    ) : null}
  </figure>
);

export default HomeImageBand;
