import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";
import Button from "../components/shared/Button";
import FinalCTASection from "../components/home/FinalCTASection";
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#1c1917] to-[#0a0a0a] px-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {eventsPage.notFoundTitle}
        </h1>
        <p className="text-cottage-text-muted mb-8 max-w-md">
          {eventsPage.notFoundBody}
        </p>
        <Button to="/events" size="lg">
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
        <div className="min-h-[50vh] bg-gradient-to-b from-[#1c1917] to-[#0a0a0a] px-4 py-16">
          <div className="container mx-auto max-w-xl text-center">
            <Link
              to="/events"
              className="inline-block text-cottage-teal-primary hover:text-cottage-green-light text-sm mb-8"
            >
              {eventsPage.backToEvents}
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 font-gothic">
              {event.title}
            </h1>
            {dateLine ? (
              <p className="text-cottage-teal-primary mb-4">{dateLine}</p>
            ) : null}
            {(event.location || event.times) && (
              <div className="text-cottage-text-muted text-sm space-y-1 mb-4">
                {event.location ? <p>{event.location}</p> : null}
                {event.times ? <p>{event.times}</p> : null}
              </div>
            )}
            {event.summary ? (
              <p className="text-cottage-text-muted leading-relaxed mb-6">
                {event.summary}
              </p>
            ) : null}
            <p className="text-cottage-text-subtle text-sm mb-8">
              {eventsPage.noDetailPageBody}
            </p>
            {ext ? (
              <a
                href={ext}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cottage-green-primary font-semibold hover:underline mb-8"
              >
                {eventsPage.viewEventSite}
              </a>
            ) : null}
            <div>
              <Button to="/events" size="lg">
                {eventsPage.notFoundCta}
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[#0a0a0a]">
          <FinalCTASection />
        </div>
      </>
    );
  }

  const dateLine = formatEventDateDisplay(event);
  const ext = event.externalUrl?.trim();

  return (
    <>
      <div className="bg-[#1c1917]">
        <section className="relative py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link
              to="/events"
              className="inline-block text-cottage-teal-primary hover:text-cottage-green-light text-sm md:text-base mb-6"
            >
              {eventsPage.backToEvents}
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary mb-4">
              {event.title}
            </h1>
            {dateLine ? (
              <p className="text-lg text-cottage-teal-primary font-elegant mb-4">
                {dateLine}
              </p>
            ) : null}
            {(event.location || event.times) && (
              <div className="text-cottage-text-muted space-y-1 mb-6">
                {event.location ? <p>{event.location}</p> : null}
                {event.times ? <p>{event.times}</p> : null}
              </div>
            )}
            {ext ? (
              <a
                href={ext}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cottage-green-primary hover:underline font-semibold"
              >
                {eventsPage.viewEventSite}
              </a>
            ) : null}
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09] pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-p:text-cottage-text-muted prose-headings:text-white">
          {event.summary ? (
            <p className="text-cottage-text-muted text-lg leading-relaxed mb-8">
              {event.summary}
            </p>
          ) : null}

          {event.detailIntro ? (
            <p className="text-cottage-text-muted leading-relaxed mb-8 whitespace-pre-line">
              {event.detailIntro}
            </p>
          ) : null}

          {event.detailSections?.map((section, i) => (
            <section key={i} className="mb-8">
              {section.heading ? (
                <h2 className="text-xl font-bold text-cottage-green-primary mb-3">
                  {section.heading}
                </h2>
              ) : (
                <h2 className="sr-only">{eventsPage.detailFallbackTitle}</h2>
              )}
              <p className="text-cottage-text-muted leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </section>
          ))}

          {event.artGallery?.items?.length ? (
            <section className="mb-10">
              {event.artGallery.caption ? (
                <h2 className="text-xl font-bold text-cottage-green-primary mb-4">
                  {event.artGallery.caption}
                </h2>
              ) : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.artGallery.items.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg overflow-hidden border border-cottage-bg-border bg-cottage-bg-card"
                  >
                    <img
                      src={img.src}
                      alt={img.alt || ""}
                      className="w-full max-h-80 object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {event.extraLinks?.length ? (
            <section>
              <h2 className="text-xl font-bold text-cottage-green-primary mb-3">
                {eventsPage.linksHeading}
              </h2>
              <ul className="space-y-2">
                {event.extraLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cottage-teal-primary hover:underline"
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

      <div className="bg-[#0a0a0a]">
        <FinalCTASection />
      </div>
    </>
  );
};

export default EventDetail;
