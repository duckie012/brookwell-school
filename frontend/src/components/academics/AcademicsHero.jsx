import { motion } from "framer-motion";

function AcademicsHero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/backgrounds/academics.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-white px-6"
      >
        <h1 className="text-6xl font-extrabold">
          Academics
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Providing quality CBC education from Play Group to Grade 7
          in a Christian learning environment.
        </p>
      </motion.div>
    </section>
  );
}

export default AcademicsHero;