import Button from "../ui/Button";

function ContactCTA() {
  return (
    <section className="py-24 bg-purple-700 text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          We Look Forward to Meeting You
        </h2>

        <p className="mt-8 text-xl">
          Visit Brookwell Harmony School and discover a place where learning is fun.
        </p>

        <div className="mt-10">
          <Button to="/">
            Back to Home
          </Button>
        </div>

      </div>

    </section>
  );
}

export default ContactCTA;