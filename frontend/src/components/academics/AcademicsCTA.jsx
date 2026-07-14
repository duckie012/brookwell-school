import Button from "../ui/Button";

function AcademicsCTA() {
  return (
    <section className="py-24 bg-purple-700 text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Join Brookwell?
        </h2>

        <p className="mt-8 text-xl">
          Admissions are open from Play Group to Grade 7.
        </p>

        <div className="mt-10">

          <Button to="/contact">
            Enquire Now
          </Button>

        </div>

      </div>

    </section>
  );
}

export default AcademicsCTA;