const announcements = [
  {
    title: "Parents Meeting",
    date: "12 July 2026",
    category: "Meeting",
  },
  {
    title: "Swimming Competition",
    date: "15 July 2026",
    category: "Sports",
  },
  {
    title: "Mid-Term Break",
    date: "20 July 2026",
    category: "Academic",
  },
  {
    title: "Environmental Club Activity",
    date: "25 July 2026",
    category: "Club",
  },
];

function AnnouncementList() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Latest Announcements
        </h2>

        <div className="space-y-6">

          {announcements.map((announcement) => (

            <div
              key={announcement.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <span className="inline-block bg-purple-700 text-white px-3 py-1 rounded-full text-sm mb-4">

                {announcement.category}

              </span>

              <h3 className="text-2xl font-bold">

                {announcement.title}

              </h3>

              <p className="text-gray-500 mt-2">

                {announcement.date}

              </p>

              <button className="mt-5 text-purple-700 font-semibold">
                Read More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AnnouncementList;