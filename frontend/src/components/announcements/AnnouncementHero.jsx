import { motion } from "framer-motion";

function AnnouncementHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/backgrounds/announcements.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-white px-6"
      >
        <h1 className="text-6xl font-extrabold">
          School Announcements
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Stay informed with the latest news, notices and upcoming events.
        </p>
      </motion.div>
    </section>
  );
}

export default AnnouncementHero;