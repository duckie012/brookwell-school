import { BookOpen } from "lucide-react";

function Curriculum() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <BookOpen
            size={55}
            className="mx-auto text-purple-700"
          />

          <h2 className="text-4xl font-bold mt-6">
            CBC Curriculum
          </h2>

        </div>

        <p className="text-lg text-center leading-9 text-gray-600 dark:text-gray-300">

          Brookwell Harmony School follows Kenya's Competency Based
          Curriculum (CBC), helping learners build knowledge,
          practical skills, creativity and strong values through
          learner-centered education.

        </p>

      </div>

    </section>
  );
}

export default Curriculum;