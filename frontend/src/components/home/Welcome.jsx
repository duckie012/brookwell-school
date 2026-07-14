import { school } from "../../config/school";

function Welcome() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6 text-purple-700">
            Welcome to {school.name}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
            At Brookwell Harmony School, we believe every child has unique
            potential. We provide a nurturing Christian environment where
            learners develop academically, socially and spiritually while
            discovering their talents.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-8">
            We proudly offer quality education from Play Group to Grade 7,
            preparing learners with strong values and lifelong skills.
          </p>
        </div>

        <div className="bg-purple-700 rounded-2xl p-10 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

          <p className="mb-8">{school.vision}</p>

          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>

          <p>{school.mission}</p>
        </div>

      </div>
    </section>
  );
}

export default Welcome;