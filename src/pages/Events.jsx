import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";
import FinalCTASection from "../components/home/FinalCTASection";
import Button from "../components/shared/Button";
import {
  eventHasDetailPage,
  formatEventDateDisplay,
  sortEventsForTimeline,
} from "../utils/eventUtils.js";

const Events = () => {
  const { eventsPage } = useSiteContent();
  const [filterId, setFilterId] = useState(eventsPage.filterAllId);

  const categories = useMemo(
    () =>
      eventsPage.categories.filter((c) => c.id !== eventsPage.filterAllId),
    [eventsPage.categories, eventsPage.filterAllId],
  );

  const allCategory = useMemo(
    () =>
      eventsPage.categories.find((c) => c.id === eventsPage.filterAllId),
    [eventsPage.categories, eventsPage.filterAllId],
  );

  const filteredSorted = useMemo(() => {
    const list =
      filterId === eventsPage.filterAllId
        ? [...eventsPage.items]
        : eventsPage.items.filter((e) => e.categoryId === filterId);
    const { upcoming, past } = sortEventsForTimeline(list);
    return { upcoming, past };
  }, [eventsPage.filterAllId, eventsPage.items, filterId]);

  const renderEventCard = (event) => {
    const dateLine = formatEventDateDisplay(event);
    const hasDetail = eventHasDetailPage(event);
    const ext = event.externalUrl?.trim();

    return (
      <article
        key={event.slug}
        className="bg-cottage-bg-card/60 backdrop-blur-sm rounded-xl border border-cottage-bg-border shadow-cottage p-5 md:p-6 text-left"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-white font-gothic">
            {event.title}
          </h2>
          {dateLine ? (
            <p className="text-sm md:text-base text-cottage-teal-primary whitespace-nowrap sm:text-right font-elegant">
              {dateLine}
            </p>
          ) : null}
        </div>
        {(event.location || event.times) && (
          <div className="text-sm text-cottage-text-muted space-y-1 mb-3">
            {event.location ? <p>{event.location}</p> : null}
            {event.times ? <p>{event.times}</p> : null}
          </div>
        )}
        {event.summary ? (
          <p className="text-cottage-text-muted text-sm md:text-base leading-relaxed mb-4">
            {event.summary}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          {hasDetail ? (
            <Link
              to={`/events/${event.slug}`}
              className="inline-flex items-center text-cottage-green-primary hover:text-cottage-green-light font-semibold text-sm md:text-base underline-offset-2 hover:underline"
            >
              {eventsPage.readDetails}
            </Link>
          ) : null}
          {ext ? (
            <a
              href={ext}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cottage-cream-secondary hover:text-cottage-teal-primary text-sm md:text-base underline-offset-2 hover:underline"
            >
              {eventsPage.viewEventSite}
            </a>
          ) : null}
        </div>
      </article>
    );
  };

  const renderSection = (title, items) => {
    if (!items.length) return null;
    return (
      <div className="mb-10 md:mb-14">
        <h2 className="text-lg md:text-xl font-bold text-cottage-green-primary mb-4 md:mb-6 border-b border-cottage-bg-border pb-2">
          {title}
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {items.map(renderEventCard)}
        </div>
      </div>
    );
  };

  const empty =
    filteredSorted.upcoming.length === 0 && filteredSorted.past.length === 0;

  return (
    <>
      <div className="bg-[#1c1917]">
        <section className="relative py-12 md:py-20">
          <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
              {eventsPage.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-cottage-text-secondary">
              {eventsPage.heroSubtitle}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09] flex-1">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16">
            {/* Filter column — “compass” */}
            <aside className="lg:w-72 xl:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 rounded-xl border border-cottage-green-primary/20 bg-cottage-bg-card/40 backdrop-blur-sm p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cottage-teal-primary mb-1">
                  {eventsPage.filterLegend}
                </p>
                <p className="text-sm text-cottage-text-muted mb-5 leading-relaxed">
                  {eventsPage.filterLegendSub}
                </p>
                <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
                  {[allCategory, ...categories]
                    .filter(Boolean)
                    .map((cat) => {
                      const active = filterId === cat.id;
                      return (
                        <Button
                          key={cat.id}
                          type="button"
                          variant="chip"
                          selected={active}
                          size="lg"
                          onClick={() => setFilterId(cat.id)}
                          className="w-full flex-shrink-0 text-left !inline-flex !flex-col !items-stretch !justify-start lg:flex-shrink"
                        >
                          <span className="block font-semibold text-sm md:text-base">
                            {cat.label}
                          </span>
                          {cat.description ? (
                            <span className="block text-xs mt-1 opacity-90 leading-snug">
                              {cat.description}
                            </span>
                          ) : null}
                        </Button>
                      );
                    })}
                </nav>
              </div>
            </aside>

            {/* Timeline */}
            <div className="flex-1 min-w-0">
              {empty ? (
                <p className="text-cottage-text-muted text-center lg:text-left py-12">
                  {eventsPage.emptyFiltered}
                </p>
              ) : (
                <>
                  {renderSection(
                    eventsPage.sectionUpcoming,
                    filteredSorted.upcoming,
                  )}
                  {renderSection(
                    eventsPage.sectionPast,
                    filteredSorted.past,
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0a]">
        <FinalCTASection />
      </div>
    </>
  );
};

export default Events;
