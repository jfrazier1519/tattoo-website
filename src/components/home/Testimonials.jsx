import React, { useEffect, useMemo, useState } from "react";
import { useSiteContent } from "../../hooks/useSiteContent.js";
import HomeSection from "./HomeSection";
import Button from "../shared/Button";
import { homeBody, homeSectionTitle, homeSubtitle } from "./homeTypography.js";

const CAROUSEL_MS = 6500;

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return perView;
}

const TestimonialsSection = () => {
  const { testimonials: copy } = useSiteContent();
  const { items: testimonials } = copy;
  const perView = usePerView();

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(testimonials.length / perView)),
    [testimonials.length, perView],
  );

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, CAROUSEL_MS);
    return () => window.clearInterval(id);
  }, [pageCount]);

  const visible = testimonials.slice(
    page * perView,
    page * perView + perView,
  );

  if (!testimonials.length) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-t border-white/[0.06] pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-28 relative overflow-visible z-10"
    >
      <HomeSection>
        <div className="text-center md:text-left mb-12 md:mb-16 max-w-2xl mx-auto md:mx-0">
          <h2 className={`${homeSectionTitle} mb-4 md:mb-5`}>{copy.title}</h2>
          <p className={`${homeSubtitle} mx-auto md:mx-0`}>{copy.subtitle}</p>
        </div>

        <div
          key={page}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 min-h-[11rem] md:min-h-[10rem] animate-testimonial-in"
          aria-live="polite"
        >
          {visible.map((t, i) => (
            <article
              key={`${page}-${i}`}
              className={`flex flex-col justify-center text-center md:text-left ${
                visible.length === 1 && perView === 2
                  ? "md:col-span-2 max-w-2xl mx-auto md:mx-0"
                  : ""
              }`}
            >
              <p
                className={`${homeBody} text-base md:text-lg italic text-stone-400`}
              >
                “{t.text}”
              </p>
              <footer className="mt-6 md:mt-8">
                <p className="text-sm md:text-base font-medium text-stone-200">
                  {t.name}
                </p>
                <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wide mt-1">
                  {t.title}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 mt-10 md:mt-12">
          <div
            className="flex justify-center items-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                aria-label={`Go to testimonial slide ${i + 1} of ${pageCount}`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cottage-green-primary focus:ring-offset-2 focus:ring-offset-stone-950 ${
                    i === page
                      ? "w-8 bg-cottage-green-primary"
                      : "w-1.5 bg-cottage-green-primary/25 hover:bg-cottage-green-primary/45"
                  }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Button
              type="button"
              variant="ghost"
              size="md"
              className="min-w-[5rem]"
              onClick={() =>
                setPage((p) => (p - 1 + pageCount) % pageCount)
              }
            >
              Previous
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="md"
              className="min-w-[5rem]"
              onClick={() => setPage((p) => (p + 1) % pageCount)}
            >
              Next
            </Button>
          </div>
        </div>
      </HomeSection>
    </section>
  );
};

export default TestimonialsSection;
