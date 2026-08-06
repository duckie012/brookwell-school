import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function AcademicsHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-3xl text-white"
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2">

            <GraduationCap size={22} />

            <span>Competency Based Curriculum (CBC)</span>

          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">

            Building Strong Foundations For Future Success

          </h1>

          <p className="mt-8 text-lg leading-9 text-purple-100">

            Our academic programme combines excellence, innovation,
            creativity and character development to prepare every learner
            for lifelong success.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/admissions"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 hover:scale-105 transition"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              Contact Us

              <ArrowRight size={18}/>
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AcademicsHero;