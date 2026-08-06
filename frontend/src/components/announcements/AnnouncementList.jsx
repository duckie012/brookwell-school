import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getAnnouncements } from "../../api/announcements";

function AnnouncementList() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        const data = await getAnnouncements();

        setAnnouncements(data);
      } catch (error) {
        console.error("Failed to load announcements:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAnnouncements();
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            School Updates

          </span>

          <h2 className="mt-4 text-5xl font-black dark:text-white">

            Latest Announcements

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">

            Stay informed with the latest news, academic updates,
            upcoming events and important notices from Brookwell Harmony School.

          </p>

        </div>

        {loading ? (

          <div className="text-center py-20 text-gray-500 dark:text-gray-400">

            Loading announcements...

          </div>

        ) : announcements.length === 0 ? (

          <div className="text-center py-20 text-gray-500 dark:text-gray-400">

            No announcements available.

          </div>

        ) : (

          <div className="grid lg:grid-cols-2 gap-8">

            {announcements.map((announcement, index) => (

              <motion.article
                key={announcement.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-950 rounded-3xl overflow-hidden shadow-xl border border-purple-100 dark:border-gray-800"
              >

                {announcement.image && (

                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-60 object-cover"
                  />

                )}

                <div className="p-8">

                  <div className="flex items-center gap-2 text-purple-700 font-medium">

                    <CalendarDays size={18} />

                    <span>{announcement.created_at}</span>

                  </div>

                  <h3 className="mt-5 text-3xl font-bold dark:text-white">

                    {announcement.title}

                  </h3>

                  <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8 line-clamp-4">

                    {announcement.summary}

                  </p>

                  <Link
                    to={`/announcements/${announcement.id}`}
                    className="inline-flex items-center gap-2 mt-8 font-semibold text-purple-700 hover:text-purple-900 transition"
                  >

                    Read Full Announcement

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </motion.article>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default AnnouncementList;