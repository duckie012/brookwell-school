import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function ContactInfo() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-3xl bg-purple-50 dark:bg-gray-900 p-8 shadow-lg">

            <MapPin className="text-purple-700" size={34} />

            <h3 className="mt-6 text-xl font-bold dark:text-white">

              Visit Us

            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">

              Nanyuki, Kenya

            </p>

          </div>

          <div className="rounded-3xl bg-purple-50 dark:bg-gray-900 p-8 shadow-lg">

            <Phone className="text-purple-700" size={34} />

            <h3 className="mt-6 text-xl font-bold dark:text-white">

              Call Us

            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">

              +254 XXX XXX XXX

            </p>

          </div>

          <div className="rounded-3xl bg-purple-50 dark:bg-gray-900 p-8 shadow-lg">

            <Mail className="text-purple-700" size={34} />

            <h3 className="mt-6 text-xl font-bold dark:text-white">

              Email

            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">

              info@brookwell.ac.ke

            </p>

          </div>

          <div className="rounded-3xl bg-purple-50 dark:bg-gray-900 p-8 shadow-lg">

            <Clock className="text-purple-700" size={34} />

            <h3 className="mt-6 text-xl font-bold dark:text-white">

              Office Hours

            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">

              Mon - Fri <br />

              8:00 AM - 5:00 PM

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;