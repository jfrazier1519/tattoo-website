import { useContext } from "react";
import { WebsiteContentContext } from "../context/websiteContentContext.js";

export function useSiteContent() {
  const ctx = useContext(WebsiteContentContext);
  if (ctx === undefined) {
    throw new Error("useSiteContent must be used within WebsiteContentProvider");
  }
  return ctx;
}
