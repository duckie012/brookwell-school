function FAQSection() {
  const faqs = [
    {
      q: "Which classes do you offer?",
      a: "We admit learners from Play Group to Grade 7.",
    },
    {
      q: "Do you provide transport?",
      a: "Yes, our school buses serve Nanyuki and nearby areas.",
    },
    {
      q: "Which co-curricular activities are available?",
      a: "Swimming, Chess, Dancing, Taekwondo, Scouts, Environmental Club and more.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6"
            >
              <h3 className="font-bold text-xl mb-3">
                {faq.q}
              </h3>

              <p>{faq.a}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQSection;