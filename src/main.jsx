import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WebsiteContentProvider } from "./context/WebsiteContentProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebsiteContentProvider>
      <App />
    </WebsiteContentProvider>
  </StrictMode>
);
