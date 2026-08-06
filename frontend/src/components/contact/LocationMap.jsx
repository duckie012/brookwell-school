import { MapPin, Navigation } from "lucide-react";

function LocationMap() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.2em] text-purple-600 font-semibold">
            Find Us
          </span>

          <h2 className="mt-4 text-5xl font-black dark:text-white">
            Visit Our Campus
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Brookwell Harmony School is conveniently located in Nanyuki,
            providing a secure and peaceful learning environment.
          </p>

        </div>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            title="Brookwell Harmony School Location"
            src="https://www.google.com/maps?q=Nanyuki,+Kenya&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          />

        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl bg-white dark:bg-gray-950 shadow-lg p-8">

            <MapPin className="text-purple-700" size={32} />

            <h3 className="mt-5 text-2xl font-bold dark:text-white">
              Physical Address
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
              Brookwell Harmony School
              <br />
              Nanyuki, Laikipia County
              <br />
              Kenya
            </p>

          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-950 shadow-lg p-8">

            <Navigation className="text-purple-700" size={32} />

            <h3 className="mt-5 text-2xl font-bold dark:text-white">
              Directions
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
              Easily accessible from Nanyuki town with ample parking
              and a safe drop-off area for parents and school buses.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LocationMap;