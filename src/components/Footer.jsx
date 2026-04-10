import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { useSiteContent } from "../hooks/useSiteContent.js";
import { homeBody, homeCaption } from "./home/homeTypography.js";

const linkClass =
  "text-[15px] text-stone-400 transition-colors hover:text-stone-200 underline-offset-4 hover:underline decoration-cottage-green-primary/50";

const Footer = () => {
  const { footer } = useSiteContent();

  return (
    <footer className="border-t border-white/10 bg-stone-950 text-stone-300">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand — editorial column */}
          <div className="lg:col-span-5 lg:pr-8 xl:pr-12">
            <div className="mb-8 flex items-start gap-5">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/[0.12] bg-stone-950/80"
                aria-hidden
              >
                <span className="font-light text-xl tabular-nums tracking-tight text-stone-100">
                  {footer.brandInitial}
                </span>
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="font-light text-2xl tracking-tight text-stone-100 sm:text-[1.65rem] md:text-3xl">
                  {footer.brandName}
                </p>
                <p className={`mt-4 max-w-md ${homeBody}`}>{footer.tagline}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-white/[0.1] text-stone-400 transition-colors hover:border-cottage-green-primary/35 hover:text-cottage-green-primary"
                aria-label="Instagram"
              >
                <FaInstagram className="text-base" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-white/[0.1] text-stone-400 transition-colors hover:border-cottage-green-primary/35 hover:text-cottage-green-primary"
                aria-label="Facebook"
              >
                <FaFacebook className="text-base" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-white/[0.1] text-stone-400 transition-colors hover:border-cottage-green-primary/35 hover:text-cottage-green-primary"
                aria-label="TikTok"
              >
                <FaTiktok className="text-base" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 sm:border-t-0 sm:pt-0 lg:col-span-7 lg:gap-14 lg:border-l lg:border-t-0 lg:border-white/10 lg:pl-10 xl:pl-14">
            <div>
              <h3 className={`mb-5 ${homeCaption}`}>{footer.quickLinksTitle}</h3>
              <ul className="space-y-3">
                {footer.quickLinks.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`mb-5 ${homeCaption}`}>{footer.servicesTitle}</h3>
              <ul className="space-y-3">
                {footer.services.map((label) => (
                  <li key={label}>
                    <span className="text-[15px] leading-snug text-stone-500">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:mt-16 md:flex-row md:items-center md:gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-600">
            {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-500 transition-colors hover:text-cottage-green-primary"
            >
              {footer.privacyPolicy}
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-500 transition-colors hover:text-cottage-green-primary"
            >
              {footer.termsAndConditions}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
