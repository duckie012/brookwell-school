import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 overflow-hidden">

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-3xl"
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2">

            <PhoneCall size={20} />

            <span>Get In Touch</span>

          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black">

            We'd Love To Hear From You

          </h1>

          <p className="mt-8 text-lg leading-9 text-purple-100">

            Whether you're making an admission enquiry,
            booking a school tour or simply looking for more
            information, we're here to help.

          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactHero;