import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getAboutData } from "../../api/about";

function StorySection() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStory() {
      try {
        const data = await getAboutData();

        setStory(data.story || null);
      } catch (error) {
        console.error("Failed to load story:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStory();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Loading school story...
          </p>
        </div>
      </section>
    );
  }

  if (!story) return null;

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

              Our Story

            </span>

            <h2 className="mt-5 text-5xl font-black dark:text-white">

              {story.title}

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400">

              {story.paragraphOne}

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">

              {story.paragraphTwo}

            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >

            {story.image ? (

              <img
                src={story.image}
                alt="Brookwell Harmony School"
                className="w-full h-[500px] object-cover"
              />

            ) : (

              <div className="flex h-[500px] items-center justify-center bg-purple-100 dark:bg-gray-900">

                <span className="text-xl font-semibold text-purple-600">

                  School Story Image

                </span>

              </div>

            )}

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default StorySection;