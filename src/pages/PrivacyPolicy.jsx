import React from "react";
import { useSiteContent } from "../hooks/useSiteContent.js";

const PrivacyPolicy = () => {
  const { privacyPolicy } = useSiteContent();

  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40 py-12">
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy.bodyHtml }} />
    </div>
  );
};

export default PrivacyPolicy;
