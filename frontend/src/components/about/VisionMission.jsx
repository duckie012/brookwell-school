import { Eye, Target } from "lucide-react";

import { school } from "../../config/school";

function VisionMission() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="rounded-3xl bg-white dark:bg-gray-950 p-10 shadow-xl">

            <Eye
              size={40}
              className="text-purple-600"
            />

            <h2 className="mt-6 text-3xl font-bold dark:text-white">
              Our Vision
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              {school.vision}
            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-950 p-10 shadow-xl">

            <Target
              size={40}
              className="text-purple-600"
            />

            <h2 className="mt-6 text-3xl font-bold dark:text-white">
              Our Mission
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              {school.mission}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VisionMission;