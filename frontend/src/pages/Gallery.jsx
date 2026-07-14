import PublicLayout from "../components/layout/PublicLayout";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryCategories from "../components/gallery/GalleryCategories";
import GalleryGrid from "../components/gallery/GalleryGrid";
import SchoolLife from "../components/gallery/SchoolLife";
import GalleryCTA from "../components/gallery/GalleryCTA";

function Gallery() {
  return (
    <PublicLayout>

      <GalleryHero />

      <GalleryCategories />

      <GalleryGrid />

      <SchoolLife />

      <GalleryCTA />

    </PublicLayout>
  );
}

export default Gallery;