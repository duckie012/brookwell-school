import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import { getHomepageData } from "../../api/homepage";

function Statistics() {
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStatistics() {
      try {
        const data = await getHomepageData();

        setStatistics(data.statistics || []);
      } catch (error) {
        console.error("Failed to load statistics:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStatistics();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-purple-700 to-purple-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {loading ? (

          <div className="text-center text-white text-lg">
            Loading statistics...
          </div>

        ) : statistics.length === 0 ? (

          <div className="text-center text-purple-100 text-lg">
            Statistics unavailable.
          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {statistics.map((stat, index) => (

              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center"
              >

                <h2 className="text-5xl font-extrabold text-white">

                  <CountUp
                    end={Number(stat.value)}
                    duration={2.5}
                  />

                  {stat.suffix}

                </h2>

                <p className="mt-4 text-purple-100 text-lg">

                  {stat.title}

                </p>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Statistics;