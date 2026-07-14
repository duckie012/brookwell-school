import Button from "../ui/Button";

function AboutCTA() {
  return (
    <section className="py-24 bg-purple-700">

      <div className="max-w-4xl mx-auto text-center text-white px-6">

        <h2 className="text-5xl font-bold mb-6">
          Give Your Child the Best Foundation
        </h2>

        <p className="text-xl leading-8 mb-10">

          Join Brookwell Harmony School and become part of a caring community
          where learning is fun and every learner is inspired to achieve
          excellence.

        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <Button to="/contact">
            Contact Us
          </Button>

          <Button
            to="/academics"
            variant="secondary"
          >
            Explore Academics
          </Button>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;