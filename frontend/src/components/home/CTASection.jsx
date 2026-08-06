import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { getHomepageData } from "../../api/homepage";

function CTASection() {
  const [cta, setCta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCTA() {
      try {
        const data = await getHomepageData();

        setCta(data.cta || null);
      } catch (error) {
        console.error("Failed to load CTA:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCTA();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-purple-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white text-lg">
            Loading...
          </p>
        </div>
      </section>
    );
  }

  if (!cta) return null;

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600"></div>

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Decorations */}

      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
      >

        <span className="uppercase tracking-[0.2em] text-purple-200 font-semibold">

          Join Brookwell Harmony School

        </span>

        <h2 className="mt-6 text-4xl lg:text-6xl font-black leading-tight">

          {cta.title}

        </h2>

        <p className="mt-8 text-lg leading-8 text-purple-100 max-w-3xl mx-auto">

          {cta.description}

        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            to={cta.primaryButtonLink || "/admissions"}
            className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            {cta.primaryButtonText}
          </Link>

          <Link
            to={cta.secondaryButtonLink || "/contact"}
            className="flex items-center gap-2 border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            {cta.secondaryButtonText}

            <ArrowRight size={18} />
          </Link>

        </div>

      </motion.div>

    </section>
  );
}

export default CTASection;