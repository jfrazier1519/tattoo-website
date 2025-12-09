import React, { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Artwork" },
    { id: "tattoos", name: "Tattoos" },
    { id: "drawings", name: "Drawings" },
    { id: "flash", name: "Flash Art" },
    { id: "custom", name: "Custom Designs" },
  ];

  // Gallery items using actual available images
  const galleryItems = [
    {
      id: 1,
      title: "Dark Rose",
      category: "tattoos",
      image: "/assets/gallery/image0.jpeg",
      description: "Gothic rose design with dark shading",
    },
    {
      id: 2,
      title: "Cute Demon",
      category: "drawings",
      image: "/assets/gallery/image1.jpeg",
      description: "Adorable demon character with edgy style",
    },
    {
      id: 3,
      title: "Moon & Stars",
      category: "flash",
      image: "/assets/gallery/image2.jpeg",
      description: "Celestial flash art design",
    },
    {
      id: 4,
      title: "Skull & Flowers",
      category: "custom",
      image: "/assets/gallery/image3.jpeg",
      description: "Custom skull design with floral elements",
    },
    {
      id: 5,
      title: "Gothic Cross",
      category: "tattoos",
      image: "/assets/gallery/image4.jpeg",
      description: "Dark gothic cross with intricate details",
    },
    {
      id: 6,
      title: "Cute Witch",
      category: "drawings",
      image: "/assets/gallery/image5.jpeg",
      description: "Adorable witch character with dark aesthetic",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Hero Section - Grey */}
      <div className="bg-[#1c1917]">
        <div className="relative min-h-48 md:h-64 py-12 md:py-0">
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
                Art Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-cottage-text-secondary max-w-2xl mx-auto">
                Explore my dark, edgy, and cute artwork. From gothic tattoos to
                adorable demons.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter & Gallery - Grey to Charcoal */}
      <div className="bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
            {categories.map((category) => (
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

          {/* Call to Action */}
          <div className="text-center mt-8 md:mt-16 py-8 md:py-12 rounded-2xl border border-cottage-bg-border px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
              Love What You See?
            </h2>
            <p className="text-cottage-text-muted mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Ready to bring your vision to life? Let's create something unique
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent text-white font-bold rounded-full hover:from-cottage-green-hover hover:to-cottage-emerald-hover transition-all duration-300 shadow-cottage hover:shadow-cottage-lg text-sm md:text-base">
                Book Appointment
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-cottage-teal-primary text-cottage-teal-primary font-bold rounded-full hover:bg-cottage-teal-primary hover:text-cottage-bg-accent transition-all duration-300 text-sm md:text-base">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
