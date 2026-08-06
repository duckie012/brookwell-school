import { motion } from "framer-motion";
import { BookOpen, Eye, Target, Award } from "lucide-react";

import schoolImage from "../../assets/images/hero/hero-1.jpg";
import { school } from "../../config/school";

function Welcome() {
  const features = [
    {
      icon: <Eye size={30} />,
      title: "Our Vision",
      description:
        school.vision,
    },
    {
      icon: <Target size={30} />,
      title: "Our Mission",
      description:
        school.mission,
    },
    {
      icon: <Award size={30} />,
      title: "Excellence",
      description:
        "We strive to inspire confidence, discipline, creativity and academic excellence in every learner.",
    },
    {
      icon: <BookOpen size={30} />,
      title: "Holistic Learning",
      description:
        "Education goes beyond books. We nurture talents, leadership and positive character.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={schoolImage}
              alt="Brookwell Harmony School"
              className="rounded-3xl shadow-2xl object-cover w-full h-162.5"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-10 -right-6 bg-purple-600 text-white rounded-3xl p-8 shadow-2xl">

              <h2 className="text-4xl font-bold">15+</h2>

              <p className="mt-2">
                Years of Educational Excellence
              </p>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 uppercase tracking-widest font-semibold">

              Welcome to {school.name}

            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">

              Building Bright Futures Through Quality Education

            </h2>

            <p className="mt-8 text-gray-600 dark:text-gray-400 leading-8">

              At Brookwell Harmony School, we believe that every child is
              unique and deserves an environment where learning is exciting,
              engaging and inspiring. Our dedicated teachers provide
              individualized attention while promoting academic excellence,
              creativity, leadership and moral values.

            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">

              We are committed to creating a safe, nurturing and inclusive
              environment where learners develop confidence, curiosity and
              lifelong skills that prepare them for future success.

            </p>

            {/* Feature Cards */}

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {features.map((feature, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    transition: { duration: .3 },
                  }}
                  className="rounded-2xl border border-purple-100 dark:border-gray-800 bg-purple-50 dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all"
                >

                  <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center mb-5">

                    {feature.icon}

                  </div>

                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">

                    {feature.description}

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Welcome;