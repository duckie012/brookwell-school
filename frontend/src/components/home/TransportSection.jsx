function TransportSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Safe School Transport
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-8">

            Brookwell Harmony School provides reliable transport services
            within Nanyuki and surrounding areas.

            Safety, punctuality and comfort remain our priority.

          </p>

          <button className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg">
            Transport Routes
          </button>

        </div>

        <div className="bg-purple-700 rounded-2xl h-87.5 flex items-center justify-center text-white text-2xl">

          School Bus Image

        </div>

      </div>

    </section>
  );
}

export default TransportSection;