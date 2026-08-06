import { motion } from "framer-motion";
import {
  School,
  Monitor,
  Bus,
  Library,
  Trees,
  Volleyball,
} from "lucide-react";

function Facilities() {
  const facilities = [
    {
      title: "Modern Classrooms",
      icon: <School size={30} />,
    },
    {
      title: "Computer Learning",
      icon: <Monitor size={30} />,
    },
    {
      title: "School Transport",
      icon: <Bus size={30} />,
    },
    {
      title: "Library",
      icon: <Library size={30} />,
    },
    {
      title: "Playground",
      icon: <Volleyball size={30} />,
    },
    {
      title: "Green Environment",
      icon: <Trees size={30} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

          <span className="uppercase text-purple-600 font-semibold">
            Our Facilities
          </span>

          <h2 className="mt-4 text-5xl font-bold dark:text-white">
            A Safe & Inspiring Learning Environment
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {facilities.map((facility) => (

            <motion.div
              key={facility.title}
              whileHover={{ scale: 1.04 }}
              className="rounded-3xl bg-white dark:bg-gray-950 shadow-lg p-10 text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                {facility.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                {facility.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Facilities;