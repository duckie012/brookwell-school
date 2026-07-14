function ContactForm() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Send Us a Message
        </h2>

        <form className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg border"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg border"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg border"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-lg border"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg border"
          />

          <button
            className="bg-purple-700 text-white px-10 py-4 rounded-lg hover:bg-purple-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default ContactForm;