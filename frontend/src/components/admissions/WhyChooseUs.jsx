import {
  BookOpen,
  Bus,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const reasons = [
  {
    icon: <BookOpen size={30} />,
    title: "CBC Curriculum",
    text: "Competency Based Curriculum delivered by qualified teachers.",
  },
  {
    icon: <Bus size={30} />,
    title: "School Transport",
    text: "Safe and reliable transport for learners.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Safe Environment",
    text: "A secure and caring environment for every child.",
  },
  {
    icon: <Trophy size={30} />,
    title: "Co-Curricular",
    text: "Sports, swimming, chess, taekwondo and performing arts.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            A Foundation For Success

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {reasons.map((reason) => (

            <div
              key={reason.title}
              className="rounded-3xl shadow-lg bg-gray-50 dark:bg-gray-900 p-8 hover:-translate-y-2 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">

                {reason.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold dark:text-white">

                {reason.title}

              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">

                {reason.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;