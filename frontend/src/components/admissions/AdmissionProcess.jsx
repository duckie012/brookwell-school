import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { getAdmissionProcess } from "../../api/admissions";

function AdmissionProcess() {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAdmissionProcess() {
      try {
        const data = await getAdmissionProcess();
        setSteps(data);
      } catch (error) {
        console.error("Failed to load admission process:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAdmissionProcess();
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            Admission Process

          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            Enrolling Is Easy

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">

            Follow these simple steps to join the Brookwell Harmony School family.

          </p>

        </div>

        {loading ? (

          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">

            Loading admission process...

          </div>

        ) : steps.length === 0 ? (

          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">

            Admission process is currently unavailable.

          </div>

        ) : (

          <div className="mt-16 space-y-6">

            {steps.map((step, index) => (

              <motion.div
                key={step.id || index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                }}
                className="flex items-start gap-5 rounded-2xl bg-white dark:bg-gray-950 border border-purple-100 dark:border-gray-800 shadow-lg p-6"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">

                  <CheckCircle2
                    size={26}
                    className="text-purple-700"
                  />

                </div>

                <div>

                  <p className="text-lg font-semibold text-gray-900 dark:text-white">

                    Step {index + 1}

                  </p>

                  <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">

                    {step.description}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default AdmissionProcess;