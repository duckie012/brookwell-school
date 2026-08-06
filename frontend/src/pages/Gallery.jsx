import { useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import SchoolLife from "../components/gallery/SchoolLife";
import GalleryCategories from "../components/gallery/GalleryCategories";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryCTA from "../components/gallery/GalleryCTA";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <GalleryHero />

      <SchoolLife />

      <GalleryCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <GalleryGrid
        selectedCategory={selectedCategory}
      />

      <GalleryCTA />
    </>
  );
}

export default Gallery;