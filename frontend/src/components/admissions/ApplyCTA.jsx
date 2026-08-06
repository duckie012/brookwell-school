import { Link } from "react-router-dom";

function ApplyCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-black">

          Give Your Child The Best Start

        </h2>

        <p className="mt-8 text-lg text-purple-100 leading-8">

          Join Brookwell Harmony School and become part of a community where
          learning is fun and every learner is inspired to achieve excellence.

        </p>

        <Link
          to="/contact"
          className="inline-block mt-12 bg-white text-purple-700 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Contact Admissions
        </Link>

      </div>

    </section>
  );
}

export default ApplyCTA;