function OfficeHours() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Office Hours
        </h2>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10">

          <div className="flex justify-between py-3">
            <span>Monday - Friday</span>
            <span>7:30 AM - 5:00 PM</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Saturday</span>
            <span>8:00 AM - 1:00 PM</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Sunday</span>
            <span>Closed</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default OfficeHours;