import { Heart, ShieldCheck, Users, Star } from "lucide-react";

function CoreValues() {
  const values = [
    { icon: Heart, name: "Integrity" },
    { icon: Users, name: "Respect" },
    { icon: ShieldCheck, name: "Discipline" },
    { icon: Star, name: "Excellence" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.name}
                className="bg-purple-700 rounded-2xl text-white p-10 text-center shadow-lg"
              >
                <Icon size={50} className="mx-auto mb-5" />

                <h3 className="text-xl font-bold">
                  {value.name}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default CoreValues;