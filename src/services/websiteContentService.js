import { siteContent } from "../data/siteContent.js";

/**
 * Fetches all public-site copy. Today this resolves to bundled data; later,
 * replace the implementation with `fetch`/Firestore/etc. and keep the return shape stable.
 */
export async function fetchWebsiteContent() {
  // Mirrors a network round-trip so call sites stay async-friendly.
  await Promise.resolve();
  return siteContent;
}
