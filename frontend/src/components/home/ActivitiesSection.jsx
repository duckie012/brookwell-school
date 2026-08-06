import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Waves,
  BookOpen,
  Leaf,
  Users,
  Star,
} from "lucide-react";

import { getHomepageData } from "../../api/homepage";

const iconMap = {
  Swimming: Waves,
  Chess: Trophy,
  Dancing: Star,
  "Book Club": BookOpen,
  "Environmental Club": Leaf,
  Scouts: Users,
  Taekwondo: Trophy,
};

function ActivitiesSection() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivities() {
      try {
        const data = await getHomepageData();

        setActivities(data.activities || []);
      } catch (error) {
        console.error("Failed to load activities:", error);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            Beyond Academics

          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            Co-Curricular Activities

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">

            At Brookwell Harmony School, learning extends beyond the classroom.
            Every learner is encouraged to discover and nurture their talents.

          </p>

        </div>

        {loading ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">

            Loading activities...

          </div>

        ) : activities.length === 0 ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">

            No activities available.

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {activities.map((activity, index) => {
              const Icon =
                iconMap[activity.title] || Trophy;

              return (
                <motion.div
                  key={activity.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                  }}
                  className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl p-8 text-center border border-purple-100 dark:border-gray-800"
                >

                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto">

                    <Icon
                      size={30}
                      className="text-purple-700"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold dark:text-white">

                    {activity.title}

                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">

                    {activity.description}

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

export default ActivitiesSection;