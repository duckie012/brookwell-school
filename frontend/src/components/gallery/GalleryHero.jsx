import { motion } from "framer-motion";

function GalleryHero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/gallery.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-white px-6"
      >
        <h1 className="text-6xl font-extrabold">
          School Gallery
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          A glimpse into life at Brookwell Harmony School.
        </p>
      </motion.div>
    </section>
  );
}

export default GalleryHero;