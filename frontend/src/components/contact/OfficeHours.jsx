function OfficeHours() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl bg-purple-700 text-white p-10 shadow-xl">

          <h2 className="text-4xl font-black">

            Office Opening Hours

          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>

              <h3 className="font-semibold text-xl">

                Monday - Friday

              </h3>

              <p className="mt-2">

                8:00 AM - 5:00 PM

              </p>

            </div>

            <div>

              <h3 className="font-semibold text-xl">

                Saturday

              </h3>

              <p className="mt-2">

                9:00 AM - 1:00 PM

              </p>

            </div>

          </div>

          <p className="mt-10 text-purple-100">

            The school remains closed on Sundays and Public Holidays.

          </p>

        </div>

      </div>

    </section>
  );
}

export default OfficeHours;