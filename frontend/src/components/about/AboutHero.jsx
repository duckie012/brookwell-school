import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgrounds/about.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          About Brookwell Harmony School
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Building academic excellence, Christian values and lifelong success
          for every learner.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutHero;