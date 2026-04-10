import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";
import Button from "../components/shared/Button";
import FinalCTASection from "../components/home/FinalCTASection";
import {
  homeAccentHeading,
  homeBody,
  homeSectionTitle,
  editorialInPageLink,
  editorialPanel,
} from "../components/home/homeTypography.js";
import {
  eventHasDetailPage,
  formatEventDateDisplay,
} from "../utils/eventUtils.js";

const EventDetail = () => {
  const { slug } = useParams();
  const { eventsPage } = useSiteContent();

  const event = useMemo(
    () => eventsPage.items.find((e) => e.slug === slug),
    [eventsPage.items, slug],
  );

  if (!event) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-stone-950 px-6 text-center">
        <h1 className={`${homeAccentHeading} mb-3`}>
          {eventsPage.notFoundTitle}
        </h1>
        <p className={`${homeBody} mb-8 max-w-md`}>
          {eventsPage.notFoundBody}
        </p>
        <Button to="/events" variant="primary" size="lg">
          {eventsPage.notFoundCta}
        </Button>
      </div>
    );
  }

  if (!eventHasDetailPage(event)) {
    const dateLine = formatEventDateDisplay(event);
    const ext = event.externalUrl?.trim();
    return (
      <>
        <div className="min-h-[50vh] bg-stone-950 px-4 py-16">
          <div className="container mx-auto max-w-xl text-center">
            <Link
              to="/events"
              className={`mb-8 inline-block text-sm ${editorialInPageLink}`}
            >
              {eventsPage.backToEvents}
            </Link>
            <h1 className={`${homeSectionTitle} mb-3`}>{event.title}</h1>
            {dateLine ? (
              <p className="mb-4 text-sm text-stone-500">{dateLine}</p>
            ) : null}
            {(event.location || event.times) && (
              <div className="mb-4 space-y-1 text-sm text-stone-500">
                {event.location ? <p>{event.location}</p> : null}
                {event.times ? <p>{event.times}</p> : null}
              </div>
            )}
            {event.summary ? (
              <p className={`${homeBody} mb-6`}>{event.summary}</p>
            ) : null}
            <p className="mb-8 text-sm text-stone-500">
              {eventsPage.noDetailPageBody}
            </p>
            {ext ? (
              <a
                href={ext}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-8 inline-flex items-center ${editorialInPageLink}`}
              >
                {eventsPage.viewEventSite}
              </a>
            ) : null}
            <div>
              <Button to="/events" variant="primary" size="lg">
                {eventsPage.notFoundCta}
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-stone-950">
          <FinalCTASection />
        </div>
      </>
    );
  }

  const dateLine = formatEventDateDisplay(event);
  const ext = event.externalUrl?.trim();

  return (
    <>
      <div className="border-b border-white/10 bg-stone-950">
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              to="/events"
              className={`mb-6 inline-block text-sm md:text-base ${editorialInPageLink}`}
            >
              {eventsPage.backToEvents}
            </Link>
            <h1 className={`${homeSectionTitle} mb-4`}>{event.title}</h1>
            {dateLine ? (
              <p className="mb-4 text-lg text-stone-500">{dateLine}</p>
            ) : null}
            {(event.location || event.times) && (
              <div className="mb-6 space-y-1 text-stone-500">
                {event.location ? <p>{event.location}</p> : null}
                {event.times ? <p>{event.times}</p> : null}
              </div>
            )}
            {ext ? (
              <a
                href={ext}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${editorialInPageLink}`}
              >
                {eventsPage.viewEventSite}
              </a>
            ) : null}
          </div>
        </section>
      </div>

      <div className="bg-stone-950 pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4">
          {event.summary ? (
            <p className={`${homeBody} mb-8 text-lg`}>{event.summary}</p>
          ) : null}

          {event.detailIntro ? (
            <p className={`${homeBody} mb-8 whitespace-pre-line`}>
              {event.detailIntro}
            </p>
          ) : null}

          {event.detailSections?.map((section, i) => (
            <section key={i} className="mb-8">
              {section.heading ? (
                <h2 className="mb-3 text-xl font-medium text-stone-200">
                  {section.heading}
                </h2>
              ) : (
                <h2 className="sr-only">{eventsPage.detailFallbackTitle}</h2>
              )}
              <p className={`${homeBody} whitespace-pre-line`}>
                {section.body}
              </p>
            </section>
          ))}

          {event.artGallery?.items?.length ? (
            <section className="mb-10">
              {event.artGallery.caption ? (
                <h2 className="mb-4 text-xl font-medium text-stone-200">
                  {event.artGallery.caption}
                </h2>
              ) : null}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {event.artGallery.items.map((img, idx) => (
                  <div
                    key={idx}
                    className={`overflow-hidden ${editorialPanel}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || ""}
                      className="max-h-80 w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {event.extraLinks?.length ? (
            <section>
              <h2 className="mb-3 text-xl font-medium text-stone-200">
                {eventsPage.linksHeading}
              </h2>
              <ul className="space-y-2">
                {event.extraLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={editorialInPageLink}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10 bg-stone-950">
        <FinalCTASection />
      </div>
    </>
  );
};

export default EventDetail;
