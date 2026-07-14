import { Target, Eye, BookOpen } from "lucide-react";
import { school } from "../../config/school";

function VisionMission() {
  const items = [
    {
      icon: Eye,
      title: "Vision",
      text: school.vision,
    },
    {
      icon: Target,
      title: "Mission",
      text: school.mission,
    },
    {
      icon: BookOpen,
      title: "Motto",
      text: school.motto,
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 transition"
              >
                <Icon
                  size={55}
                  className="mx-auto text-purple-700 mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default VisionMission;