import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";
import { useSiteContent } from "../hooks/useSiteContent.js";
import {
  homeAccentHeading,
  homeBody,
  homeSectionTitle,
  editorialIconTile,
  editorialPanelPadded,
} from "../components/home/homeTypography.js";

const Contact = () => {
  const { contact } = useSiteContent();
  const [locationBlock, hoursBlock, socialBlock, expectBlock] = contact.blocks;

  const socialBtn =
    "flex h-10 w-10 items-center justify-center border border-white/[0.1] text-stone-400 transition-colors hover:border-cottage-green-primary/35 hover:text-cottage-green-primary";

  return (
    <>
      <div className="bg-stone-950">
        <section className="border-b border-white/10 py-12 md:py-20">
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
                  <div className="flex items-start gap-4">
                    <div className={editorialIconTile} aria-hidden>
                      {locationBlock.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-stone-200">
                        {locationBlock.title}
                      </h3>
                      <p className={homeBody}>{locationBlock.body}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={editorialIconTile} aria-hidden>
                      {hoursBlock.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-stone-200">
                        {hoursBlock.title}
                      </h3>
                      <p className={homeBody}>{hoursBlock.body}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={editorialIconTile} aria-hidden>
                      {socialBlock.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-stone-200">
                        {socialBlock.title}
                      </h3>
                      <p className={`${homeBody} mb-4`}>{socialBlock.body}</p>
                      <div className="flex flex-wrap gap-2">
                        <a href="#" className={socialBtn} aria-label="Instagram">
                          <FaInstagram className="text-base" />
                        </a>
                        <a href="#" className={socialBtn} aria-label="Facebook">
                          <FaFacebook className="text-base" />
                        </a>
                        <a href="#" className={socialBtn} aria-label="TikTok">
                          <FaTiktok className="text-base" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={editorialIconTile} aria-hidden>
                      {expectBlock.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-stone-200">
                        {expectBlock.title}
                      </h3>
                      <p className={homeBody}>{expectBlock.body}</p>
                    </div>
                  </div>
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
