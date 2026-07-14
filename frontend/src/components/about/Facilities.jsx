import {
  Bus,
  BookOpen,
  MonitorSmartphone,
  Trees,
  Waves,
  ShieldCheck,
} from "lucide-react";

const facilities = [
  {
    title: "Modern Classrooms",
    icon: BookOpen,
    description:
      "Well-equipped classrooms that provide a comfortable learning environment.",
  },
  {
    title: "School Transport",
    icon: Bus,
    description:
      "Safe and reliable transport covering Nanyuki and surrounding areas.",
  },
  {
    title: "Computer Learning",
    icon: MonitorSmartphone,
    description:
      "Technology-assisted learning to prepare learners for the digital world.",
  },
  {
    title: "Playgrounds",
    icon: Trees,
    description:
      "Large outdoor spaces that promote physical growth and teamwork.",
  },
  {
    title: "Swimming",
    icon: Waves,
    description:
      "Swimming lessons that build confidence, fitness and life skills.",
  },
  {
    title: "Safe Environment",
    icon: ShieldCheck,
    description:
      "A secure and child-friendly school where learners thrive.",
  },
];

function Facilities() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          School Facilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <Icon
                  size={45}
                  className="text-purple-700 mb-5"
                />

                <h3 className="text-xl font-bold mb-4">
                  {facility.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {facility.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Facilities;