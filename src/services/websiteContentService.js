import { siteContent } from "../data/siteContent.js";
import { fetchFirestoreWebsiteContent } from "./firestoreContentService.js";

/**
 * Fetches all public-site copy. Today this resolves to bundled data; later,
 * replace the implementation with `fetch`/Firestore/etc. and keep the return shape stable.
 */
export async function fetchWebsiteContent() {
  // Keep call sites async-friendly even when data is local.
  await Promise.resolve();

  try {
    const firestoreContent = await fetchFirestoreWebsiteContent(siteContent);
    return firestoreContent ?? siteContent;
  } catch (error) {
    console.warn("Falling back to static site content:", error);
    return siteContent;
  }
}
