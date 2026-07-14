import {
  Users,
  Laptop,
  Brain,
  HeartHandshake,
} from "lucide-react";

const methods = [
  {
    icon: Users,
    title: "Collaborative Learning",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
  },
  {
    icon: HeartHandshake,
    title: "Character Development",
  },
];

function TeachingApproach() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-14">
          Our Teaching Approach
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {methods.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-purple-700 text-white rounded-xl p-8 text-center"
              >
                <Icon
                  size={50}
                  className="mx-auto mb-6"
                />

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default TeachingApproach;