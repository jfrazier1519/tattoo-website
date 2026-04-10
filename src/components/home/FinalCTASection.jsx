import React from "react";
import SiteCTASection from "../shared/SiteCTASection";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const FinalCTASection = () => {
  const { finalCta } = useSiteContent();

  return (
    <SiteCTASection
      variant="full"
      tone="editorial"
      showDivider={false}
      title={finalCta.title}
      subtitle={finalCta.subtitle}
      primary={{ to: "/contact", label: finalCta.primaryCta }}
      secondary={{ to: "/gallery", label: finalCta.secondaryCta }}
    />
  );
};

export default FinalCTASection;
