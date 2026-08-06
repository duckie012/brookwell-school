import { Link } from "react-router-dom";
import {
  CalendarDays,
  User,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";

function AnnouncementView() {
  return (
    <>
      {/* Hero */}

      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-28 overflow-hidden">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <Link
              to="/announcements"
              className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition"
            >
              <ArrowLeft size={18} />
              Back to Announcements
            </Link>

            <span className="block mt-10 uppercase tracking-[0.2em] text-purple-200 font-semibold">
              Featured Announcement
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">

              2026 First Term Admissions Now Open

            </h1>

            <div className="flex flex-wrap gap-8 mt-8 text-purple-100">

              <div className="flex items-center gap-2">

                <CalendarDays size={18} />

                January 15, 2026

              </div>

              <div className="flex items-center gap-2">

                <User size={18} />

                School Administration

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Content */}

      <section className="py-24 bg-white dark:bg-gray-950">

        <div className="max-w-4xl mx-auto px-6">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
            alt="Students"
            className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
          />

          <div className="mt-14 space-y-8 text-lg leading-9 text-gray-700 dark:text-gray-300">

            <p>

              Brookwell Harmony School is pleased to announce that admissions
              for the 2026 academic year are officially open. We welcome
              applications from learners joining Playgroup through Grade 7.

            </p>

            <p>

              Parents and guardians are invited to visit our school, interact
              with our dedicated teaching staff and experience our modern
              learning environment.

            </p>

            <p>

              Learners benefit from quality CBC education, experienced teachers,
              co-curricular activities including swimming, chess, taekwondo,
              dancing, environmental club and book club, as well as safe school
              transport.

            </p>

            <p>

              Visit the admissions office or contact us to begin your child's
              journey where <strong>Learning is Fun.</strong>

            </p>

          </div>

          <div className="mt-14 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-7 py-4 rounded-xl transition">

              <Share2 size={18} />

              Share Announcement

            </button>

            <Link
              to="/admissions"
              className="bg-gray-100 dark:bg-gray-900 dark:text-white px-7 py-4 rounded-xl hover:bg-purple-700 hover:text-white transition"
            >

              Apply Now

            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-black">

            Stay Updated

          </h2>

          <p className="mt-8 text-lg leading-8 text-purple-100">

            Keep checking our announcements page for school news, events,
            academic updates and important notices.

          </p>

          <Link
            to="/announcements"
            className="inline-block mt-10 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >

            View All Announcements

          </Link>

        </div>

      </section>
    </>
  );
}

export default AnnouncementView;