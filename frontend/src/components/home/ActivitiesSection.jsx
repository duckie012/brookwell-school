import { school } from "../../config/school";

function ActivitiesSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Co-Curricular Activities
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Developing talents beyond the classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {school.activities.map((activity) => (
            <div
              key={activity}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-purple-700">
                {activity}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ActivitiesSection;