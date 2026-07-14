import { school } from "../../config/school";

function AcademicsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Academic Levels
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {school.classes.map((level) => (
            <div
              key={level}
              className="bg-purple-700 text-white rounded-xl text-center py-8 shadow-lg"
            >
              <h3 className="font-semibold">
                {level}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AcademicsSection;