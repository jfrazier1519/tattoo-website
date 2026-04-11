import React, { useState } from "react";
import { useSiteContent } from "../hooks/useSiteContent.js";
import FinalCTASection from "../components/home/FinalCTASection";
import Button from "../components/shared/Button";
import {
  homeBody,
  homeSectionTitle,
  editorialPanel,
} from "../components/home/homeTypography.js";

const Gallery = () => {
  const { gallery } = useSiteContent();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? gallery.items
      : gallery.items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="bg-stone-950">
        <div className="relative min-h-48 pb-12 pt-24 md:flex md:h-64 md:items-center md:pb-0 md:pt-0">
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="px-4 text-center">
              <h1 className={`${homeSectionTitle} mb-3 md:mb-4`}>
                {gallery.heroTitle}
              </h1>
              <p className={`${homeBody} mx-auto max-w-2xl`}>
                {gallery.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-950">
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3">
            {gallery.categories.map((category) => (
              <Button
                key={category.id}
                type="button"
                variant="chip"
                selected={selectedCategory === category.id}
                size="md"
                onClick={() => setSelectedCategory(category.id)}
                className="font-normal md:px-6 md:py-2.5"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:gap-6 md:space-y-6 lg:columns-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group mb-4 break-inside-avoid overflow-hidden transition-colors duration-200 md:mb-6 ${editorialPanel} hover:border-cottage-green-primary/25`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-96 min-h-48 w-full bg-stone-950 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-stone-950">
        <FinalCTASection />
      </div>
    </>
  );
};

export default Gallery;
