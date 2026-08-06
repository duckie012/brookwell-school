import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getAnnouncements } from "../../api/announcements";

function FeaturedAnnouncement() {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedAnnouncement() {
      try {
        const data = await getAnnouncements();

        const featured =
          data.find((item) => item.featured === true) || data[0];

        setAnnouncement(featured || null);
      } catch (error) {
        console.error("Failed to load featured announcement:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedAnnouncement();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Loading featured announcement...
          </p>
        </div>
      </section>
    );
  }

  if (!announcement) return null;

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white"
        >

          <div className="grid lg:grid-cols-2">

            <div className="p-10 lg:p-16 flex flex-col justify-center">

              <span className="inline-block w-fit rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider">

                Featured Announcement

              </span>

              <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight">

                {announcement.title}

              </h2>

              <div className="flex items-center gap-2 mt-6 text-purple-100">

                <CalendarDays size={18} />

                <span>{announcement.created_at}</span>

              </div>

              <p className="mt-8 text-lg leading-8 text-purple-100">

                {announcement.summary}

              </p>

              <Link
                to={`/announcements/${announcement.id}`}
                className="inline-flex items-center gap-2 mt-10 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition w-fit"
              >
                Read Full Announcement

                <ArrowRight size={18} />
              </Link>

            </div>

            <div>

              {announcement.image ? (

                <img
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-full object-cover min-h-[420px]"
                />

              ) : (

                <div className="flex items-center justify-center h-full min-h-[420px] bg-purple-900 text-purple-200 text-xl font-semibold">

                  Brookwell Harmony School

                </div>

              )}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default FeaturedAnnouncement;