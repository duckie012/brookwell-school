import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which classes do you offer?",
    answer:
      "We offer learning from Playgroup through Grade 7 under the CBC curriculum.",
  },
  {
    question: "Do you provide transport?",
    answer:
      "Yes. We provide safe and reliable school transport within selected routes.",
  },
  {
    question: "How do I apply?",
    answer:
      "Visit our admissions page or contact the school office to begin the admission process.",
  },
  {
    question: "Do learners participate in co-curricular activities?",
    answer:
      "Yes. Learners participate in sports, swimming, taekwondo, chess, dancing, scouts, environmental club and book club.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">
            FAQs
          </span>

          <h2 className="mt-4 text-5xl font-black dark:text-white">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 bg-white dark:bg-gray-900"
              >

                <span className="font-semibold text-left dark:text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQSection;