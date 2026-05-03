import { collection, getDocs } from "firebase/firestore";
import { getFirestoreDb } from "../lib/firebaseClient.js";

function setByPath(target, path, value) {
  const keys = path.split(".").filter(Boolean);
  if (!keys.length) return;

  let node = target;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    if (typeof node[key] !== "object" || node[key] === null) {
      node[key] = {};
    }
    node = node[key];
  }

  node[keys[keys.length - 1]] = value;
}

function cloneStaticContent(content) {
  return JSON.parse(JSON.stringify(content));
}

function sortByOrderThenLabel(items) {
  return [...items].sort((a, b) => {
    const aOrder = Number.isFinite(a.sortOrder)
      ? a.sortOrder
      : Number.MAX_SAFE_INTEGER;
    const bOrder = Number.isFinite(b.sortOrder)
      ? b.sortOrder
      : Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return String(a.label || "").localeCompare(String(b.label || ""));
  });
}

function toOption(item) {
  return { value: item.id, label: item.label };
}

function applyPlacementOverrides(content, placements) {
  if (!placements.length) return content;

  const active = placements.filter(
    (p) => p.isActive !== false && p.id && p.label,
  );
  if (!active.length) return content;

  const byType = active.reduce((acc, item) => {
    const t = item.type;
    if (!t) return acc;
    if (!acc[t]) acc[t] = [];
    acc[t].push(item);
    return acc;
  }, {});

  if (byType.bodyLocation?.length) {
    const options = sortByOrderThenLabel(byType.bodyLocation).map(toOption);
    content.forms.contact.bodyLocationOptions = options;
    content.forms.quote.placementOptions = options;
  }

  if (byType.tattooType?.length) {
    const options = sortByOrderThenLabel(byType.tattooType).map(toOption);
    content.forms.contact.tattooTypeOptions = options;
    content.forms.quote.tattooTypeOptions = options;
  }

  if (byType.style?.length) {
    content.forms.quote.styleOptions = sortByOrderThenLabel(byType.style).map(
      toOption,
    );
  }

  if (byType.galleryCategory?.length) {
    const options = sortByOrderThenLabel(byType.galleryCategory).map(
      (item) => ({
        id: item.id,
        name: item.label,
      }),
    );
    const hasAll = options.some((item) => item.id === "all");
    content.gallery.categories = hasAll
      ? options
      : [{ id: "all", name: "Everything" }, ...options];
  }

  return content;
}

function applyContentBlockOverrides(content, contentBlocks) {
  if (!contentBlocks.length) return content;

  const orderedBlocks = [...contentBlocks].sort((a, b) => {
    const aOrder = Number.isFinite(a.sortOrder)
      ? a.sortOrder
      : Number.MAX_SAFE_INTEGER;
    const bOrder = Number.isFinite(b.sortOrder)
      ? b.sortOrder
      : Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });

  orderedBlocks.forEach((block) => {
    if (!block.slotKey) {
      return;
    }

    const nextValue = {};
    if (typeof block.title === "string") {
      nextValue.title = block.title;
    }
    if (typeof block.body === "string") {
      nextValue.body = block.body;
    }
    if (typeof block.payload === "object" && block.payload !== null) {
      Object.assign(nextValue, block.payload);
    }

    if (block.slotKey === "contact" && Array.isArray(nextValue.blocks)) {
      const staticBlocks = content.contact?.blocks ?? [];
      nextValue.blocks = nextValue.blocks.map((item, index) => ({
        ...item,
        icon: staticBlocks[index]?.icon ?? item.icon,
      }));
    }

    if (Object.keys(nextValue).length === 0) return;
    setByPath(content, block.slotKey, nextValue);
  });

  return content;
}

async function readPublishedCollection(db, collectionName) {
  const snap = await getDocs(collection(db, collectionName));
  return snap.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((item) => item.isPublished !== false);
}

function applyPortfolioOverrides(content, portfolioItems) {
  if (!portfolioItems.length) return content;

  const ordered = [...portfolioItems].sort((a, b) => {
    const aOrder = Number.isFinite(a.sortOrder)
      ? a.sortOrder
      : Number.MAX_SAFE_INTEGER;
    const bOrder = Number.isFinite(b.sortOrder)
      ? b.sortOrder
      : Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });

  content.gallery.items = ordered.map((item, index) => ({
    id: item.id ?? index + 1,
    title: item.title ?? "Untitled",
    category: item.category ?? "tattoos",
    image: item.image ?? item.downloadURL ?? "",
    description: item.description ?? "",
  }));

  return content;
}

export async function fetchFirestoreWebsiteContent(staticContent) {
  const db = getFirestoreDb();
  if (!db) {
    return null;
  }

  const [contentBlocks, placements, portfolioItems] = await Promise.all([
    readPublishedCollection(db, "contentBlocks"),
    readPublishedCollection(db, "placements"),
    readPublishedCollection(db, "portfolioItems"),
  ]);

  if (!contentBlocks.length && !placements.length && !portfolioItems.length) {
    return null;
  }

  const merged = cloneStaticContent(staticContent);
  applyContentBlockOverrides(merged, contentBlocks);
  applyPlacementOverrides(merged, placements);
  applyPortfolioOverrides(merged, portfolioItems);
  return merged;
}
