import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import { getAdmissionRequirements } from "../../api/admissions";

function Requirements() {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequirements() {
      try {
        const data = await getAdmissionRequirements();
        setRequirements(data);
      } catch (error) {
        console.error("Failed to load admission requirements:", error);
      } finally {
        setLoading(false);
      }
    }

    loadRequirements();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            Requirements

          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            Admission Checklist

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">

            Please prepare the following documents before beginning the admission process.

          </p>

        </div>

        {loading ? (

          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">

            Loading requirements...

          </div>

        ) : requirements.length === 0 ? (

          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">

            No admission requirements available.

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {requirements.map((item, index) => (

              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="flex items-center gap-5 rounded-2xl bg-purple-50 dark:bg-gray-900 border border-purple-100 dark:border-gray-800 shadow-lg p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">

                  <FileText
                    size={24}
                    className="text-purple-700"
                  />

                </div>

                <span className="text-lg text-gray-700 dark:text-white">

                  {item.name}

                </span>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Requirements;