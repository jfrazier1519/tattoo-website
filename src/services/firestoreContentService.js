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
    const aOrder = Number.isFinite(a.sortOrder) ? a.sortOrder : Number.MAX_SAFE_INTEGER;
    const bOrder = Number.isFinite(b.sortOrder) ? b.sortOrder : Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return String(a.label || "").localeCompare(String(b.label || ""));
  });
}

function toOption(item) {
  return { value: item.id, label: item.label };
}

function applyPlacementOverrides(content, placements) {
  if (!placements.length) return content;

  const active = placements.filter((p) => p.isActive !== false && p.id && p.label);
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
    content.forms.quote.styleOptions = sortByOrderThenLabel(byType.style).map(toOption);
  }

  if (byType.galleryCategory?.length) {
    const options = sortByOrderThenLabel(byType.galleryCategory).map((item) => ({
      id: item.id,
      name: item.label,
    }));
    const hasAll = options.some((item) => item.id === "all");
    content.gallery.categories = hasAll ? options : [{ id: "all", name: "Everything" }, ...options];
  }

  return content;
}

function applyContentBlockOverrides(content, contentBlocks) {
  if (!contentBlocks.length) return content;

  contentBlocks.forEach((block) => {
    if (!block.slotKey || typeof block.payload !== "object" || block.payload === null) {
      return;
    }
    setByPath(content, block.slotKey, block.payload);
  });

  return content;
}

async function readPublishedCollection(db, collectionName) {
  const snap = await getDocs(collection(db, collectionName));
  return snap.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((item) => item.isPublished !== false);
}

export async function fetchFirestoreWebsiteContent(staticContent) {
  const db = getFirestoreDb();
  if (!db) {
    return null;
  }

  const [contentBlocks, placements] = await Promise.all([
    readPublishedCollection(db, "contentBlocks"),
    readPublishedCollection(db, "placements"),
  ]);

  if (!contentBlocks.length && !placements.length) {
    return null;
  }

  const merged = cloneStaticContent(staticContent);
  applyContentBlockOverrides(merged, contentBlocks);
  applyPlacementOverrides(merged, placements);
  return merged;
}
