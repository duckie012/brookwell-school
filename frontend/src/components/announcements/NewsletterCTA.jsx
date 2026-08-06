import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

import { subscribeNewsletter } from "../../api/announcements";

function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);

    try {
      await subscribeNewsletter(email);

      setSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700"></div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
      >

        <span className="uppercase tracking-[0.2em] text-purple-200 font-semibold">

          Newsletter

        </span>

        <h2 className="mt-5 text-5xl font-black">

          Stay Connected

        </h2>

        <p className="mt-8 text-lg leading-8 text-purple-100 max-w-3xl mx-auto">

          Subscribe to receive school announcements,
          admission updates, event reminders and important
          notices directly in your inbox.

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col md:flex-row gap-5 justify-center"
        >

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 max-w-xl rounded-xl px-6 py-4 text-gray-900 outline-none shadow-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105 disabled:opacity-60"
          >

            {loading ? "Subscribing..." : "Subscribe"}

            <Send size={18} />

          </button>

        </form>

        {success && (

          <div className="mt-8 flex justify-center">

            <div className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3">

              <CheckCircle size={20} />

              <span>

                Thank you for subscribing to our newsletter!

              </span>

            </div>

          </div>

        )}

      </motion.div>

    </section>
  );
}

export default NewsletterCTA;