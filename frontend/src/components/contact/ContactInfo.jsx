import {
  MapPin,
  Phone,
  Mail,
  Bus,
} from "lucide-react";

function ContactInfo() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-purple-700 text-white p-8 rounded-2xl text-center">
            <MapPin className="mx-auto mb-5" size={45} />
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p>Nanyuki, Kenya</p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl text-center">
            <Phone className="mx-auto mb-5 text-purple-700" size={45} />
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p>+254 XXX XXX XXX</p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl text-center">
            <Mail className="mx-auto mb-5 text-purple-700" size={45} />
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p>info@brookwell.ac.ke</p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl text-center">
            <Bus className="mx-auto mb-5 text-purple-700" size={45} />
            <h3 className="text-xl font-bold mb-3">Transport</h3>
            <p>School buses available.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;