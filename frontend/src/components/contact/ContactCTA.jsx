import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-black">

          Ready To Join Brookwell Harmony School?

        </h2>

        <p className="mt-8 text-lg text-purple-100 leading-8">

          Give your child the opportunity to learn, grow and excel in a
          caring environment where learning is fun.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/admissions"
            className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Apply Now
          </Link>

          <Link
            to="/about"
            className="border-2 border-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white hover:text-purple-700 transition"
          >
            Learn More

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;