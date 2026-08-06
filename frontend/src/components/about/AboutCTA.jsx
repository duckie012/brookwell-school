import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-700 to-purple-900 text-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Join Brookwell Harmony School?
        </h2>

        <p className="mt-6 text-lg leading-8 text-purple-100">
          Give your child a strong academic foundation in a caring,
          inspiring and engaging environment.
        </p>

        <Link
          to="/admissions"
          className="inline-block mt-10 rounded-xl bg-white text-purple-700 px-8 py-4 font-semibold hover:scale-105 transition"
        >
          Apply for Admission
        </Link>

      </div>

    </section>
  );
}

export default AboutCTA;