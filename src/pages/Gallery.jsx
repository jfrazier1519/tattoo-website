import React, { useState } from "react";
import { useSiteContent } from "../hooks/useSiteContent.js";
import FinalCTASection from "../components/home/FinalCTASection";

const Gallery = () => {
  const { gallery } = useSiteContent();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? gallery.items
      : gallery.items.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Hero Section - Grey */}
      <div className="bg-[#1c1917]">
        <div className="relative min-h-48 md:h-64 py-12 md:py-0">
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
                {gallery.heroTitle}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-cottage-text-secondary max-w-2xl mx-auto">
                {gallery.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter & Gallery - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
            {gallery.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-cottage-green-secondary text-white shadow-cottage shadow-cottage-green-secondary/50"
                    : "bg-cottage-bg-card text-cottage-text-muted hover:bg-cottage-bg-border hover:text-white border border-cottage-bg-border"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Patchwork Style */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-cottage-bg-card rounded-lg overflow-hidden shadow-cottage hover:shadow-cottage-lg transition-all duration-300 hover:-translate-y-2 border border-cottage-bg-border break-inside-avoid mb-4 md:mb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-96 min-h-48 object-contain bg-cottage-bg-card"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0a]">
        <FinalCTASection />
      </div>
    </>
  );
};

export default Gallery;
