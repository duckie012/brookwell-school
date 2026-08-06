import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Dumbbell,
  Waves,
  ChessKnight,
  Music4,
} from "lucide-react";

import { activitiesSection } from "../../config/home";

const icons = [
  <Dumbbell size={30} />,
  <Waves size={30} />,
  <ChessKnight size={30} />,
  <Music4 size={30} />,
];

function ActivitiesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            {activitiesSection.badge}
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {activitiesSection.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {activitiesSection.description}
          </p>
        </motion.div>

        {/* Activities Grid */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {activitiesSection.activities.map((activity, index) => (

            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-purple-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">

                {icons[index]}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                {activity.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {activity.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700"
          >
            Discover Student Life

            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}

export default ActivitiesSection;