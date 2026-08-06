import { CheckCircle2 } from "lucide-react";

function WhyChooseSection() {
  const reasons = [
    "Qualified & Caring Teachers",
    "CBC Curriculum",
    "Modern Learning Environment",
    "Strong Christian Foundation",
    "Excellent Academic Performance",
    "Sports & Talent Development",
    "Safe School Transport",
    "Parent Partnership",
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase font-semibold text-purple-600">
              Why Brookwell?
            </span>

            <h2 className="mt-5 text-5xl font-bold dark:text-white">
              Why Parents Choose Us
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              We believe education goes beyond academics by nurturing values,
              leadership, creativity and confidence in every learner.
            </p>

          </div>

          <div className="space-y-5">

            {reasons.map((reason) => (

              <div
                key={reason}
                className="flex items-center gap-4 rounded-2xl bg-purple-50 dark:bg-gray-900 p-5"
              >

                <CheckCircle2 className="text-purple-600" />

                <span className="font-medium dark:text-white">
                  {reason}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseSection;