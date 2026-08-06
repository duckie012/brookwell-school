import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700"></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        <span className="uppercase tracking-widest text-purple-200 font-semibold">
          About Brookwell Harmony School
        </span>

        <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold">
          Inspiring Young Minds Every Day
        </h1>

        <p className="mt-8 text-lg leading-8 text-purple-100">
          Brookwell Harmony School is dedicated to nurturing confident,
          creative and responsible learners through quality education,
          innovation and holistic development.
        </p>

        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 mt-10 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Join Our School

          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}

export default AboutHero;