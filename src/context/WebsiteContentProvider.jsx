import { useEffect, useState } from "react";
import { WebsiteContentContext } from "./websiteContentContext.js";
import { fetchWebsiteContent } from "../services/websiteContentService.js";

export function WebsiteContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchWebsiteContent()
      .then((data) => {
        if (!cancelled) setContent(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div role="alert" className="p-4 text-red-600">
        {error.message || "Unable to load site content."}
      </div>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <WebsiteContentContext.Provider value={content}>
      {children}
    </WebsiteContentContext.Provider>
  );
}
