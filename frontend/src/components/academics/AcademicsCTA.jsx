import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function AcademicsCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700"></div>

      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative Shapes */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
      >

        <span className="uppercase tracking-[0.25em] text-purple-200 font-semibold">

          Begin Your Journey

        </span>

        <h2 className="mt-6 text-4xl lg:text-6xl font-black leading-tight">

          Give Your Child The Best Learning Experience

        </h2>

        <p className="mt-8 text-lg leading-8 text-purple-100 max-w-3xl mx-auto">

          At Brookwell Harmony School, we combine academic excellence,
          innovation, discipline and holistic development to prepare
          learners for tomorrow's opportunities.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/admissions"
            className="rounded-xl bg-white px-8 py-4 text-purple-700 font-semibold transition hover:scale-105"
          >
            Apply for Admission
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
          >
            Contact Us

            <ArrowRight size={18} />

          </Link>

        </div>

      </motion.div>

    </section>
  );
}

export default AcademicsCTA;