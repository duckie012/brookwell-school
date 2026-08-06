import { motion } from "framer-motion";
import {
  UserCheck,
  BookOpen,
  Laptop,
  HeartHandshake,
} from "lucide-react";

function TeachingApproach() {
  const approaches = [
    {
      icon: <UserCheck size={32} />,
      title: "Learner-Centered",
      description:
        "Every learner is encouraged to participate actively, ask questions and explore ideas through practical experiences.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Competency-Based",
      description:
        "Lessons focus on developing skills, values and knowledge that learners can apply in everyday life.",
    },
    {
      icon: <Laptop size={32} />,
      title: "Technology Integration",
      description:
        "Digital learning tools enhance classroom experiences and prepare learners for a technology-driven future.",
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Holistic Development",
      description:
        "We nurture academic excellence, character, creativity, leadership and emotional well-being.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-widest font-semibold text-purple-600">
              Teaching Approach
            </span>

            <h2 className="mt-5 text-5xl font-black dark:text-white">
              Inspiring Curiosity Through Modern Learning
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Our teaching philosophy focuses on helping every learner
              discover their strengths while building confidence,
              creativity and lifelong learning habits.
            </p>
          </motion.div>

          <div className="space-y-6">

            {approaches.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 10 }}
                className="rounded-3xl bg-gray-50 dark:bg-gray-900 shadow-lg p-7 flex gap-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default TeachingApproach;