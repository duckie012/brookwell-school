import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { getGalleryCTA } from "../../api/gallery";

function GalleryCTA() {
  const [cta, setCta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCTA() {
      try {
        const data = await getGalleryCTA();
        setCta(data);
      } catch (error) {
        console.error("Failed to load gallery CTA:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCTA();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-purple-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white">Loading...</p>
        </div>
      </section>
    );
  }

  if (!cta) return null;

  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700"></div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.2em] text-purple-200 font-semibold"
        >

          Visit Brookwell Harmony School

        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl lg:text-6xl font-black"
        >
          {cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          viewport={{ once: true }}
          className="mt-8 text-lg leading-8 text-purple-100 max-w-3xl mx-auto"
        >
          {cta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <Link
            to={cta.primaryButtonLink || "/admissions"}
            className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105"
          >
            {cta.primaryButtonText}
          </Link>

          <Link
            to={cta.secondaryButtonLink || "/contact"}
            className="flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-purple-700"
          >
            {cta.secondaryButtonText}

            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default GalleryCTA;