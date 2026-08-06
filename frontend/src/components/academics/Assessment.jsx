import { motion } from "framer-motion";
import {
  ClipboardCheck,
  TrendingUp,
  BarChart3,
  Award,
} from "lucide-react";

function Assessment() {
  const assessments = [
    {
      icon: <ClipboardCheck size={30} />,
      title: "Continuous Assessment",
    },
    {
      icon: <TrendingUp size={30} />,
      title: "Learner Progress Tracking",
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Performance Analysis",
    },
    {
      icon: <Award size={30} />,
      title: "Talent Recognition",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-purple-600 font-semibold">
            Assessment
          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">
            Monitoring Growth Every Step Of The Way
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Assessment is designed to monitor learner progress, identify
            strengths and provide timely support where needed.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {assessments.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white dark:bg-gray-950 p-8 shadow-lg text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold dark:text-white">
                {item.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Assessment;