import React, { useState } from "react";
import { ShoppingCart, Briefcase, HeartPulse } from "lucide-react";
import Button from "../components/shared/Button";

// Placeholder data
const industries = [
  {
    key: "ecommerce",
    name: "E-commerce",
    templates: [
      {
        name: "Modern Product Grid",
        tagline: "Ideal for fashion, tech, or trend-forward brands",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        description:
          "A clean, conversion-focused layout for modern online stores.",
        gallery: [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        ],
      },
      {
        name: "Minimal Storefront",
        tagline: "Perfect for beauty, lifestyle, and curated collections",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        description: "A minimalist template for curated product lines.",
        gallery: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        ],
      },
    ],
  },
  {
    key: "services",
    name: "Professional Services",
    templates: [
      {
        name: "Corporate Feel",
        tagline: "Sleek, trustworthy look for law firms and finance",
        img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
        description: "A professional template for service businesses.",
        gallery: [
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        ],
      },
    ],
  },
  {
    key: "wellness",
    name: "Health & Wellness",
    templates: [
      {
        name: "Wellness Calm",
        tagline: "A soothing layout for therapists, coaches, and guides",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        description: "A calming, trust-building template for wellness brands.",
        gallery: [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        ],
      },
    ],
  },
  {
    key: "creative",
    name: "Creative & Media",
    templates: [
      {
        name: "Visual Portfolio",
        tagline: "Showcase your photography, design, or video projects",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        description: "A visually driven template for creative professionals.",
        gallery: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        ],
      },
    ],
  },
  {
    key: "trades",
    name: "Trades & Local Services",
    templates: [
      {
        name: "Booking Pro",
        tagline: "For contractors, real estate, and local services",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        description: "A booking-focused template for local businesses.",
        gallery: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        ],
      },
    ],
  },
];

// Features for pricing table
const allFeatures = [
  "E-comm",
  "Blog",
  "Gallery",
  "Contact",
  "Booking",
  "Signup",
  "SEO",
  "Analytics",
  "Mobile",
  "Social",
  "Payments",
  "Admin",
];
// Template pricing data
const templatePricing = [
  {
    name: "Basic Template",
    price: "$299",
    pages: 4,
    features: ["Contact Form", "Mobile Responsive", "SEO"],
  },
  {
    name: "Standard Template",
    price: "$499",
    pages: 6,
    features: [
      "Blog",
      "Gallery",
      "Contact Form",
      "Mobile Responsive",
      "SEO",
      "Analytics",
    ],
  },
  {
    name: "Advanced Template",
    price: "$799",
    pages: 8,
    features: [
      "E-commerce",
      "Blog",
      "Gallery",
      "Contact Form",
      "Mobile Responsive",
      "SEO",
      "Analytics",
      "Social Media Integration",
    ],
  },
  {
    name: "Premium Template",
    price: "$1299",
    pages: 12,
    features: [
      "E-commerce",
      "Blog",
      "Gallery",
      "Contact Form",
      "Booking",
      "Newsletter Signup",
      "Mobile Responsive",
      "SEO",
      "Analytics",
      "Social Media Integration",
      "Payment Processing",
      "Admin Dashboard",
    ],
  },
];
// Template types for cards
const templateTypes = [
  {
    name: "Basic Template",
    price: "$299",
    color: "teal",
    description:
      "The Basic Template includes up to 4 custom-designed pages (Home, About, Services, Contact) with a clean, modern layout. Features include a contact form, mobile responsiveness, and built-in SEO best practices. Perfect for startups or small businesses looking for a professional online presence without extra complexity. All content is tailored to your brand, and we handle setup and launch for you.",
  },
  {
    name: "Standard Template",
    price: "$499",
    color: "blue",
    description:
      "The Standard Template offers up to 6 pages (Home, About, Services, Blog, Gallery, Contact) and adds a blog, image gallery, and analytics integration. Enjoy a modern, visually engaging design with more room to showcase your work and share updates. Ideal for growing businesses or creatives who want to connect with their audience. Includes mobile optimization, SEO, and launch support.",
  },
  {
    name: "Advanced Template",
    price: "$799",
    color: "purple",
    description:
      "The Advanced Template is designed for businesses ready to scale. Includes up to 8 pages, e-commerce functionality, blog, gallery, social media integration, and advanced analytics. The design is bold and conversion-focused, perfect for online stores, agencies, or service providers who want to drive results. All features are fully customized to your brand, and we provide end-to-end setup and support.",
  },
  {
    name: "Premium Template",
    price: "$1299",
    color: "indigo",
    description:
      "The Premium Template is our most comprehensive solution, with up to 12 pages, advanced e-commerce, booking, newsletter signup, payment processing, admin dashboard, and more. Enjoy a high-impact, premium design with every feature you need to grow and manage your business online. Best for established brands or ambitious startups who want a turnkey, all-in-one web presence. Includes priority support and post-launch care.",
  },
];

// Helper: get 8 templates per industry, fill with 'Coming Soon' if needed
function getEightTemplates(templates) {
  const filled = [...templates];
  while (filled.length < 8) {
    filled.push({
      name: "Coming Soon",
      tagline: "New template launching soon!",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      comingSoon: true,
    });
  }
  return filled.slice(0, 8);
}

// Helper: assign template type to each template
function assignTemplateType(template, index) {
  if (template.comingSoon) return template;
  const typeIndex = index % templateTypes.length;
  return {
    ...template,
    templateType: templateTypes[typeIndex],
  };
}

const WebsiteMarket = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0].key);
  const [modalTemplate, setModalTemplate] = useState(null);
  const industry = industries.find((i) => i.key === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#214045] to-white text-gray-900 pb-32">
      {/* Hero/Intro */}
      <section className="pt-44 pb-16 px-4 max-w-6xl mx-auto text-center relative">
        {/* Faint teal dot accent */}
        <span className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-teal-400 rounded-full opacity-10 z-0"></span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 relative z-10">
          Website Templates
          <span className="block w-24 h-2 bg-teal-400 rounded-full mx-auto mt-3 opacity-70"></span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 relative z-10">
          Choose a template that fits your business. Preview, compare, and get
          started in minutes.
        </p>
      </section>

      {/* Industry Selector as text links */}
      <section className="max-w-5xl mx-auto px-4 mb-12 flex flex-row flex-wrap gap-4 justify-center items-center">
        {industries.map((ind) => (
          <button
            key={ind.key}
            onClick={() => setSelectedIndustry(ind.key)}
            className={`relative font-semibold text-base md:text-lg bg-transparent border-none outline-none px-2 py-1 transition cursor-pointer
              ${
                selectedIndustry === ind.key
                  ? "text-teal-400 underline underline-offset-4 decoration-2"
                  : "text-white/90 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
              }`}
            style={{ background: "none", whiteSpace: "nowrap" }}
          >
            {ind.name}
          </button>
        ))}
      </section>

      {/* Template Gallery - 2x4 grid, 8 cards per industry */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {getEightTemplates(industry.templates).map((tpl, idx) => {
          const templateWithType = assignTemplateType(tpl, idx);
          return (
            <div
              key={templateWithType.name + idx}
              className={`bg-white/95 rounded-2xl shadow-lg border border-teal-50 p-4 flex flex-col items-center text-center transition cursor-pointer hover:shadow-xl hover:border-teal-200 ${
                tpl.comingSoon
                  ? "opacity-60 pointer-events-none"
                  : "group hover:-translate-y-1"
              }`}
              onClick={() =>
                !tpl.comingSoon && setModalTemplate(templateWithType)
              }
              style={{ minHeight: 260 }}
            >
              <img
                src={templateWithType.img}
                alt={templateWithType.name}
                className="rounded-xl mb-3 w-full h-28 object-cover shadow-sm border border-gray-100"
                style={{ background: "#f3f4f6" }}
              />
              <h3 className="text-lg font-bold text-[#214045] mb-1 truncate w-full">
                {templateWithType.name}
              </h3>
              {!templateWithType.comingSoon &&
                templateWithType.templateType && (
                  <div className="mb-1">
                    <span className="text-xs text-gray-500">
                      {templateWithType.templateType.name}
                    </span>
                    <span className="text-sm font-semibold text-teal-600 ml-2">
                      {templateWithType.templateType.price}
                    </span>
                  </div>
                )}
              <p className="text-gray-600 text-sm mb-1 w-full truncate">
                {templateWithType.tagline}
              </p>
              {templateWithType.comingSoon && (
                <span className="mt-2 text-xs text-gray-400 italic">
                  Coming Soon
                </span>
              )}
            </div>
          );
        })}
      </section>

      {/* Template Drawer */}
      {modalTemplate && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/40 transition-opacity duration-300"
            onClick={() => setModalTemplate(null)}
          ></div>
          {/* Drawer */}
          <div className="w-full max-w-lg h-full bg-white shadow-2xl p-8 overflow-y-auto relative animate-slide-in-right">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-teal-500 text-2xl font-bold"
              onClick={() => setModalTemplate(null)}
              aria-label="Close"
            >
              ×
            </button>
            {/* Name, Type, Price */}
            <h2 className="text-2xl font-bold mb-1 text-[#214045]">
              {modalTemplate.name}
            </h2>
            {modalTemplate.templateType && (
              <div className="mb-2 text-sm text-gray-500">
                {modalTemplate.templateType.name}
                <span className="ml-3 text-teal-600 font-semibold">
                  {modalTemplate.templateType.price}
                </span>
              </div>
            )}
            {/* Description and Template Type Description */}
            {modalTemplate.description && (
              <p className="text-gray-700 mb-2">{modalTemplate.description}</p>
            )}
            {modalTemplate.templateType &&
              modalTemplate.templateType.description && (
                <div className="text-gray-600 mb-4 text-sm">
                  {modalTemplate.templateType.description}
                </div>
              )}
            {/* Gallery */}
            <div className="mb-6">
              <div className="font-semibold text-[#214045] mb-2">Gallery</div>
              <div className="grid grid-cols-2 gap-3">
                {modalTemplate.gallery &&
                  modalTemplate.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={modalTemplate.name + " preview " + (i + 1)}
                      className="rounded-xl w-full h-32 object-cover shadow"
                    />
                  ))}
              </div>
            </div>
            {/* Our Work Process */}
            <div className="mt-8">
              <div className="font-bold text-lg text-[#214045] mb-2">
                Our Work Process
              </div>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
                <li>
                  We start with a discovery call to understand your needs and
                  brand.
                </li>
                <li>
                  Our team customizes the template for your business, including
                  content, branding, and integrations.
                </li>
                <li>
                  We handle all setup, launch, and support—no code or technical
                  work required from you.
                </li>
                <li>
                  You get a beautiful, ready-to-use website built for your
                  goals.
                </li>
              </ol>
              <div className="text-sm text-gray-500 italic">
                We build your site for you—no code handoff, no DIY headaches.
              </div>
            </div>
            <Button to="/contact" size="lg" className="mt-8 w-full">
              Get Started
            </Button>
          </div>
          {/* Drawer animation */}
          <style>{`
            @keyframes slide-in-right {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in-right { animation: slide-in-right 0.3s cubic-bezier(.4,0,.2,1) both; }
          `}</style>
        </div>
      )}

      {/* Modern Pricing Table with Features as Columns */}
      <section className="max-w-7xl mx-auto px-2 mt-32 mb-20">
        <h2 className="text-3xl font-bold text-center text-[#214045] mb-10">
          Template Pricing
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/90 p-2">
          <table className="min-w-full text-left text-gray-800">
            <thead>
              <tr className="bg-[#214045] text-white">
                <th className="py-3 px-4 font-semibold rounded-tl-2xl text-sm">
                  <span
                    style={{
                      transform: "rotate(-45deg)",
                      display: "inline-block",
                      borderBottom: "2px solid #2dd4bf",
                      paddingBottom: 2,
                    }}
                  >
                    Template
                  </span>
                </th>
                <th className="py-3 px-4 font-semibold text-sm">
                  <span
                    style={{
                      transform: "rotate(-45deg)",
                      display: "inline-block",
                      borderBottom: "2px solid #2dd4bf",
                      paddingBottom: 2,
                    }}
                  >
                    Price
                  </span>
                </th>
                <th className="py-3 px-4 font-semibold text-sm">
                  <span
                    style={{
                      transform: "rotate(-45deg)",
                      display: "inline-block",
                      borderBottom: "2px solid #2dd4bf",
                      paddingBottom: 2,
                    }}
                  >
                    Pages
                  </span>
                </th>
                {allFeatures.map((feature) => (
                  <th
                    key={feature}
                    className="py-3 px-2 font-semibold text-center text-xs"
                    style={{
                      height: "80px",
                      verticalAlign: "bottom",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        transform: "rotate(-45deg)",
                        display: "inline-block",
                        borderBottom: "2px solid #2dd4bf",
                        paddingBottom: 2,
                      }}
                    >
                      {feature}
                    </span>
                  </th>
                ))}
                <th className="py-3 px-4 font-semibold rounded-tr-2xl text-sm">
                  <span
                    style={{
                      transform: "rotate(-45deg)",
                      display: "inline-block",
                      borderBottom: "2px solid #2dd4bf",
                      paddingBottom: 2,
                    }}
                  >
                    Action
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {templatePricing.map((tpl, idx) => (
                <tr
                  key={tpl.name}
                  className={`border-b border-teal-100 hover:bg-teal-50/40 transition ${
                    idx === templatePricing.length - 1 ? "" : ""
                  }`}
                >
                  <td className="py-3 px-4 font-bold text-[#214045] text-sm">
                    {tpl.name}
                  </td>
                  <td className="py-3 px-4 text-teal-600 font-semibold text-sm">
                    {tpl.price}
                  </td>
                  <td className="py-3 px-4 text-sm">{tpl.pages}</td>
                  {allFeatures.map((feature) => (
                    <td key={feature} className="py-3 px-2 text-center">
                      {tpl.features.includes(feature) ? (
                        <span className="inline-block w-3 h-3 bg-teal-400 rounded-full shadow-sm"></span>
                      ) : (
                        <span className="inline-block w-3 h-3 bg-gray-200 rounded-full"></span>
                      )}
                    </td>
                  ))}
                  <td className="py-3 px-4">
                    <Button
                      to="/contact"
                      variant="ghost"
                      size="sm"
                      className="font-bold"
                    >
                      Get Started
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMarket;
