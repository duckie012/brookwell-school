import { school } from "../../config/school";

function ClubsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            School Clubs
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Encouraging teamwork, leadership and responsibility.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {school.clubs.map((club) => (
            <div
              key={club}
              className="bg-purple-700 rounded-xl p-10 text-white shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold">
                {club}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ClubsSection;