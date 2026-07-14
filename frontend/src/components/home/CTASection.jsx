import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-24 bg-purple-700">

      <div className="max-w-5xl mx-auto text-center text-white px-6">

        <h2 className="text-5xl font-bold mb-6">
          Join Brookwell Harmony School Today
        </h2>

        <p className="text-xl leading-8 mb-10">

          We welcome learners from Play Group to Grade 7 into an environment
          that promotes academic excellence, Christian values and talent
          development.

        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <Link
            to="/contact"
            className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold"
          >
            Contact Us
          </Link>

          <Link
            to="/about"
            className="border border-white px-8 py-4 rounded-lg"
          >
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTASection;