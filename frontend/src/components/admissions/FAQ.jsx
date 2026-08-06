import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "When can I apply?",
    answer:
      "Applications are open throughout the year depending on available vacancies.",
  },
  {
    question: "Do you offer transport?",
    answer:
      "Yes. School transport is available on selected routes.",
  },
  {
    question: "Which curriculum do you offer?",
    answer:
      "Brookwell Harmony School follows the Competency Based Curriculum (CBC).",
  },
  {
    question: "Do you have co-curricular activities?",
    answer:
      "Yes. Swimming, Taekwondo, Chess, Dancing, Scouts, Environmental Club and Book Club.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">
            Admissions FAQ
          </span>

          <h2 className="mt-5 text-5xl font-black dark:text-white">

            Frequently Asked Questions

          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 bg-white dark:bg-gray-900"
              >

                <span className="font-semibold dark:text-white text-left">

                  {faq.question}

                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 leading-8 text-gray-600 dark:text-gray-400">

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

export default FAQ;