import {
  GraduationCap,
  Church,
  Trophy,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Teachers",
    icon: GraduationCap,
    description: "Dedicated educators committed to every learner's success.",
  },
  {
    title: "Christian Values",
    icon: Church,
    description: "A strong moral and spiritual foundation for every child.",
  },
  {
    title: "Talent Development",
    icon: Trophy,
    description: "Sports, clubs and performing arts help learners discover their gifts.",
  },
  {
    title: "Individual Attention",
    icon: Users,
    description: "Small class sizes encourage personalized learning.",
  },
];

function WhyChooseSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Parents Choose Brookwell
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="bg-purple-700 text-white rounded-2xl p-8 text-center hover:scale-105 transition"
              >
                <Icon
                  size={50}
                  className="mx-auto mb-6"
                />

                <h3 className="text-xl font-bold mb-4">
                  {reason.title}
                </h3>

                <p className="text-purple-100">
                  {reason.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseSection;