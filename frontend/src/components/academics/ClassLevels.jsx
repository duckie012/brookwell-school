import { school } from "../../config/school";

function ClassLevels() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-14">
          Learning Levels
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {school.classes.map((level) => (

            <div
              key={level}
              className="bg-purple-700 rounded-xl py-10 text-center text-white font-bold text-xl shadow-lg hover:scale-105 transition"
            >
              {level}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ClassLevels;