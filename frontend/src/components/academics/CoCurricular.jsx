import { motion } from "framer-motion";
import {
  Music4,
  Dumbbell,
  Trophy,
  BookOpen,
  Trees,
  Waves,
} from "lucide-react";

function CoCurricular() {
  const activities = [
    {
      icon: <Music4 size={30} />,
      title: "Music & Dance",
    },
    {
      icon: <Dumbbell size={30} />,
      title: "Taekwondo",
    },
    {
      icon: <BookOpen size={30} />,
      title: "Book Club",
    },
    {
      icon: <Trees size={30} />,
      title: "Environmental Club",
    },
    {
      icon: <Trophy size={30} />,
      title: "Scouts",
    },
    {
      icon: <Waves size={30} />,
      title: "Swimming",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-purple-600 font-semibold">
            Co-Curricular Activities
          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">
            Developing Talents Beyond The Classroom
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            We believe education extends beyond books by nurturing creativity,
            leadership, teamwork and physical well-being.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {activities.map((activity) => (

            <motion.div
              key={activity.title}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-purple-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 shadow-lg"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                {activity.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                {activity.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                Learners are encouraged to discover and develop their unique
                talents through engaging co-curricular programmes.
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CoCurricular;