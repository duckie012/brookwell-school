function WhyChooseUs() {
  const reasons = [
    {
      title: "Qualified Teachers",
      text: "Experienced and dedicated educators committed to every learner.",
    },
    {
      title: "Christian Foundation",
      text: "Building strong moral values through faith-based education.",
    },
    {
      title: "Modern Learning",
      text: "Interactive classrooms that encourage creativity and innovation.",
    },
    {
      title: "Talent Development",
      text: "Supporting every learner through sports, clubs and performing arts.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Brookwell?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {reason.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;