import { siteContent } from "../data/siteContent.js";
import { isFirebaseConfigured } from "../lib/firebaseClient.js";
import { fetchFirestoreWebsiteContent } from "./firestoreContentService.js";

/**
 * Fetches all public-site copy. Today this resolves to bundled data; later,
 * replace the implementation with `fetch`/Firestore/etc. and keep the return shape stable.
 */
export async function fetchWebsiteContent() {
  // Keep call sites async-friendly even when data is local.
  await Promise.resolve();
  const fallbackEnabled =
    import.meta.env.VITE_ENABLE_STATIC_CONTENT_FALLBACK === "true";
  const firebaseConfigured = isFirebaseConfigured();

  if (!firebaseConfigured) {
    return siteContent;
  }

  try {
    const firestoreContent = await fetchFirestoreWebsiteContent(siteContent);
    if (!firestoreContent) {
      throw new Error(
        "Firestore content is empty. Create/publish docs in contentBlocks, placements, or portfolioItems.",
      );
    }

    return firestoreContent;
  } catch (error) {
    if (fallbackEnabled) {
      console.warn(
        "[content] Firestore read failed; using static fallback because VITE_ENABLE_STATIC_CONTENT_FALLBACK=true",
        error,
      );
      return siteContent;
    }

    throw error;
  }
}
