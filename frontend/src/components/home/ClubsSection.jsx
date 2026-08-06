import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Leaf,
  Shield,
  Laptop,
  Users,
} from "lucide-react";

import { getHomepageData } from "../../api/homepage";

const iconMap = {
  "Book Club": BookOpen,
  "Environmental Club": Leaf,
  Scouts: Shield,
  "ICT & Innovation": Laptop,
};

function ClubsSection() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClubs() {
      try {
        const data = await getHomepageData();

        setClubs(data.clubs || []);
      } catch (error) {
        console.error("Failed to load clubs:", error);
      } finally {
        setLoading(false);
      }
    }

    loadClubs();
  }, []);

  return (
    <section className="py-24 bg-purple-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">
            Student Clubs
          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">
            Learn. Lead. Grow.
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Clubs provide learners with opportunities to develop leadership,
            teamwork, creativity and lifelong skills beyond the classroom.
          </p>

        </div>

        {loading ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">
            Loading clubs...
          </div>

        ) : clubs.length === 0 ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">
            No clubs available.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {clubs.map((club, index) => {
              const Icon = iconMap[club.title] || Users;

              return (
                <motion.div
                  key={club.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                  }}
                  className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl p-8 border border-purple-100 dark:border-gray-800"
                >

                  <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-purple-700"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold dark:text-white">

                    {club.title}

                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">

                    {club.description}

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

export default ClubsSection;