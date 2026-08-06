import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Trees,
  Bus,
  Heart,
  Music4,
} from "lucide-react";

import { getGalleryHighlights } from "../../api/gallery";

const iconMap = {
  BookOpen,
  Trophy,
  Trees,
  Bus,
  Heart,
  Music4,
};

function SchoolLife() {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHighlights() {
      try {
        const data = await getGalleryHighlights();

        setHighlights(data);
      } catch (error) {
        console.error("Failed to load school life highlights:", error);
      } finally {
        setLoading(false);
      }
    }

    loadHighlights();
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            School Life

          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            More Than Just A School

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">

            Discover a vibrant learning environment where academics,
            creativity, sports and character development come together.

          </p>

        </div>

        {loading ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">

            Loading...

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {highlights.map((item, index) => {

              const Icon =
                iconMap[item.icon] || BookOpen;

              return (

                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl bg-white dark:bg-gray-950 shadow-xl border border-purple-100 dark:border-gray-800 p-8"
                >

                  <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 flex items-center justify-center">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold dark:text-white">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">

                    {item.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        )}

      </div>

    </section>
  );
}

export default SchoolLife;