import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { getAdmissionsHero } from "../../api/admissions";

function AdmissionsHero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHero() {
      try {
        const data = await getAdmissionsHero();
        setHero(data);
      } catch (error) {
        console.error("Failed to load admissions hero:", error);
      } finally {
        setLoading(false);
      }
    }

    loadHero();
  }, []);

  if (loading) {
    return (
      <section className="min-h-[65vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
        <p className="text-white text-lg">Loading...</p>
      </section>
    );
  }

  if (!hero) return null;

  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">

      <div className="absolute inset-0 bg-black/40"></div>

      {hero.backgroundImage && (
        <img
          src={hero.backgroundImage}
          alt="Admissions"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-5 py-2">

            <GraduationCap size={20} />

            <span>{hero.badge}</span>

          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black">

            {hero.title}

          </h1>

          <p className="mt-8 text-lg leading-9 text-purple-100">

            {hero.description}

          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default AdmissionsHero;