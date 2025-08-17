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
      image: "/src/assets/gallery/image0.jpeg",
      description: "Gothic rose design with dark shading",
    },
    {
      id: 2,
      title: "Cute Demon",
      category: "drawings",
      image: "/src/assets/gallery/image1.jpeg",
      description: "Adorable demon character with edgy style",
    },
    {
      id: 3,
      title: "Moon & Stars",
      category: "flash",
      image: "/src/assets/gallery/image2.jpeg",
      description: "Celestial flash art design",
    },
    {
      id: 4,
      title: "Skull & Flowers",
      category: "custom",
      image: "/src/assets/gallery/image3.jpeg",
      description: "Custom skull design with floral elements",
    },
    {
      id: 5,
      title: "Gothic Cross",
      category: "tattoos",
      image: "/src/assets/gallery/image4.jpeg",
      description: "Dark gothic cross with intricate details",
    },
    {
      id: 6,
      title: "Cute Witch",
      category: "drawings",
      image: "/src/assets/gallery/image5.jpeg",
      description: "Adorable witch character with dark aesthetic",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cottage-bg-primary text-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-cottage-gradient from-cottage-bg-accent via-cottage-bg-secondary to-cottage-bg-accent">
        <div className="absolute inset-0 bg-cottage-bg-accent/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
              Art Gallery
            </h1>
            <p className="text-xl text-cottage-text-secondary max-w-2xl mx-auto">
              Explore my dark, edgy, and cute artwork. From gothic tattoos to
              adorable demons.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-cottage-bg-card rounded-lg overflow-hidden shadow-cottage hover:shadow-cottage-lg transition-all duration-300 hover:-translate-y-2 border border-cottage-bg-border break-inside-avoid"
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
        <div className="text-center mt-16 py-12 bg-cottage-gradient from-cottage-bg-card to-cottage-bg-secondary rounded-2xl border border-cottage-bg-border">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-cottage-gradient from-cottage-green-primary to-cottage-green-secondary">
            Love What You See?
          </h2>
          <p className="text-cottage-text-muted mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something unique
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent text-white font-bold rounded-full hover:from-cottage-green-hover hover:to-cottage-emerald-hover transition-all duration-300 shadow-cottage hover:shadow-cottage-lg">
              Book Appointment
            </button>
            <button className="px-8 py-4 border-2 border-cottage-amber-primary text-cottage-amber-primary font-bold rounded-full hover:bg-cottage-amber-primary hover:text-cottage-bg-accent transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
