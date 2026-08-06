import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { getAnnouncements } from "../../api/announcements";

function AnnouncementsPreview() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        const data = await getAnnouncements();

        // Display only the latest 3 announcements
        setAnnouncements(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to load announcements:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAnnouncements();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="text-purple-600 uppercase font-semibold">
            Latest News
          </span>

          <h2 className="mt-4 text-5xl font-bold dark:text-white">
            Announcements
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            Stay updated with the latest school news and events.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 text-center text-gray-500">
            Loading announcements...
          </div>
        ) : announcements.length === 0 ? (
          <div className="mt-16 text-center text-gray-500">
            No announcements available.
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {announcements.map((announcement) => (
              <motion.div
                key={announcement.id}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-purple-100 dark:border-gray-800 p-8 shadow-lg bg-white dark:bg-gray-900"
              >
                {announcement.image && (
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-52 object-cover rounded-2xl mb-6"
                  />
                )}

                <CalendarDays
                  className="text-purple-600"
                  size={32}
                />

                <p className="mt-5 text-sm text-purple-600">
                  {announcement.created_at}
                </p>

                <h3 className="mt-3 text-2xl font-bold dark:text-white">
                  {announcement.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 line-clamp-3">
                  {announcement.summary}
                </p>

                <Link
                  to={`/announcements/${announcement.id}`}
                  className="inline-flex items-center gap-2 mt-8 font-semibold text-purple-700 hover:text-purple-900 transition"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            to="/announcements"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View All Announcements
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AnnouncementsPreview;