import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Users,
  Trophy,
  BookOpen,
} from "lucide-react";

function CoreValues() {
  const values = [
    {
      icon: <HeartHandshake size={32} />,
      title: "Respect",
      description:
        "We promote kindness, respect and compassion among learners, teachers and parents.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Integrity",
      description:
        "Honesty and accountability guide everything we do.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description:
        "We inspire creativity and problem-solving through modern learning.",
    },
    {
      icon: <Users size={32} />,
      title: "Teamwork",
      description:
        "Learning together builds confidence and leadership.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Excellence",
      description:
        "We encourage every learner to strive for their personal best.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Lifelong Learning",
      description:
        "Curiosity and continuous learning prepare learners for the future.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-purple-600 font-semibold">
            Core Values
          </span>

          <h2 className="mt-4 text-5xl font-bold dark:text-white">
            Values That Shape Every Learner
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Our values guide every decision we make and every learner we nurture.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                {value.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {value.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CoreValues;