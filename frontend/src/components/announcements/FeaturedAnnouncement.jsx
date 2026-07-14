import { Pin } from "lucide-react";

function FeaturedAnnouncement() {
  return (
    <section className="py-16 bg-purple-700">

      <div className="max-w-6xl mx-auto px-6 text-white">

        <div className="flex items-center gap-3 mb-6">

          <Pin />

          <span className="font-bold uppercase">
            Featured Announcement
          </span>

        </div>

        <h2 className="text-4xl font-bold mb-6">
          Term Three Admissions Now Open
        </h2>

        <p className="text-lg leading-8 text-purple-100">

          Brookwell Harmony School is pleased to announce that admissions
          are open for learners from Play Group to Grade 7.
          Parents are encouraged to visit the school office for
          registration and enquiries.

        </p>

      </div>

    </section>
  );
}

export default FeaturedAnnouncement;