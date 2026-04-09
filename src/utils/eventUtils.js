const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

export function eventStartTime(event) {
  if (!event.startDate) return 0;
  return new Date(`${event.startDate}T12:00:00`).getTime();
}

/** Upcoming first (ascending by date), then past (descending). */
export function sortEventsForTimeline(events) {
  const t0 = startOfToday();
  const upcoming = events.filter((e) => eventStartTime(e) >= t0);
  const past = events.filter((e) => eventStartTime(e) < t0);
  upcoming.sort((a, b) => eventStartTime(a) - eventStartTime(b));
  past.sort((a, b) => eventStartTime(b) - eventStartTime(a));
  return { upcoming, past };
}

export function formatEventDateDisplay(event) {
  if (event.dateDisplay) return event.dateDisplay;
  if (!event.startDate) return "";
  const start = new Date(`${event.startDate}T12:00:00`);
  const end = event.endDate
    ? new Date(`${event.endDate}T12:00:00`)
    : null;
  const sameDay =
    !end || start.getTime() === end.getTime();
  if (sameDay) {
    return start.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  const sameMonth =
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear();
  if (sameMonth) {
    return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} – ${end.toLocaleDateString("en-US", { day: "numeric", year: "numeric" })}`;
  }
  return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} – ${end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
}

export function eventHasDetailPage(event) {
  if (event.showDetailPage === false) return false;
  if (event.showDetailPage === true) return true;
  return Boolean(
    event.detailIntro ||
    (event.detailSections && event.detailSections.length > 0) ||
    (event.artGallery?.items && event.artGallery.items.length > 0) ||
    (event.extraLinks && event.extraLinks.length > 0),
  );
}
