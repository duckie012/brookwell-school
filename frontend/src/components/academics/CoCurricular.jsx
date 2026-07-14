import { school } from "../../config/school";

function CoCurricular() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-14">
          Co-Curricular Activities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {school.activities.map((activity) => (

            <div
              key={activity}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 text-center"
            >
              <h3 className="font-bold text-xl text-purple-700">
                {activity}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CoCurricular;