import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bus,
  ShieldCheck,
  Clock3,
  MapPinned,
} from "lucide-react";

import { getHomepageData } from "../../api/homepage";

const iconMap = {
  Bus,
  ShieldCheck,
  Clock3,
  MapPinned,
};

function TransportSection() {
  const [transport, setTransport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTransport() {
      try {
        const data = await getHomepageData();

        setTransport(data.transport || null);
      } catch (error) {
        console.error("Failed to load transport section:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTransport();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Loading transport information...
          </p>
        </div>
      </section>
    );
  }

  if (!transport) return null;

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

              School Transport

            </span>

            <h2 className="mt-5 text-5xl font-black dark:text-white">

              {transport.title}

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400">

              {transport.description}

            </p>

          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">

            {transport.features?.map((feature, index) => {

              const Icon =
                iconMap[feature.icon] || Bus;

              return (

                <motion.div
                  key={feature.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: .5,
                    delay: index * .1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl bg-gradient-to-br from-purple-700 to-purple-900 text-white p-8 shadow-xl"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">

                    {feature.title}

                  </h3>

                  <p className="mt-4 text-purple-100 leading-7">

                    {feature.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default TransportSection;