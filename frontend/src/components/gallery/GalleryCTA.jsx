import Button from "../ui/Button";

function GalleryCTA() {
  return (
    <section className="py-24 bg-purple-700">

      <div className="max-w-4xl mx-auto text-center text-white px-6">

        <h2 className="text-5xl font-bold">
          Want to See More?
        </h2>

        <p className="mt-8 text-xl">

          Visit Brookwell Harmony School and experience our vibrant
          learning environment.

        </p>

        <div className="mt-10">

          <Button to="/contact">
            Schedule a Visit
          </Button>

        </div>

      </div>

    </section>
  );
}

export default GalleryCTA;