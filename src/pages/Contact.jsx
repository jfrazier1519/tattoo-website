import React, { useMemo } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";
import { useSiteContent } from "../hooks/useSiteContent.js";
import { siteContent } from "../data/siteContent.js";
import {
  homeAccentHeading,
  homeBody,
  homeSectionTitle,
  editorialIconTile,
  editorialPanelPadded,
} from "../components/home/homeTypography.js";

const CONTACT_ROW_ICONS = ["📍", "🕐", "📱", "💬"];

function normalizeContactBlocks(raw) {
  let list = raw;
  if (typeof list === "string") {
    try {
      const parsed = JSON.parse(list.trim());
      list = Array.isArray(parsed) ? parsed : [];
    } catch {
      list = [];
    }
  } else if (!Array.isArray(list)) {
    list = [];
  }

  const withCopy = list.map((item, index) => ({
    title: item?.title ?? "",
    body: item?.body ?? "",
    icon: CONTACT_ROW_ICONS[index] ?? item?.icon ?? "",
  }));

  if (withCopy.length > 0) return withCopy;
  const fallback = siteContent.contact?.blocks ?? [];
  return fallback.map((item, index) => ({
    title: item?.title ?? "",
    body: item?.body ?? "",
    icon: CONTACT_ROW_ICONS[index] ?? item?.icon ?? "",
  }));
}

const Contact = () => {
  const { contact } = useSiteContent();
  const infoBlocks = useMemo(
    () => normalizeContactBlocks(contact.blocks),
    [contact.blocks],
  );

  const socialBtn =
    "flex h-10 w-10 items-center justify-center border border-white/[0.1] text-stone-400 transition-colors hover:border-cottage-green-primary/35 hover:text-cottage-green-primary";

  return (
    <>
      <div className="bg-stone-950">
        <section className="border-b border-white/10 pb-12 pt-24 md:py-20">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className={`${homeSectionTitle} mb-4 md:mb-6`}>
              {contact.heroTitle}
            </h1>
            <p className={`${homeBody} mx-auto max-w-2xl`}>
              {contact.heroSubtitle}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-stone-950">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className={`${homeAccentHeading} mb-6 md:mb-8`}>
                  {contact.connectTitle}
                </h2>

                <div className="space-y-8">
                  {infoBlocks.map((block, index) => (
                    <div
                      key={`${block.title}-${index}`}
                      className="flex items-start gap-4"
                    >
                      <div className={editorialIconTile} aria-hidden>
                        {block.icon}
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-stone-200">
                          {block.title}
                        </h3>
                        <p
                          className={
                            index === 2
                              ? `${homeBody} mb-4`
                              : homeBody
                          }
                        >
                          {block.body}
                        </p>
                        {index === 2 ? (
                          <div className="flex flex-wrap gap-2">
                            <a
                              href="#"
                              className={socialBtn}
                              aria-label="Instagram"
                            >
                              <FaInstagram className="text-base" />
                            </a>
                            <a
                              href="#"
                              className={socialBtn}
                              aria-label="Facebook"
                            >
                              <FaFacebook className="text-base" />
                            </a>
                            <a
                              href="#"
                              className={socialBtn}
                              aria-label="TikTok"
                            >
                              <FaTiktok className="text-base" />
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className={`${homeAccentHeading} mb-6 md:mb-8`}>
                  {contact.formColumnTitle}
                </h2>
                <div className={editorialPanelPadded}>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
