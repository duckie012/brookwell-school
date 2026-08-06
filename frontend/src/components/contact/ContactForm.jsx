import { Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-black text-center dark:text-white">

            Send Us A Message

          </h2>

          <form className="mt-12 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <textarea
              rows="6"
              placeholder="Your Message..."
              className="w-full rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            ></textarea>

            <button
              className="flex items-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl hover:bg-purple-800 transition"
            >

              Send Message

              <Send size={18} />

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;