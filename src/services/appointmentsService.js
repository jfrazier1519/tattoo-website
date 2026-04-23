import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirestoreDb } from "../lib/firebaseClient.js";

const APPOINTMENTS_COLLECTION = "appointments";

function toNullableString(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function deriveClientId({ email, phone, name }) {
  const emailPart = toNullableString(email)?.toLowerCase().replaceAll(/\s+/g, "");
  const phonePart = toNullableString(phone)?.replaceAll(/[^\d]/g, "");
  const namePart = toNullableString(name)?.toLowerCase().replaceAll(/\s+/g, "-");
  return emailPart || phonePart || namePart || "unknown-client";
}

async function createAppointmentDoc(payload) {
  const db = getFirestoreDb();
  if (!db) {
    throw new Error("Firebase is not configured for appointments.");
  }

  const ref = await addDoc(collection(db, APPOINTMENTS_COLLECTION), {
    ...payload,
    createdAt: serverTimestamp(),
  });

  return ref.id;
}

export async function createAppointmentFromContactForm(formData) {
  const name = toNullableString(formData.name);
  const email = toNullableString(formData.email);
  const phone = toNullableString(formData.phone);

  return createAppointmentDoc({
    clientId: deriveClientId({ email, phone, name }),
    name: name ?? "Unknown",
    contact: {
      email,
      phone,
      preferredDate: toNullableString(formData.preferredDate),
    },
    description: toNullableString(formData.description) ?? "",
    date: toNullableString(formData.preferredDate),
    duration: null,
    status: "new",
    notes: toNullableString(formData.message),
    calendarEventId: null,
    source: "contactForm",
    details: {
      tattooType: toNullableString(formData.tattooType),
      bodyLocation: toNullableString(formData.bodyLocation),
      size: toNullableString(formData.size),
      budget: toNullableString(formData.budget),
    },
  });
}

export async function createAppointmentFromQuoteForm(formData) {
  const firstName = toNullableString(formData.firstName);
  const lastName = toNullableString(formData.lastName);
  const name = [firstName, lastName].filter(Boolean).join(" ").trim() || null;
  const email = toNullableString(formData.email);
  const phone = toNullableString(formData.phone);

  return createAppointmentDoc({
    clientId: deriveClientId({ email, phone, name }),
    name: name ?? "Unknown",
    contact: {
      email,
      phone,
    },
    description: toNullableString(formData.message) ?? "",
    date: null,
    duration: null,
    status: "new",
    notes: null,
    calendarEventId: null,
    source: "quoteForm",
    details: {
      tattooType: toNullableString(formData.tattooType),
      placement: toNullableString(formData.placement),
      size: toNullableString(formData.size),
      style: toNullableString(formData.style),
    },
  });
}
