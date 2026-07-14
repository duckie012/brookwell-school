function UpcomingEvents() {
  const events = [
    "Parents Meeting",
    "Swimming Gala",
    "Music & Dance Festival",
    "Closing Day",
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h2>

        <div className="space-y-5">

          {events.map((event) => (

            <div
              key={event}
              className="bg-purple-700 text-white rounded-xl p-6"
            >
              {event}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default UpcomingEvents;