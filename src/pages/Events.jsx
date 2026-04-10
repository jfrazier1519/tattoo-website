import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";
import FinalCTASection from "../components/home/FinalCTASection";
import Button from "../components/shared/Button";
import {
  homeBody,
  homeCaption,
  homeSectionTitle,
  editorialInPageLink,
  editorialPanel,
  editorialPanelPadded,
} from "../components/home/homeTypography.js";
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
        className={`${editorialPanelPadded} text-left`}
      >
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-xl font-medium text-stone-100 md:text-2xl">
            {event.title}
          </h2>
          {dateLine ? (
            <p className="whitespace-nowrap text-sm text-stone-500 sm:text-right md:text-base">
              {dateLine}
            </p>
          ) : null}
        </div>
        {(event.location || event.times) && (
          <div className="mb-3 space-y-1 text-sm text-stone-500">
            {event.location ? <p>{event.location}</p> : null}
            {event.times ? <p>{event.times}</p> : null}
          </div>
        )}
        {event.summary ? (
          <p className={`${homeBody} mb-4 text-sm md:text-base`}>
            {event.summary}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-4">
          {hasDetail ? (
            <Link
              to={`/events/${event.slug}`}
              className={editorialInPageLink}
            >
              {eventsPage.readDetails}
            </Link>
          ) : null}
          {ext ? (
            <a
              href={ext}
              target="_blank"
              rel="noopener noreferrer"
              className={editorialInPageLink}
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
        <h2
          className={`${homeCaption} mb-4 border-b border-white/10 pb-2 md:mb-6`}
        >
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
      <div className="bg-stone-950">
        <section className="border-b border-white/10 py-12 md:py-20">
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
            <p className={`mb-3 ${homeCaption}`}>Events</p>
            <h1 className={`${homeSectionTitle} mb-4 md:mb-6`}>
              {eventsPage.heroTitle}
            </h1>
            <p className={homeBody}>{eventsPage.heroSubtitle}</p>
          </div>
        </section>
      </div>

      <div className="flex-1 bg-stone-950">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
            <aside className="flex-shrink-0 lg:w-72 xl:w-80">
              <div
                className={`lg:sticky lg:top-24 ${editorialPanel} p-5 md:p-6`}
              >
                <p className={`mb-1 ${homeCaption}`}>
                  {eventsPage.filterLegend}
                </p>
                <p className={`${homeBody} mb-5 text-sm`}>
                  {eventsPage.filterLegendSub}
                </p>
                <nav className="-mx-1 flex flex-row gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
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
                          <span className="block text-sm font-medium md:text-base">
                            {cat.label}
                          </span>
                          {cat.description ? (
                            <span className="mt-1 block text-xs leading-snug text-stone-500">
                              {cat.description}
                            </span>
                          ) : null}
                        </Button>
                      );
                    })}
                </nav>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              {empty ? (
                <p className={`${homeBody} py-12 text-center lg:text-left`}>
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

      <div className="border-t border-white/10 bg-stone-950">
        <FinalCTASection />
      </div>
    </>
  );
};

export default Events;
