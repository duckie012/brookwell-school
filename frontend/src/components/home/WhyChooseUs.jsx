import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Bus,
} from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <GraduationCap size={34} />,
      title: "Qualified Teachers",
      description:
        "Our experienced and passionate educators are committed to helping every learner reach their full academic potential.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Safe & Nurturing Environment",
      description:
        "We provide a secure, caring and inclusive environment where children learn with confidence and peace of mind.",
    },
    {
      icon: <BookOpen size={34} />,
      title: "Academic Excellence",
      description:
        "Our curriculum encourages curiosity, creativity, critical thinking and a lifelong love for learning.",
    },
    {
      icon: <Users size={34} />,
      title: "Holistic Development",
      description:
        "Beyond academics, we develop leadership, character, discipline and communication skills in every learner.",
    },
    {
      icon: <Trophy size={34} />,
      title: "Co-Curricular Activities",
      description:
        "Learners participate in Taekwondo, Chess, Swimming, Dancing and various clubs that nurture their talents.",
    },
    {
      icon: <Bus size={34} />,
      title: "Reliable School Transport",
      description:
        "Safe and dependable school transport ensures convenience for parents and comfort for learners.",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-purple-600 font-semibold uppercase tracking-widest">
            Why Choose Brookwell Harmony School
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            A Place Where Every Child Thrives
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
            We combine quality education, strong values and exciting learning
            experiences to help every learner grow academically, socially and
            emotionally.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-purple-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {reason.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                {reason.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-purple-600 text-white px-8 py-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold">
            Learning is Fun
          </h3>

          <p className="mt-4 text-lg max-w-3xl mx-auto leading-8 text-purple-100">
            At Brookwell Harmony School, we believe education should inspire,
            challenge and empower every child. We don't just prepare learners
            for exams—we prepare them for life.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;