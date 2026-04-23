import { doc, getDoc, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import { getFirestoreDb } from "../lib/firebaseClient.js";
import { siteContent } from "../data/siteContent.js";

const MIGRATION_VERSION = 1;

function nowStamp() {
  return serverTimestamp();
}

function buildPlacementDocs() {
  const docs = [];
  const push = (id, payload) => docs.push({ id, ...payload });

  siteContent.forms.contact.bodyLocationOptions.forEach((item, index) => {
    push(`bodyLocation_${item.value}`, {
      id: item.value,
      label: item.label,
      type: "bodyLocation",
      sortOrder: index,
      isActive: true,
      updatedAt: nowStamp(),
      createdAt: nowStamp(),
      migrationVersion: MIGRATION_VERSION,
      isPublished: true,
    });
  });

  siteContent.forms.quote.styleOptions.forEach((item, index) => {
    push(`style_${item.value}`, {
      id: item.value,
      label: item.label,
      type: "style",
      sortOrder: index,
      isActive: true,
      updatedAt: nowStamp(),
      createdAt: nowStamp(),
      migrationVersion: MIGRATION_VERSION,
      isPublished: true,
    });
  });

  siteContent.forms.quote.tattooTypeOptions.forEach((item, index) => {
    push(`tattooType_${item.value}`, {
      id: item.value,
      label: item.label,
      type: "tattooType",
      sortOrder: index,
      isActive: true,
      updatedAt: nowStamp(),
      createdAt: nowStamp(),
      migrationVersion: MIGRATION_VERSION,
      isPublished: true,
    });
  });

  siteContent.gallery.categories.forEach((item, index) => {
    push(`galleryCategory_${item.id}`, {
      id: item.id,
      label: item.name,
      type: "galleryCategory",
      sortOrder: index,
      isActive: true,
      updatedAt: nowStamp(),
      createdAt: nowStamp(),
      migrationVersion: MIGRATION_VERSION,
      isPublished: true,
    });
  });

  return docs;
}

function buildPortfolioDocs() {
  return siteContent.gallery.items.map((item, index) => ({
    id: `gallery_${item.id ?? index + 1}`,
    title: item.title,
    category: item.category,
    image: item.image,
    description: item.description ?? "",
    sortOrder: index,
    isPublished: true,
    updatedAt: nowStamp(),
    createdAt: nowStamp(),
    migrationVersion: MIGRATION_VERSION,
  }));
}

function buildContentBlockDocs() {
  const blocks = [
    {
      id: "home_hero",
      slotKey: "home.hero",
      pageKey: "home",
      blockType: "hero",
      payload: siteContent.home.hero,
    },
    {
      id: "home_featuredWork",
      slotKey: "home.featuredWork",
      pageKey: "home",
      blockType: "featuredWork",
      payload: siteContent.home.featuredWork,
    },
    {
      id: "home_requestQuoteSection",
      slotKey: "requestQuoteSection",
      pageKey: "home",
      blockType: "cta",
      payload: siteContent.requestQuoteSection,
    },
    {
      id: "gallery_header",
      slotKey: "gallery",
      pageKey: "gallery",
      blockType: "galleryGrid",
      payload: {
        heroTitle: siteContent.gallery.heroTitle,
        heroSubtitle: siteContent.gallery.heroSubtitle,
      },
    },
    {
      id: "contact_header",
      slotKey: "contact",
      pageKey: "contact",
      blockType: "contactInfo",
      payload: siteContent.contact,
    },
    {
      id: "events_page",
      slotKey: "eventsPage",
      pageKey: "events",
      blockType: "eventsListing",
      payload: siteContent.eventsPage,
    },
  ];

  return blocks.map((block, index) => ({
    ...block,
    isPublished: true,
    sortOrder: index,
    updatedAt: nowStamp(),
    createdAt: nowStamp(),
    migrationVersion: MIGRATION_VERSION,
  }));
}

async function runBatch(collectionName, docsToWrite) {
  const db = getFirestoreDb();
  const batch = writeBatch(db);
  docsToWrite.forEach((entry) => {
    const ref = doc(db, collectionName, entry.id);
    batch.set(ref, entry, { merge: true });
  });
  await batch.commit();
}

export async function migrateStaticContentToFirestore({ dryRun = true } = {}) {
  const db = getFirestoreDb();
  if (!db) {
    throw new Error("Firebase config is missing. Set VITE_FIREBASE_* vars first.");
  }

  const markerRef = doc(db, "_migrations", "siteContent_v1");
  const markerSnap = await getDoc(markerRef);
  const alreadyRan = markerSnap.exists();

  const placements = buildPlacementDocs();
  const portfolioItems = buildPortfolioDocs();
  const contentBlocks = buildContentBlockDocs();

  if (dryRun) {
    return {
      dryRun: true,
      alreadyRan,
      counts: {
        placements: placements.length,
        portfolioItems: portfolioItems.length,
        contentBlocks: contentBlocks.length,
      },
    };
  }

  await runBatch("placements", placements);
  await runBatch("portfolioItems", portfolioItems);
  await runBatch("contentBlocks", contentBlocks);

  await setDoc(
    markerRef,
    {
      migrationKey: "siteContent_v1",
      completedAt: nowStamp(),
      counts: {
        placements: placements.length,
        portfolioItems: portfolioItems.length,
        contentBlocks: contentBlocks.length,
      },
      source: "src/scripts/migrateStaticContentToFirestore.js",
      migrationVersion: MIGRATION_VERSION,
    },
    { merge: true },
  );

  return {
    dryRun: false,
    alreadyRan,
    counts: {
      placements: placements.length,
      portfolioItems: portfolioItems.length,
      contentBlocks: contentBlocks.length,
    },
  };
}
