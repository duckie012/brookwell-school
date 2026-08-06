import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getFeeStructure } from "../../api/admissions";

function FeeStructure() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFees() {
      try {
        const data = await getFeeStructure();
        setFees(data);
      } catch (error) {
        console.error("Failed to load fee structure:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFees();
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            School Fees

          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            Fee Structure

          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400">

            Below is the current school fee structure. For additional charges or
            payment arrangements, kindly contact the admissions office.

          </p>

        </div>

        {loading ? (

          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">

            Loading fee structure...

          </div>

        ) : fees.length === 0 ? (

          <div className="text-center mt-16 text-gray-500 dark:text-gray-400">

            Fee structure is currently unavailable.

          </div>

        ) : (

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 overflow-hidden rounded-3xl shadow-xl border border-purple-100 dark:border-gray-800"
          >

            <table className="w-full">

              <thead className="bg-purple-700 text-white">

                <tr>

                  <th className="px-8 py-5 text-left">

                    Class Level

                  </th>

                  <th className="px-8 py-5 text-left">

                    Tuition Fees

                  </th>

                </tr>

              </thead>

              <tbody>

                {fees.map((fee, index) => (

                  <tr
                    key={fee.id || index}
                    className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-purple-50 dark:hover:bg-gray-900 transition"
                  >

                    <td className="px-8 py-5 font-medium text-gray-800 dark:text-white">

                      {fee.level}

                    </td>

                    <td className="px-8 py-5 font-semibold text-purple-700">

                      {fee.amount}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </motion.div>

        )}

      </div>

    </section>
  );
}

export default FeeStructure;