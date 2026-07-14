import { Link } from "react-router-dom";

const announcements = [
  {
    id: 1,
    title: "Term 3 Admissions Ongoing",
    date: "12 July 2026",
    important: true,
    excerpt:
      "Admissions are now open for learners from Play Group to Grade 7.",
  },
  {
    id: 2,
    title: "Parents Meeting",
    date: "18 July 2026",
    important: false,
    excerpt:
      "Parents are invited for the academic progress meeting this Friday.",
  },
  {
    id: 3,
    title: "Swimming Competition",
    date: "22 July 2026",
    important: false,
    excerpt:
      "Selected learners will participate in the county swimming competition.",
  },
];

function AnnouncementsPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-4xl font-bold">
            Latest Announcements
          </h2>

          <Link
            to="/announcements"
            className="text-purple-700 font-semibold"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {announcements.map((announcement) => (

            <Link
              key={announcement.id}
              to={`/announcements/${announcement.id}`}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl transition"
            >

              {announcement.important && (
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                  IMPORTANT
                </span>
              )}

              <h3 className="text-xl font-bold mt-4">
                {announcement.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {announcement.date}
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {announcement.excerpt}
              </p>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}

export default AnnouncementsPreview;