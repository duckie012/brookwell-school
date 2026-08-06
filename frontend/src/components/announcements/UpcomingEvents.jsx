import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

import { getAnnouncements } from "../../api/announcements";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getAnnouncements();

        const upcoming = data
          .filter((item) => item.event === true)
          .slice(0, 3);

        setEvents(upcoming);
      } catch (error) {
        console.error("Failed to load upcoming events:", error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">

            School Calendar

          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            Upcoming Events

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">

            Mark your calendar and stay informed about important school
            activities and events.

          </p>

        </div>

        {loading ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">

            Loading events...

          </div>

        ) : events.length === 0 ? (

          <div className="text-center mt-20 text-gray-500 dark:text-gray-400">

            No upcoming events available.

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {events.map((event, index) => (

              <motion.div
                key={event.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl bg-gray-50 dark:bg-gray-900 border border-purple-100 dark:border-gray-800 shadow-xl p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-purple-700 flex items-center justify-center text-white">

                  <CalendarDays size={30} />

                </div>

                <h3 className="mt-6 text-2xl font-bold dark:text-white">

                  {event.title}

                </h3>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">

                    <CalendarDays size={18} />

                    <span>

                      {event.event_date || event.created_at}

                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">

                    <Clock size={18} />

                    <span>

                      {event.event_time || "To Be Announced"}

                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">

                    <MapPin size={18} />

                    <span>

                      {event.location || "Brookwell Harmony School"}

                    </span>

                  </div>

                </div>

                <p className="mt-8 leading-7 text-gray-600 dark:text-gray-400 line-clamp-3">

                  {event.summary}

                </p>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default UpcomingEvents;